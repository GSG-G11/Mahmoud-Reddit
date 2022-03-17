const { deletePostQuery } = require('../database');

const deletePost = (req, res) => {
  if (!req.userId) return res.status(401).redirect('/login');
  const { id } = req.params;
  return deletePostQuery(id).redirect('/');
};

module.exports = deletePost;
