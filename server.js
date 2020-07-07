const express = require('express');
const app = express();
const { port } = require('./config');
const courseRoutes = require('./src/routes/courses');
const studentRoutes = require('./src/routes/students');
const teacherRoutes = require('./src/routes/teachers');

app.use(express.json());

app.use('/courses', courseRoutes);
app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);

app.listen(port, () => {
  console.log('Server listen on port', port);
});
