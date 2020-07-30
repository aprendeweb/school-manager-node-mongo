const express = require('express');
const router = express.Router();
const teacherSchema = require('../schemas/teachers');
const validate = require('../middlewares/validateData');
const {
  createOne,
  deleteOne,
  getAll,
  updateOne,
  getCourses,
} = require('../controllers/teachers');

router.get('/', getAll);
router.get('/getCourses', getCourses);
router.post('/', validate(teacherSchema), createOne);
router.put('/:_id', validate(teacherSchema), updateOne);
router.delete('/:_id', deleteOne);

module.exports = router;
