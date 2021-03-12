const mongoose = require("mongoose");
// vehicle showroom Schema
const vehicleshowroomSchema = mongoose.Schema({
  modelNumber: {
    type: String,
    required: true,
  },
  engineType: {
    type: String,
    enum: ["oil", "gas", "diesel"],
    required: true,
  },
  enginePower: {
    type: String,
    required: true,
  },
  tireSize: {
    type: String,
    enum: ["small", "large", "medium"],
    default: "medium",
  },
  vehicleType: {
    type: String,
    enum: ["normal", "sports", "heavy"],
    default: "normal",
  },
  turbo: {
    type: String,
    enum: ["yes", "no"],
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  },
  visitors: {
    type: Number,
    default: 30,
  },
});
// Define and export
module.exports = mongoose.model("Vehicleshowroom", vehicleshowroomSchema);
