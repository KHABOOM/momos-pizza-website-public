import { Reservation } from "../models/reservation.js";
import { sendConfirmationEmail } from "../utils/email.js";
import pool from "../config/db.js";

// Funktion, um zu überprüfen, ob die Zeit eine volle Stunde ist
function isFullHour(time) {
  const [hours, minutes] = time.split(":");
  return minutes === "00"; // Nur volle Stunden zulassen
}

export const createReservation = async (req, res) => {
  const { reservation_date, reservation_time, table_number, email } = req.body; // Extrahiere die benötigten Werte

  try {
    // Überprüfen, ob die Zeit eine volle Stunde ist
    if (!isFullHour(reservation_time)) {
      return res.status(400).json({
        error:
          "Bitte geben Sie eine volle Stunde als Reservierungszeit ein (z.B. 18:00).",
      });
    }

    // Überprüfen, ob der Tisch bereits reserviert ist
    const existing = await Reservation.findConflicting(
      reservation_date,
      reservation_time,
      table_number
    );

    if (existing) {
      return res.status(400).json({ error: "Tisch bereits reserviert" });
    }

    // Neue Reservierung erstellen
    const newReservation = await Reservation.create(req.body);

    // Bestätigungsmail senden
    await sendConfirmationEmail(email, newReservation);

    res.status(201).json(newReservation); // Erfolgreiche Antwort zurückgeben
  } catch (error) {
    res.status(500).json({ error: error.message }); // Fehlerbehandlung
  }
};

export const getAvailableTables = async (req, res) => {
  try {
    const { date, time } = req.query; // Datum und Zeit aus den Query-Parametern

    const allTables = Array.from({ length: 10 }, (_, i) => i + 1); // Angenommen, es gibt 10 Tische

    // Reservierte Tische für das angegebene Datum und die Zeit finden
    const reservedTables = await Reservation.findReserved(date, time);
    const availableTables = allTables.filter(
      (t) => !reservedTables.includes(t) // Nur die nicht reservierten Tische
    );

    res.json(availableTables); // Verfügbare Tische zurückgeben
  } catch (error) {
    res.status(500).json({ error: error.message }); // Fehlerbehandlung
  }
};
