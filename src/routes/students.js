const express = require('express');
const router = express.Router();
const studentSchema = require('../schemas/students');
const validate = require('../middlewares/validateData');
const {
  createOne,
  deleteOne,
  getAll,
  updateOne,
} = require('../controllers/students');

router.get('/', getAll);
router.post('/', validate(studentSchema), createOne);
router.put('/:_id', validate(studentSchema), updateOne);
router.delete('/:_id', deleteOne);

module.exports = router;
