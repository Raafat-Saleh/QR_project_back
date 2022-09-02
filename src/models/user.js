/** @format */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  phoneNumberWhatsApp: {
    type: String,
    trim: true,
  },
  facebook: {
    type: String,
    trim: true,
  },
  instagram: {
    type: String,
    trim: true,
  },
  twitter: {
    type: String,
    trim: true,
  },
  phoneNumberEmergency1: {
    type: String,
    trim: true,
  },
  bloodType: {
    type: String,
    trim: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
