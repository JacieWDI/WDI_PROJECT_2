const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true }
});

commentSchema.methods.belongsTo = function commentBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

const trailshoeSchema = new mongoose.Schema({
  brand: String,
  name: String,
  image: { type: String, required: true},
  description: String,
  stars: { type: Number, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema]
});

trailshoeSchema.methods.belongsTo = function trailshoeBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

module.exports = mongoose.model('Trailshoe', trailshoeSchema);
