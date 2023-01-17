const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const validateLawyer = (data) => {
  const lawyerRegisterSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    title: Joi.string().required(),
    location: Joi.object(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    reviews: Joi.string(),
    price: Joi.string().required(),
    email: Joi.string().email().required(),
    password: passwordComplexity().required(),
    phone: Joi.string().required(),
    experience: Joi.string().required(),
    avgReplayTime: Joi.string().required(),
    workDueTime: Joi.string().required(),
    available: Joi.boolean(),
    imageString:Joi.string()
  });
  return lawyerRegisterSchema.validate(data);
};
const validateUpdateLawyer = (data) => {
  const lawyerRegisterSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    reviews: Joi.string(),
    price: Joi.string().required(),
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
  validateLawyer,validateUpdateLawyer
};
