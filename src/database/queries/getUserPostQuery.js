const connection = require('../config/connection');

const getUserPostDB = (userId) => connection.query('SELECT username,posts.id, post, postTime ,postImg,votes,userId  FROM users INNER JOIN posts ON (users.id = posts.userId) where users.id=$1', [userId]);

module.exports = getUserPostDB;
