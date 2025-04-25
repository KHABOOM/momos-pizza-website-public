import mysql from "mysql2/promise";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

// Pfad zum Zertifikat
const __dirname = path.resolve();
const caCert = fs.readFileSync(
  path.join(__dirname, "certs", "ca-certificate.crt")
);

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 25060,
  ssl: {
    rejectUnauthorized: true,
    ca: caCert, // 👈 Zertifikat aus Datei
  },
  waitForConnections: true,
});
export default pool;
