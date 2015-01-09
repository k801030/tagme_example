var mongoose = require('mongoose');

// Schema
var petSchema = mongoose.Schema({
  name: { type: String, index: true },
  type: String,
  updated: { type: Date, default: Date.now },
  _id: { type: mongoose.Schema.Types.ObjectId, index: true }
});

// Method
petSchema.methods.speak = function () {
  var greeting = this.name ? this.name+'! '+this.name+'!' : '(unknown)';
  console.log(greeting);
};

// Model
var Pet = mongoose.model('Pet', petSchema);

module.exports = {
  Pet: Pet
}