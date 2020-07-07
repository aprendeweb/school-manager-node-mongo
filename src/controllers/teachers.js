const {
  mongo: { teachersModel },
} = require('../../databases');

module.exports = {
  getAll: (req, res) => {
    res.send('working');
  },
  createOne: async (req, res) => {
    const { firstName, lastName, age } = req.body;
    const newTeacher = new teachersModel({
      firstName,
      lastName,
      age,
    });
    await newTeacher.save();
    res.send('Saved');
  },
  updateOne: (req, res) => {
    res.send('working');
  },
  deleteOne: (req, res) => {
    res.send('working');
  },
};
