const { getUserPostDB } = require('../database');

const getUserPost = (req, res) => {
  const {
    userId,
  } = req;
  getUserPostDB(userId).then((postData) => res.json(postData.rows));
};

module.exports = getUserPost;
