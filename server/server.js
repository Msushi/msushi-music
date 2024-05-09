require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_SERVER_URI)
const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log("Connected to database"));

app.use(express.json());
app.use(cors());


const reviewRoutes = require('./api/reviewRoutes');
app.use('/api/review', reviewRoutes);

const loginRoutes = require('./api/loginRoutes');
app.use('/api', loginRoutes);

const imageRoutes = require('./api/imageRoutes');
app.use('/api', imageRoutes);

app.listen(3000, () => console.log("Server online!"));