//this code used for set up server using express.js and mongodb to connect the server

const express = require("express");
const app = require("./app.js");
require("dotenv").config();
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

// Wide listing a cors to accept a specific domain route
const cors = require("cors");
// Parse JSON bodies (as sent by API clients)

app.use(express.json()); // Parsing JSON bodies
app.use(express.urlencoded({ extended: false })); // Parsing URL-encoded bodies

//enable cors usage
app.use(cors());
// Connect to DATABASE
const DATABASE_URL = process.env.MONGODB_URI;
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

// Start Server
app.listen(port, () =>
  console.log(`App listening on port ${port}!`)
);
