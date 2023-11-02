const User = require('./../models/userModules');
const catchAsync = require('../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = User.create(req.body);

  res.status(201).json({ status: 'Success!', data: { user: newUser } });
});
