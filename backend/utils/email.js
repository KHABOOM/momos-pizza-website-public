import nodemailer from "nodemailer";
import pool from "../config/db.js";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendConfirmationEmail = async (to, reservation) => {
  const mailOptions = {
    from: '"Pizzeria" <noreply@pizzeria.com>',
    to,
    subject: "Reservierungsbestätigung",
    html: `
      <h1>Vielen Dank für deine Reservation!</h1>
      <p>Tisch ${reservation.table_number}</p>
      <p>Datum: ${reservation.reservation_date}</p>
      <p>Zeit: ${reservation.reservation_time}</p>
      <p>Gäste: ${reservation.guests}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Email send error:", error);
  }
};
