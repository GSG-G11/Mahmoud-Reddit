const { compare } = require('bcryptjs');

const comparePass = (password, hashPassword) => compare(password, hashPassword);

module.exports = comparePass;
