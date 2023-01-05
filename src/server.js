const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const app = express();

// eslint-disable-next-line no-unused-vars
const connection = require("../config/database/database");

dotenv.config();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.listen(process.env.PORT, () => console.log("run"));
