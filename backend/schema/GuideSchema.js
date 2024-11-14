const mongoose = require("mongoose");

const GuideSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  type: {
    type: String,
    enum: ["tourist_guide", "local_guide"],
    required: true
  },
  languages: [String],
  rating: {
    type: Number,
    default: 0
  },
  experience: Number,
  photo: String,
  price_per_hour: Number,
  availability: {
    type: Boolean,
    default: true
  }
});

const Guide = mongoose.model("Guide", GuideSchema);
module.exports = Guide;
