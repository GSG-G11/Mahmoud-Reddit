const Joi = require('joi');

const signUpSchema = Joi.object({
  username: Joi.string().alphanum().required(),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(6).required(),
  confirmPassword: Joi.ref('password'),
});

module.exports = signUpSchema;
