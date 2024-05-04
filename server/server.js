require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_SERVER_URI)

app.listen(3000, () => console.log("Server online!"));