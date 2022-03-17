const { getAllPostDB } = require('../database');

const getAllPost = (req, res) => {
  getAllPostDB().then((postData) => res.json(postData.rows));
};

module.exports = getAllPost;
