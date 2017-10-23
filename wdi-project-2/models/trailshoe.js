const mongoose = require('mongoose');

const trailshoeSchema = new mongoose.Schema({
  brand: String,
  name: String,
  image: { type: String, required: true},
  description: String,
  stars: { type: Number, required: true }
});

trailshoeSchema.methods.belongsTo = function trailshoeBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

module.exports = mongoose.model('Trailshoe', trailshoeSchema);
