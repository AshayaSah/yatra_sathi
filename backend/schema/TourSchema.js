
const mongoose = require("mongoose");

const TourSchema = new mongoose.Schema({
  location_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
    required: true
  },
  tourist_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  guide_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Guide",
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ["planned", "ongoing", "completed"],
    default: "planned"
  },
  price: Number
});

const Tour = mongoose.model("Tour", TourSchema);
module.exports = Tour;
