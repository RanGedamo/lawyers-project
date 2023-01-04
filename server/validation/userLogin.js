const Joi = require('joi');

const userLoginValidate = (data) =>{
    const userLogin = Joi.object({
        email: Joi.string().email().required(),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    })
    return userLogin.validate(data);
};

module.exports = {userLoginValidate};

