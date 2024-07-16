
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  haircutStyle: { type: String, required: true },
  selectedStyle: { type: String, required: true },
  dateTime: { type: Date, required: true },
  music: String,
  cancellation: { type: Boolean, default: false },
});

module.exports = mongoose.model('Booking', bookingSchema);