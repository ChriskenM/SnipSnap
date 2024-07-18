
const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking({ ...req.body, user: req.userId });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking' });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      { cancellation: true },
      { new: true }
    );
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error cancelling booking' });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user bookings' });
  }
};