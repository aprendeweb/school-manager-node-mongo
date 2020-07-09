const {
  mongo: { teachersModel },
} = require('../../databases');

module.exports = {
  getAll: async (req, res) => {
    const teachers = await teachersModel.find();
    res.json(teachers);
  },
  createOne: async (req, res) => {
    const { firstName, lastName, age } = req.body;
    const newTeacher = new teachersModel({
      firstName,
      lastName,
      age,
    });
    await newTeacher.save();
    res.send(`${newTeacher.firstName} saved`);
  },
  updateOne: async (req, res) => {
    const { _id } = req.params;
    const { firstName, lastName, age } = req.body;
    const teacherUpdated = await teachersModel.findByIdAndUpdate(
      _id,
      {
        $set: { firstName, lastName, age },
      },
      { useFindAndModify: false }
    );
    res.send(`${teacherUpdated.firstName} updated`);
  },
  deleteOne: async (req, res) => {
    const { _id } = req.params;
    const teacherDeleted = await teachersModel.findByIdAndDelete(_id);
    res.send(`${teacherDeleted.firstName} deleted`);
  },
};
