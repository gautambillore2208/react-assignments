const express = require("express");
const cors = require("cors");
const storeRoutes = require("./routes/storeRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/stores", storeRoutes);

module.exports = app;
