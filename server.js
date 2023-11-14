const express = require('express');
const mongoose = require('./db');
const carsRoute = require('./carsRoute'); // Adjust the path based on your project structure

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Use the car routes
app.use('/api/cars', carsRoute);

app.get('/', (req, res) => res.send('Hello World'));
app.listen(port, () => console.log(`Node JS Server Started in port ${port}`));
