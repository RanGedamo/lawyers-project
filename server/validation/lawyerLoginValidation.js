const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

const validationLogin = (data)=>{
    const lawyerLogin = Joi.object({
        email:Joi.string().email().required(),
        password:passwordComplexity().required()
    })
    return lawyerLogin.validate(data);
};

module.exports = {validationLogin}