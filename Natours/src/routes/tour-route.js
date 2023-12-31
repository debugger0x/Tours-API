const express = require('express');

const controller = require('../controllers/tour-controller');
const { createReview } = require('../controllers/review-controller');
const { protect, restrictTo } = require('../controllers/auth-controller');

const Router = express.Router();

Router.route('/tour-stats').get(controller.getTourStats);
Router.route('/getmonthlyplan/:year').get(
  protect,
  restrictTo('admin', 'lead-guide', 'guide'),
  controller.getMonthlyPlan
);

Router.route('/')
  .get(controller.getTours)
  .post(protect, restrictTo('admin', 'lead-guide'), controller.createTour);
Router.route('/:id')
  .get(controller.getTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), controller.deleteTour)
  .patch(controller.updateTour);

Router.route('/:tourId/reviews').post(
  protect,
  restrictTo('user'),
  createReview
);

module.exports = Router;
