"use strict";

const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "./client")));

// // Run the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});

module.exports = { app };
