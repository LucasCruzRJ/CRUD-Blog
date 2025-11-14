import mongoose from "mongoose";
const stringDeConexao = "STRING_DE_CONEXAO";

mongoose.connect(stringDeConexao);

const db = mongoose.connection;

export default db;
