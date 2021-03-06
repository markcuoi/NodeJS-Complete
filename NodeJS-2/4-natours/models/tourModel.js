const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
  },

  duration: {
    type: Number,
    required: [true, 'A tour must hav a duration'],
  },

  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must hav a group size'],
  },

  difficulty: {
    type: String,
    required: [true, 'A tour must hav a difficulty'],
  },

  ratingAverage: {
    type: Number,
    default: 4.5,
  },

  ratingQuantity: {
    type: Number,
    default: 0,
  },

  price: {
    type: Number,
    require: [true, 'A tour must have a price'],
  },

  priceDiscount: Number,

  summary: {
    type: String,
    trim: true,
    required: [true, 'The tour must have a description'],
  },

  description: {
    type: String,
    trim: true,
  },

  imageCover: {
    type: String,
    required: [true, 'The tour must have a cover image'],
  },

  images: [String],

  createAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },

  startDates: [Date],
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
