const express = require('express');
const hashController = require('../controllers/hashController');
const router = express.Router();

// Register a new user
router.post('/password', hashController.hashedPassword);

module.exports = router;
