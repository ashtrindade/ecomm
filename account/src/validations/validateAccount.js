const joi = require('joi')

const validateAccount = (account) => {
    const schema = joi.object().keys({
        name: joi.string()
            .min(3)
            .pattern(new RegExp(/^\D/))
            .required(),
        email: joi.string(),
        password: joi.string(),
        cpf: joi.string()
            .pattern(new RegExp(/^\d{11}$/)),
        phone: joi.string()
            .pattern(new RegExp(/^\d{10,13}$/)),
    })

    const result = schema.validate(account)
    return result
}

module.exports = validateAccount