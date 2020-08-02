const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config');
const Boom = require('@hapi/boom');
module.exports = (req, res, next) => {
  try {
    const token = req.headers['authorization']
      ? req.headers['authorization'].replace('Bearer ', '')
      : undefined;
    const decodedToken = jwt.verify(token, jwtSecret);
    req.userData = decodedToken;
    next();
  } catch (error) {
    res.send(Boom.forbidden(`Unauthorized`));
  }
};
