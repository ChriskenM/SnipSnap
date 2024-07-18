
const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);

module.exports = router;