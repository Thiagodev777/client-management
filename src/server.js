require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();

// eslint-disable-next-line no-unused-vars
const connection = require("../config/database/database");

const mainRoutes = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(mainRoutes);

app.listen(process.env.PORT, () => console.log("run"));
