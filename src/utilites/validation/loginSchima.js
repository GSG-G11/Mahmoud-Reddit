const Joi = require('joi');

const logInSchema = Joi.object({

  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(6).required(),

});

module.exports = logInSchema;
