const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please input your name'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please input your email'],
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please provide a password!'],
    minLength: 8,
  },
  passwoedConfirm: {
    type: String,
    required: [true, 'Please confirm your password']
    minLength: 8,
  },
});

const User = mongoose.model('User', userSchema)