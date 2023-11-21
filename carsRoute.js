// carsRoute.js
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


router.post("/addcar",async(req,res)=>{
    try{
        const newcar= new Car(req.body)
        await newcar.save()
        res.send('car added successfully')
    } catch(error){
        return res.status(500).json(error);
    }
});

router.post("/editcar",async(req,res) =>{
    try{
        const car = await Car.findOne({_id: req.body._id})
        car.name = req.body.name
        car.image = req.body.image
        car.fuelType = req.body.fuelType
        car.rentPerHour = req.body.rentPerHour
        car.seatingCapacity = req.body.seatingCapacity
        await car.save()
        res.send('Car detail updated successfully')
    }
    catch(error){
        return res.status(500).json(error);
    }
});


router.post("/deletecar", async(req, res) => {

    try{
        await Car.findOneAndDelete({_id : req.body.carid})
        res.send('Car deleted sucessfully')
    } catch(error) {
        return res.status(500).json(error);
    }
});

module.exports =router;



