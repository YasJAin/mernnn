const mongoose = require('mongoose');

const carSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fuelType: {
      type: String,
      required: true,
    },
    rentPerHour: {
      type: Number,
      required: true,
    },
    seatingCapacity: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// check if car model is already created
if (mongoose.models.cars) {
  const carModel = mongoose.model("cars");
  mongoose.deleteModel(carModel.modelName);
}

const Car = mongoose.model("cars", carSchema);

module.exports = Car;
