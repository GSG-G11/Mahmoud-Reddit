const { join } = require('path');

const signUpPage = (req, res) => {
  if (req.userId) {
    res.redirect('/home');
  }
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'signup.html'));
};

module.exports = signUpPage;
