import pool from "../config/db.js"; 

export const Reservation = {
  async create(reservationData) {
    const [result] = await pool.query(
      `INSERT INTO reservations 
      (name, email, reservation_date, reservation_time, guests, table_number)
      VALUES (?, ?, ?, ?, ?, ?)`,
      [
        reservationData.name,
        reservationData.email,
        reservationData.reservation_date,
        reservationData.reservation_time,
        reservationData.guests,
        reservationData.table_number,
      ]
    );
    return { id: result.insertId, ...reservationData };
  },

  async findConflicting(date, time, tableNumber) {
    const [rows] = await pool.query(
      `SELECT * FROM reservations 
      WHERE reservation_date = ? 
      AND reservation_time = ? 
      AND table_number = ?`,
      [date, time, tableNumber]
    );
    return rows[0];
  },

  async findReserved(date, time) {
    const [rows] = await pool.query(
      `SELECT table_number FROM reservations 
      WHERE reservation_date = ? 
      AND reservation_time = ?`,
      [date, time]
    );
    return rows.map((row) => row.table_number);
  },
};
