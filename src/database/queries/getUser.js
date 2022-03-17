const connection = require('../config/connection');

const getUserDB = (email) => connection.query('SELECT * FROM users WHERE email=$1;', [email]);
module.exports = getUserDB;
