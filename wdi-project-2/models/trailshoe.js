const mongoose = require('mongoose');

const trailshoeSchema = new mongoose.Schema({
  brand: String,
  name: String,
  image: { type: String, required: true},
  description: String
});

module.exports = mongoose.model('Trailshoe', trailshoeSchema);
