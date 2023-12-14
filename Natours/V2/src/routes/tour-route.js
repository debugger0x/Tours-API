const express = require('express');

const controller = require('../controllers/tour-controller');

const Router = express.Router();

Router.route('/').get(controller.getTours).post(controller.createTour);
Router.route('/:id').get(controller.getTour).delete().patch();

module.exports = Router;