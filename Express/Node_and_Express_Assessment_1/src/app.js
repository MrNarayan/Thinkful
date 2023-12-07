const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

// Middleware
const validateZip = require("./middleware/validateZip");
const getZoos = require("./utils/getZoos");

// Routes
app.get("/check/:zip", validateZip, (req, res, next) => {
  const zip = `${req.params.zip}`;
  const message = getZoos(req.params.zip) ? `${zip} exists in our records.` : `${zip} does not exist in our records.`;
  res.send(message);
});

app.get("/zoos/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip;
  const zoos = getZoos(req.params.zip);
  const start = (zip === "all" || zip === "All")? `All zoos:` : `${req.params.zip} zoos:`
  const message = (zoos.length !== 0)? `${start} ${zoos.join("; ")}` : `${req.params.zip} has no zoos.`;
  res.send(message);
});

// Error handling
app.use((req, res, next) => {
  next("That route could not be found!");
});

app.use((err, req, res, next) => {
  err = err || "Internal server error!";
  res.send(err);
});

module.exports = app;