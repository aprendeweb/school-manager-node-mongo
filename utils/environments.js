module.exports = {
  validateRequiredEnvs: (requiredEnvs) => {
    for (const requiredEnv of requiredEnvs) {
      if (!process.env[requiredEnv])
        throw new Error(`${requiredEnv} must be defined on the .env file`);
    }
  },
};
