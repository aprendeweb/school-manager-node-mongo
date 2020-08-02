const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const model = mongoose.model('users', schema);
module.exports = model;
