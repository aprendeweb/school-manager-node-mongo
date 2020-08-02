const bcrypt = require('bcrypt');
const { saltRouds } = require('../config');

const getSalt = async () => {
  return await bcrypt.genSaltSync(+saltRouds);
};

const encryptPassword = async (password) => {
  const salt = await getSalt();
  return await bcrypt.hashSync(password, salt);
};

const comparePassword = async (passwordFromClient, encryptedPassword) => {
  return await bcrypt.compareSync(passwordFromClient, encryptedPassword);
};

module.exports = { encryptPassword, comparePassword };
