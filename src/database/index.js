const addUserDB = require('./queries/addUserQuery');
const getUserDB = require('./queries/getUser');
const addPostDB = require('./queries/addPostQuery');
const getUserPostDB = require('./queries/getUserPostQuery');
const getAllPostDB = require('./queries/getAllPostQuery');
const deletePostQuery = require('./queries/deletePostQuery');

module.exports = {
  addUserDB, getUserDB, addPostDB, getUserPostDB, getAllPostDB, deletePostQuery,
};
