const User = require('../model/user-model');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

function filteredObj(obj, ...allowedFields) {
  const newObject = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObject[el] = obj[el];
  });
  return newObject;
}

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: users,
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  // create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm)
    return next(
      new AppError(
        'This route is not for password updates. Please use /updatePassword/',
        400
      )
    );

  const filteredBody = filteredObj(req.body, 'name', 'email');

  const udpatedUser = User.findByIdAndUpdate(req.user._id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: udpatedUser,
    },
  });

  // update uesr document
});
