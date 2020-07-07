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
router.put('/', validate(studentSchema), updateOne);
router.delete('/:id', deleteOne);

module.exports = router;
