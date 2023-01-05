const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const userLoginValidate = (data) => {
  const userLogin = Joi.object({
    email: Joi.string().email().required(),
    password: passwordComplexity().required(),
  });
  return userLogin.validate(data);
};
module.exports = { userLoginValidate };
