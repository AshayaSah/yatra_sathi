const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  coordinates: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  photos: [
    {
      photo_id: mongoose.Schema.Types.ObjectId,
      url: String,
      uploaded_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      description: String,
      uploaded_at: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

const Location = mongoose.model("Location", LocationSchema);
module.exports = Location;
