const express = require('express');
const router = express.Router();
const teacherSchema = require('../schemas/teachers');
const validate = require('../middlewares/validateData');
const {
  createOne,
  deleteOne,
  getAll,
  updateOne,
} = require('../controllers/teachers');

router.get('/', getAll);
router.post('/', validate(teacherSchema), createOne);
router.put('/', validate(teacherSchema), updateOne);
router.delete('/:id', deleteOne);

module.exports = router;
