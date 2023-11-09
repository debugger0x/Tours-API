const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  difficulty: String,
  duration: String,
  maxGroupsize: Number,
  ratingsAverage: Number,
  ratingsAuantity: Number,
  summary: String,
  description: String,
  imageCover: String,
  images: Array,
  startDates: Array,
  rating: {
    type: Number,
    default: '4.5'
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a name!']
  }
});

const Tours = mongoose.model('Tours', tourSchema);

module.exports = Tours;
