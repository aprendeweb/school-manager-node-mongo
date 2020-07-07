const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  courses: [{ type: Schema.Types.ObjectId, refs: 'courses' }],
});

const model = mongoose.model('students', schema);
module.exports = model;
