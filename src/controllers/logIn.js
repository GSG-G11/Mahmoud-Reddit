require('env2')('.env');
const { sign } = require('jsonwebtoken');
const { getUserDB } = require('../database');
const { logInSchema } = require('../utilites/validation');
const { comparePass } = require('../utilites');
const CustomizedError = require('./errors/CustomizedError');

const logIn = (req, res, next) => {
  const { email, password } = req.body;
  logInSchema.validateAsync(req.body).then(() => getUserDB(email)).then((result) => {
    if (result.rowCount === 0) {
      throw CustomizedError('Email Is Used Sign Up', 403);
    }
    const { password: hashedPass, id } = result.rows[0];

    return comparePass(password, hashedPass).then((comparedPass) => {
      if (comparedPass) {
        sign({ id }, process.env.SECRET_KEY, (err, token) => {
          if (err) return res.send(err);
          return res.status(201).cookie('token', token).json({ msg: 'logIn successfully' });
        });
      } else {
        throw CustomizedError('password Invaild', 403);
      }
    });
  }).catch((err) => {
    if (err.details) {
      next(CustomizedError(err.details[0].message, 400));
    } else {
      next(err);
    }
  });
};

module.exports = logIn;
