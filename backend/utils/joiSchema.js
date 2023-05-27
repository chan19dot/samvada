const Joi = require("joi");

const userAuthSchema = Joi.object().keys({
  emailId: Joi.string().required(),
  password: Joi.string().required(),
  userName: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});

module.exports = {
  userAuthSchema,
};
