import dotenv from "dotenv";
import express from "express";
import pool from "./infra/database.js";

dotenv.config({ path: ".env" });

const app = express();
const port = process.env.POSTGRES_PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "server running" });
});

app.listen(port, () => console.log(`Server has started on port ${port}`));
