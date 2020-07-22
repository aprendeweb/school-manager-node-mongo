const {
  mongo: { studentsModel },
} = require('../../databases');

module.exports = {
  getAll: async (req, res) => {
    const students = await studentsModel
      .find({ createdAt: { $exists: false } })
      .sort({ age: -1 })
      .skip(1);
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
  count: async (req, res) => {
    const total = await studentsModel.find().count();
    res.json({ total });
  },
  getByfirstName: async (req, res) => {
    const { firstName } = req.params;
    const studentsFound = await studentsModel.find({
      firstName: { $eq: firstName },
    });
    res.json(studentsFound);
  },
  getStudentsAgeGreaterThan: async (req, res) => {
    const { age } = req.query;
    const studentsFound = await studentsModel
      .find({ age: { $gt: age } })
      .limit(2);
    res.json(studentsFound);
  },
};
