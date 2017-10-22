const mongoose = require('mongoose');

const trailshoeSchema = new mongoose.Schema({
  brand: String,
  shoe: String,
  image: { type: String, required: true},
  description: String
});

module.exports = mongoose.model('Trailshoe', trailshoeSchema);
