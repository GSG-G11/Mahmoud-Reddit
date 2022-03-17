require('env2')('.env');
const { sign } = require('jsonwebtoken');
const { addUserDB, getUserDB } = require('../database');
const { signUpSchema } = require('../utilites/validation');
const { hashedPassword } = require('../utilites');
const CustomizedError = require('./errors/CustomizedError');

const addUser = (req, res, next) => {
  const { username, email, password } = req.body;
  signUpSchema.validateAsync(req.body).then(() => getUserDB(email)).then((user) => {
    if (user.rows.length !== 0) {
      throw CustomizedError('Email is already exists', 400);
    } else {
      return hashedPassword(password);
    }
  })

    .then((hashpass) => addUserDB(username, email, hashpass))

    .then(
      (data) => sign(data.rows[0], process.env.SECRET_KEY, (err, token) => {
        if (err) res.send(err);
        res.status(201).cookie('token', token).json({ msg: 'sign in successfully' }).redirect('/');
      }),
    )

    .catch((err) => {
      if (err.details) {
        next(CustomizedError(err.details[0].message, 400));
      } else {
        next(err);
      }
    });
};

module.exports = addUser;
