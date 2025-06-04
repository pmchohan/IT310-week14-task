const express = require('express');
const router = express.Router();
const { handleForm } = require('../controllers/contactController');

router.post('/contact', handleForm);

module.exports = router;
