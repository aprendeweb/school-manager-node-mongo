const faker = require('faker');
const { studentsModel } = require('../');

module.exports = async () => {
  for (let i = 0; i <= 10; i++) {
    const newStudent = new studentsModel({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: faker.random.number(50),
    });

    await newStudent.save();
  }
};
