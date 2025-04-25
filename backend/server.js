import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import reservationRouter from './routes/reservations.js';  // Importiere den Router für Reservierungen

dotenv.config();

const app = express();
const port = process.env.DB_PORT || 3000; // Hier kannst du auch DB_PORT verwenden oder einen anderen Port für deinen Server setzen

// Middleware
app.use(cors());
app.use(express.json());

// Routen einbinden
app.use("/api/reservations", reservationRouter);

// Beispielroute für einen Test
app.get("/test", (req, res) => {
  res.send("Willkommen im Pizzeria-Reservierungssystem!");
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
