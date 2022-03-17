const connection = require('../config/connection');

const addUserDB = (username, email, hashedPW) => connection.query({
  text: 'INSERT INTO users (username, email, password) VALUES ( $1, $2 ,$3 ) RETURNING id;',
  values: [username, email, hashedPW],
});
module.exports = addUserDB;
