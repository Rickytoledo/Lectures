const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: { type: String, required: true, unique:true },
  color: {type: String, default: 'Pink'},
  age: Number,
  size: {type: String, enum: ['small', 'medium', 'large'] }
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;