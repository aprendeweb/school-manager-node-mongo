require('dotenv').config();
const {
  environmentUtils: { validateRequiredEnvs },
} = require('./utils');

const requiredEnvs = ['PORT', 'MONGO_URI'];
validateRequiredEnvs(requiredEnvs);

const { mongoDBHelpers } = require('./helpers');

(async () => {
  await mongoDBHelpers.connect();
  require('./server');
})();

process.on('SIGINT', () => {
  mongoDBHelpers.disconnect().then((connectionState) => {
    console.log('Database disconnect, connection state:', connectionState);
    console.log('Closing process');
    process.exit(0);
  });
});
