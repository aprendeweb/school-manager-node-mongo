const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true },
  teachers: [{ type: Schema.Types.ObjectId, refs: 'teachers' }],
});

const model = mongoose.model('courses', schema);
module.exports = model;
