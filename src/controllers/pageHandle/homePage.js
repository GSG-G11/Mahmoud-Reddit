const { join } = require('path');

const homePage = (req, res) => {
  if (!req.userId) {
    res.redirect('/');
  }
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'home.html'));
};

module.exports = homePage;
