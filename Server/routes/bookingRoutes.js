
const express = require('express');
const router = express.Router();
const { createBooking, cancelBooking } = require('../controllers/bookingController');
const auth = require('../middleware/auth');

router.post('/', auth, createBooking);
router.put('/:id/cancel', auth, cancelBooking);

module.exports = router;