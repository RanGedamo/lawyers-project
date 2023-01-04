const Joi = require('joi');

const validationLogin = (data)=>{
    const lawyerLogin = Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    })
    return lawyerLogin.validate(data);
};

module.exports = {validationLogin}