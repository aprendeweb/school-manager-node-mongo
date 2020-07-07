const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
});

const model = mongoose.model('teachers', schema);
module.exports = model;
