// bookingRoutes.js
/*const express = require('express');
const Booking = require('./Models/BookingModel'); // Corrected import statement

const router = express.Router();

router.post('/bookcar', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: 'Booking is successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});*/

// bookingRoutes.js
const express = require('express');
const router = express.Router();
const Booking = require('./Models/BookingModel');

router.post('/bookcar', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.send('Our Booking is Successful');
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});



router.get("/getallbookings", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("car");
    res.send(bookings);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports=router;
