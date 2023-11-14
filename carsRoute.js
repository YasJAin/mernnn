const express = require('express');
const router = express.Router();
const Car = require('./Models/carsSchema'); // Adjust the path based on your project structure

// Route to get all cars
router.get('/getallcars', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
