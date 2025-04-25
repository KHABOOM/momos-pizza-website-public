import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import './ReservationForm.css';

function ReservationForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [email, setEmail] = useState('');
  const [tableNumber, setTableNumber] = useState(null);
  const [availableTables, setAvailableTables] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Formular-Referenz für EmailJS
  const form = useRef();

  const today = new Date().toISOString().split('T')[0];
  const now = new Date();
  const currentHour = now.getHours() + (now.getMinutes() > 0 ? 1 : 0);

  const formatTime = (rawTime) => {
    if (!rawTime) return '';
    const [hours] = rawTime.split(':');
    return `${hours.padStart(2, '0')}:00`;
  };

  const getMinTime = () => {
    if (date === today) {
      const earliestHour = Math.max(10, currentHour);
      return `${Math.min(earliestHour, 20).toString().padStart(2, '0')}:00`;
    }
    return '10:00';
  };

  const getMaxTime = () => '20:00';

  const validateTime = (selectedTime) => {
    const [hours] = selectedTime.split(':');
    const hour = parseInt(hours, 10);
    return hour >= 10 && hour < 20;
  };

  useEffect(() => {
    if (date === today && time < getMinTime()) {
      setTime(getMinTime());
    }
  }, [date]);

  const fetchAvailableTables = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:25060/api/reservations/available?date=${date}&time=${time}`,
      );
      setAvailableTables(response.data);
    } catch (err) {
      setError('Fehler beim Abrufen der verfügbaren Tische.');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (date && time) {
      if (!validateTime(time)) {
        setTime(getMinTime());
      }
      fetchAvailableTables();
    }
  }, [date, time]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedDateTime = new Date(`${date}T${time}`);
    const [hours] = time.split(':');
    const hour = parseInt(hours, 10);
    if (hour < 10 || hour >= 20) {
      setError('Reservierungen sind nur zwischen 10:00 und 20:00 Uhr möglich');
      return;
    }
    if (selectedDateTime < new Date()) {
      setError('Reservierungen können nur für zukünftige Zeitpunkte gemacht werden.');
      return;
    }
    if (!tableNumber) {
      setError('Bitte wählen Sie einen Tisch aus.');
      return;
    }

    const reservationData = {
      name,
      reservation_date: date,
      reservation_time: time,
      guests,
      email,
      table_number: tableNumber,
    };

    try {
      await axios.post(
        'http://localhost:25060/api/reservations',
        reservationData,
      );
      setSuccessMessage('Reservierung erfolgreich! Eine Bestätigungsmail wurde gesendet.');
      setError('');
      setAvailableTables([]);

      // E-Mail Versand via EmailJS
      emailjs.sendForm(
        'service_7yq8rl9',
        'template_1ibenaj',
        form.current,
        { publicKey: 'bhosGByE6DZOhrQsw' },
      ).then(
        () => {
          console.log('Email erfolgreich versendet!');
        },
        (err) => {
          console.log('Email Versand fehlgeschlagen: ', err.text);
        },
      );
    } catch (err) {
      setError(
        err.response?.data?.error || 'Es gab ein Problem bei der Reservierung.',
      );
      setSuccessMessage('');
    }
  };

  return (
    <div className="reservation-form">
      <h2 className="reservation-form__title">Reservierung vornehmen</h2>
      <form ref={form} onSubmit={handleSubmit} className="reservation-form__form">
        <div className="reservation-form__input-group">
          <label htmlFor="name" className="reservation-form__label">
            Name:
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="reservation-form__input"
            />
          </label>
        </div>
        <div className="reservation-form__input-group">
          <label htmlFor="date" className="reservation-form__label">
            Datum:
            <input
              type="date"
              id="date"
              name="reservation_date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={today}
              required
              className="reservation-form__input"
            />
          </label>
        </div>
        <div className="reservation-form__input-group">
          <label htmlFor="time" className="reservation-form__label">
            Uhrzeit (10:00 - 20:00):
            <input
              type="time"
              id="time"
              name="reservation_time"
              value={time}
              onChange={(e) => setTime(formatTime(e.target.value))}
              min={getMinTime()}
              max={getMaxTime()}
              step="3600"
              required
              className="reservation-form__input"
            />
          </label>
          <p className="reservation-form__hint">
            Nur volle Stunden zwischen 10:00 und 20:00 Uhr
          </p>
        </div>
        <div className="reservation-form__input-group">
          <label htmlFor="guests" className="reservation-form__label">
            Anzahl der Gäste:
            <input
              type="number"
              id="guests"
              name="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              required
              className="reservation-form__input"
            />
          </label>
        </div>
        <div className="reservation-form__input-group">
          <label htmlFor="email" className="reservation-form__label">
            E-Mail:
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="reservation-form__input"
            />
          </label>
        </div>
        <div className="reservation-form__input-group">
          <label htmlFor="table" className="reservation-form__label">
            Tisch wählen:
            {isLoading ? (
              <p className="reservation-form__loading">
                Lade verfügbare Tische...
              </p>
            ) : (
              <select
                id="table"
                name="table_number"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                className="reservation-form__input"
              >
                <option value="">Bitte wählen Sie einen Tisch</option>
                {availableTables.map((table) => (
                  <option key={table} value={table}>
                    Tisch {table}
                  </option>
                ))}
              </select>
            )}
          </label>
        </div>
        <button type="submit" className="reservation-form__button">
          Reservierung abschicken
        </button>
      </form>
      {error && <p className="reservation-form__error">{error}</p>}
      {successMessage && (
        <p className="reservation-form__success">{successMessage}</p>
      )}
    </div>
  );
}

export default ReservationForm;
