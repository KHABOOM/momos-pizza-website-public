import pool from "../config/db.js";

import express from "express";
import {
  createReservation,
  getAvailableTables,
} from "../controllers/reservationController.js";

const router = express.Router();

// POST /api/reservations
router.post("/", createReservation);

// GET /api/reservations/available
router.get("/available", getAvailableTables);

export default router;
