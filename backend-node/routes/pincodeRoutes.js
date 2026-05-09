const express = require('express');
const router = express.Router();
const { getPincodeData } = require('../controllers/pincodeController');

router.get('/:pincode', getPincodeData);

module.exports = router;
