require('dotenv').config();
const {
  environmentUtils: { validateRequiredEnvs },
} = require('./utils');

const requiredEnvs = ['PORT'];

validateRequiredEnvs(requiredEnvs);
require('./server');
