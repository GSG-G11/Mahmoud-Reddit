const res = require('express/lib/response');
const { verify } = require('jsonwebtoken');

const jwtVerify = (token) => verify(token, process.env.PRIVATE_KEY, (error, encode) => {
  if (error) res.json(error);

  return encode;
});

module.exports = jwtVerify;
