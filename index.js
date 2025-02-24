require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3010;

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Error connecting to database:', err));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Customer Management System Backend is running!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});