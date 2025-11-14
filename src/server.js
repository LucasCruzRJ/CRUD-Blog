import app from "./app.js";
const PORT = process.env || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
