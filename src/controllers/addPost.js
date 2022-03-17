const { addPostDB } = require('../database');

const addPost = (req, res) => {
  const {
    post, postTime, postImg,
  } = req.body;
  const { userId } = req;

  addPostDB(userId, post, postTime, postImg)
    .then((postData) => res.json(postData.rows));
};

module.exports = addPost;
