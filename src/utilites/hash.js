const { hash } = require('bcryptjs');

const hashedPassword = (password) => hash(password, 10);

module.exports = hashedPassword;
