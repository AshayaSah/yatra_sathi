const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: String,
  role: {
    type: String,
    enum: ["tourist", "local_guide", "tourist_guide"],
    required: true
  },
  photo: String,
  bio: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
