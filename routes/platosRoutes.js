const express = require('express');

const router = express.Router();

const controller =
require('../controllers/platosController');

router.get('/',
controller.obtenerPlatos);

module.exports = router;