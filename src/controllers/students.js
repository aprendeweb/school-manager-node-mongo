const {
  mongo: { studentsModel },
} = require('../../databases');

module.exports = {
  getAll: async (req, res) => {
    const students = await studentsModel.find();
    res.send(students);
  },
  createOne: async (req, res) => {
    const { firstName, lastName, age } = req.body;
    const newStuden = new studentsModel({ firstName, lastName, age });
    await newStuden.save();
    res.send(`${newStuden.firstName} saved`);
  },
  updateOne: async (req, res) => {
    const { _id } = req.params;
    const { firstName, lastName, age } = req.body;
    const updatedStudent = await studentsModel.findByIdAndUpdate(
      _id,
      { $set: { firstName, lastName, age } },
      { useFindAndModify: false }
    );
    res.send(`${updatedStudent.firstName} updated`);
  },
  deleteOne: async (req, res) => {
    const { _id } = req.params;
    const deletedStudent = await studentsModel.findByIdAndDelete(_id);
    res.send(`${deletedStudent.firstName} deleted`);
  },
  assignCourse: async (req, res) => {
    const { _id } = req.params;
    const { course } = req.body;
    const studentUpdated = await studentsModel.findByIdAndUpdate(
      _id,
      {
        $push: { courses: course },
      },
      { useFindAndModify: false }
    );
    res.send(`${studentUpdated.firstName} updated`);
  },
};
