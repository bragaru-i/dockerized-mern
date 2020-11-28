const express = require("express");
const cors = require("cors");
const path = require("path");

// starting App

const app = express();

app.use("/", (req, res) => {
  res.send("It WORKS");
});
// setting cors

app.use(cors());

app.use(express.json());

module.exports = app;
