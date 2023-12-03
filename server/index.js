const express = require("express");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");

//env
dotenv.config();

//db connection
dbConnect();

//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to app" });
});

module.exports = app;
