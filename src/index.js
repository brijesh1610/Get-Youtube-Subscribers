//this code used for set up server using express.js and mongodb to connect the server

const express = require("express");
const app = require("./app.js");
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
const DATABASE_URL =
  "mongodb+srv://Brijesh:161020@cluster0.cb5xrvq.mongodb.net/";
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`));
