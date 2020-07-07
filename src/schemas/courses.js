const Joi = require('@hapi/joi');

const schema = Joi.object({
  name: Joi.string().required(),
  teachers: Joi.string(),
});

module.exports = schema;
