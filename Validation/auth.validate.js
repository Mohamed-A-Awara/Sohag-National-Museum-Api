const Joi = require('joi')
const PassExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/


module.exports = {
    registrationSchema : Joi.object().keys({
        firstName : Joi.string().min(3).max(30).required().messages({
            'any-required' : "firstName is Required ! 🤦‍♂️" 
        }),
        lastName : Joi.string().min(3).max(30).required().messages({
            'any-required' : "lastName is Required ! 🤦‍♂️" 
        }),
        username : Joi.string().min(3).max(30).messages({
            'any-required' : "Username is Required ! 🤦‍♂️" 
        }),
        gender : Joi.string().min(3).max(30).messages({
            'any-required' : "gender is Required ! 🤦‍♂️" 
        }),
        nationality : Joi.string().min(3).max(30).messages({
            'any-required' : "nationality is Required ! 🤦‍♂️" 
        }),
        email : Joi.string().email().min(3).max(30).required().messages({
            'any-required' : "Email is Required ! 🤦‍♂️" 
        }),
        password : Joi.string().regex(PassExp).required().messages({
            'any-required' : "Password is Required ! 🤦‍♂️" 
        }),
        address : Joi.string().min(2).max(40).messages({
            'any-Optional' : "Address is Optional ! 🤦‍♂️" 
        }),
        age : Joi.number().integer().min(5).max(100).messages({
            'number.integer' : "Age Must Be Integer ! 😊"
        }),
        nationalID : Joi.number().integer().min(10000000000000).max(99999999999999).messages({
            "number.min" : "National ID must be equal 14 digit",
            "number.max" : "National ID must be equal 14 digit"
        }),
        phone : Joi.string().regex(/^01\d{9}$/).messages({
            'any.Optional' : "phone is Optional ! 😊"
        }),

    }),

    loginSchema : Joi.object().keys({
        email : Joi.string().email().min(3).max(30).required().messages({
            'any-required' : "Email is Required ! 🤦‍♂️" 
        }),
        password : Joi.string().required().messages({
            'any-required' : "Password is Required ! 🤦‍♂️" 
        }),
    })
}
