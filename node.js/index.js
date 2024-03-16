const express = require("express");
const serverless = require("serverless-http");
const app = express();

// Rota GET para retornar "Hello, world!"
app.get("/", (req, res) => {
  res.send("Hello, Node.js!");
});

module.exports.handler = serverless(app);
