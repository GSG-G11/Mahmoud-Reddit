const { verify } = require('jsonwebtoken');

const checkAuthentication = (req, res, next) => {
  if (req.cookies.token) {
    const { token } = req.cookies;

    return verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) return res.redirect('/');
      req.userId = decoded.id;

      return next();
    });
  }

  return next();
};

module.exports = { checkAuthentication };
