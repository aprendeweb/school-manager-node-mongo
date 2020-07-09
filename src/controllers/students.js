const {
  mongo: { studentsModel },
} = require('../../databases');

module.exports = {
  getAll: async (req, res) => {
    const students = await studentsModel.find();
    res.send(students);
  },
  createOne: async (req, res) => {
    const { firstName, lastName, age, courses } = req.body;
    const newStuden = new studentsModel({ firstName, lastName, age, courses });
    await newStuden.save();
    res.send(`${newStuden.firstName} saved`);
  },
  updateOne: async (req, res) => {
    const { _id } = req.params;
    const { firstName, lastName, age, courses } = req.body;
    const updatedStudent = await studentsModel.findByIdAndUpdate(
      _id,
      { $set: { firstName: firstName, lastName, age, courses } },
      { useFindAndModify: false }
    );
    res.send(`${updatedStudent.firstName} updated`);
  },
  deleteOne: async (req, res) => {
    const { _id } = req.params;
    const deletedStudent = await studentsModel.findByIdAndDelete(_id);
    res.send(`${deletedStudent.firstName} deleted`);
  },
};
