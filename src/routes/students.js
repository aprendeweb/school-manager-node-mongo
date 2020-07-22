const express = require('express');
const router = express.Router();
const studentSchema = require('../schemas/students');
const validate = require('../middlewares/validateData');
const {
  createOne,
  deleteOne,
  getAll,
  updateOne,
  assignCourse,
  count,
  getByfirstName,
  getStudentsAgeGreaterThan,
} = require('../controllers/students');

router.get('/', getAll);
router.get('/getByfirstName/:firstName', getByfirstName);
router.get('/getStudentsAgeGreaterThan/', getStudentsAgeGreaterThan);
router.get('/count/', count);
router.post('/', validate(studentSchema), createOne);
router.put('/:_id', validate(studentSchema), updateOne);
router.put('/assignCourse/:_id', assignCourse);
router.delete('/:_id', deleteOne);

module.exports = router;
