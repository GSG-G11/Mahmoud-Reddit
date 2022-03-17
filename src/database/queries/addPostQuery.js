const connection = require('../config/connection');

const addPostDB = (userId, post, postTime, postImg) => connection.query({
  text: 'INSERT INTO posts (post, postTime, postImg,userId) VALUES ( $1, $2 ,$3 ,$4) RETURNING *;',
  values: [post, postTime, postImg, userId],
});
module.exports = addPostDB;
