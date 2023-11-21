// bookingModel.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, ref: 'cars', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  bookedTimeSlots: [
    { 
      from: { type: String, required: true },
      to: { type: String, required: true }
    }
  ],
  totalHours: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  transactionId: { type: String },
  driverRequired: { type: Boolean, default: false }
}, {
  timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
