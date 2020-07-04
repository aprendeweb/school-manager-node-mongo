const express = require('express');
const router = express.Router();
const {
  createOne,
  deleteOne,
  getAll,
  updateOne,
} = require('../components/courses');

router.get('/', getAll);
router.post('/', createOne);
router.put('/', updateOne);
router.delete('/', deleteOne);

module.exports = router;
