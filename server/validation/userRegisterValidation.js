const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const userRegisterValidate = (data) => {
  const userRegister = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    image: Joi.string(),
    email: Joi.string().email().required(),
    password: passwordComplexity().required(),
    token: Joi.string(),
  });
  return userRegister.validate(data);
};
 module.exports = {userRegisterValidate}