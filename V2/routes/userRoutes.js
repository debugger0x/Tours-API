const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);
router.route('/resetpassword/:token').patch(authController.resetPassword);
router.route('/forgotpassword').post(authController.forgotPassword);
router
  .route('/updatepassword')
  .patch(authController.protection, authController.updatePassword);
router
  .route('/updateme')
  .patch(authController.protection, userController.updateMe);

router
  .route('/deleteme')
  .delete(authController.protection, userController.deleteMe);

// RESTFUL APIs
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
