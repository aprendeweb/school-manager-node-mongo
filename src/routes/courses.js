const express = require('express');
const router = express.Router();
const courseSchema = require('../schemas/courses');
const validate = require('../middlewares/validateData');
const {
  createOne,
  deleteOne,
  getAll,
  updateOne,
} = require('../controllers/courses');

router.get('/', getAll);
router.post('/', validate(courseSchema), createOne);
router.put('/', validate(courseSchema), updateOne);
router.delete('/:id', deleteOne);

module.exports = router;
