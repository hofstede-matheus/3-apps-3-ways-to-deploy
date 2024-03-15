const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Rota GET para retornar "Hello, world!"
app.get("/", (req, res) => {
  res.send("Hello, Node.js!");
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
