const Joi = require("joi");
const pattern = "/^[a-zA-Z0-9]{3,30}$/";
const passwordComplexity = require("joi-password-complexity")
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