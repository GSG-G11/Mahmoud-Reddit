const { join } = require('path');

const logInPage = (req, res) => {
  if (req.userId) {
    res.redirect('/home');
  }
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'login.html'));
};

module.exports = logInPage;
