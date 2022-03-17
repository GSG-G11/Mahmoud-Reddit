const connection = require('../config/connection');

const getAllPostDB = () => connection.query('SELECT posts.id,username, post, postTime ,postImg,votes,userId  FROM users INNER JOIN posts ON (users.id = posts.userId)  ');

module.exports = getAllPostDB;
