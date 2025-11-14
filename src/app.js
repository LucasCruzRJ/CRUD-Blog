import express from "express";
import db from "./config/db.js";
const app = express();

db.on(
  "error",
  console.log.bind(console, "Erro na conexao com o banco de dados")
);
db.once("open", () => console.log("Conectado ao banco de dados"));

app.use(express.json());

export default app;
