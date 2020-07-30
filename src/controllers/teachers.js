const {
  mongo: { teachersModel, coursesModel },
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
  getCourses: async (req, res) => {
    const { name } = req.query;
    coursesModel
      .find({ teachers: { $not: { $size: 0 } } })
      .populate({ path: 'teachers', match: { firstName: name } })
      .exec((err, courses) => {
        if (err) {
          console.log(err);
          return res.send(err.message);
        }

        const teacherCourses = courses.filter(
          (course) => course.teachers.length > 0
        );
        res.json(teacherCourses);
      });
  },
};
