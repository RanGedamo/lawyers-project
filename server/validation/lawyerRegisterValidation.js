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
    reviews: Joi.string(),
    image: Joi.string().required(),
    price: Joi.string().required(),
    email: Joi.string().email().required(),
    password: passwordComplexity().required(),
    selectedCover: Joi.string().required(),
    phone: Joi.string().required(),
    rate: Joi.number().required(),
    experience: Joi.string().required(),
    avgReplayTime: Joi.string().required(),
    workDueTime: Joi.string().required(),
    available: Joi.boolean()
  });
  return lawyerRegisterSchema.validate(data);
};
module.exports = {
    validate,
};
