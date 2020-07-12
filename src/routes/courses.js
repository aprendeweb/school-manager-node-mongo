const express = require('express');
const router = express.Router();
const courseSchema = require('../schemas/courses');
const validate = require('../middlewares/validateData');
const {
  createOne,
  deleteOne,
  getAll,
  updateOne,
  assignTeacher,
  removeTeacher,
} = require('../controllers/courses');

router.get('/', getAll);
router.post('/', validate(courseSchema), createOne);
router.put('/:_id', validate(courseSchema), updateOne);
router.put('/assignTeacher/:_id', assignTeacher);
router.put('/removeTeacher/:_id', removeTeacher);
router.delete('/:_id', deleteOne);

module.exports = router;
