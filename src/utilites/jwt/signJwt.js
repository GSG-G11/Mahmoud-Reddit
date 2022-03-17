const { sign } = require('jsonwebtoken');

const signJwt = (id) => new Promise((reject, resolve) => {
  sign(id, process.env.SECRET_KEY, (err, token) => {
    if (err) return reject(err);
    return resolve(token);
  });
});

module.exports = signJwt;
