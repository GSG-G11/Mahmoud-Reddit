const { join } = require('path');

const profilePage = (req, res) => {
  if (!req.userId) {
    res.redirect('/');
  }
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'profile.html'));
};

module.exports = profilePage;
