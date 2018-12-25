const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema;

const Beverage = new Schema({
  _id: ObjectId,
  name: String,
  price: Number,
}, {
  collection: 'Beverage',
});

module.exports = Beverage;
