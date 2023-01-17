
const Joi = require('joi');

const supportBoardValid = (data)=>{
    const supportBoard = Joi.object({
        email:Joi.string().email().required().min(12),
        domain:Joi.string().domain().required().min(10)
    })
    return supportBoard.validate(data);
};

module.exports = {supportBoardValid}