const express = require('express');
const router = express.Router();

const sessionsController = require('../controllers/sessions');

/* GET home page. */
router.get('/', sessionsController.index);

module.exports = router;
