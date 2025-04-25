import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7yq8rl9',
        'template_i2q0xmj',
        form.current,
        { publicKey: 'bhosGByE6DZOhrQsw' }
      )
      .then(
        () => {
          setPopupMessage('Email gesendet!');
          setTimeout(() => {
            setPopupMessage('');
          }, 10000);
        },
        (err) => {
          console.log('FAIL...', err.text); // eslint-disable-line no-console
          setPopupMessage('Failed to send email. Please try again.');
          setTimeout(() => {
            setPopupMessage('');
          }, 10000);
        }
      );
    e.target.reset();
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Abonniere jetzt unseren Newsletter</h1>
        <p className="p__opensans">
          Erhalte Benachrichtigungen über neue Inhalte direkt per E-Mail!
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="app__newsletter-input flex__center">
        <input
          type="email"
          name="user_email"
          placeholder="Gib hier deine Mail-Adresse ein"
          required
        />
        <button type="submit" className="custom__button">
          Abonnieren
        </button>
      </form>
      {popupMessage && <div className="popup">{popupMessage}</div>}
    </div>
  );
};

export default Newsletter;
