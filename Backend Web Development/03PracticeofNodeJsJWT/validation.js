const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().max(255).required().email(),
        password: Joi.string().min(8).required()
    });

    return schema.validate(data);
}

const loginValidation = (data) => {
    
    const validationSchema = Joi.object({
        email: Joi.string().max(50).required().email(),
        password: Joi.string().min(8).required()
    });

    return validationSchema.validate(data);
}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;