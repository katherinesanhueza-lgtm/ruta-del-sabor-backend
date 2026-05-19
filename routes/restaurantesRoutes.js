const express = require('express');

const router = express.Router();

const controller =
require('../controllers/restaurantesController');

router.get('/',
controller.obtenerRestaurantes);

router.get('/:id',
controller.obtenerRestaurantePorId);

router.get('/:id/platos',
controller.obtenerPlatosRestaurante);

module.exports = router;
