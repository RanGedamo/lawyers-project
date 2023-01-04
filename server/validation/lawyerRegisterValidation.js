const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const validate = (data) => {
  const lawyerRegisterSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    title: Joi.string().required(),
    location: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    reviews: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.string().required(),
    email: Joi.string().email().required(),
    password: passwordComplexity().required(),
    selectedCover: Joi.string().required(),
    phone: Joi.string().required(),
    rate: Joi.string().required(),
    experience: Joi.string().required(),
    avgResplayTime: Joi.string().required(),
    workDueTime: Joi.string().required(),
    token: Joi.string(),
  });
  return lawyerRegisterSchema.validate(data);
};
module.exports = {
    validate,
};
