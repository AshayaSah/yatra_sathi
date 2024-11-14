const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  tour_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tour",
    required: true
  },
  reviewer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  comment: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
