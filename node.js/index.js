const express = require("express");
const serverless = require("serverless-http");
const app = express();

app.get("/node", (req, res) => {
  res.send("Hello, Node.js!");
});

module.exports.handler = serverless(app);
