const joi = require('joi')

const validateAccount = (account) => {
    const schema = joi.object().keys({
        name: joi.string()
            .pattern(new RegExp(/^\D/)),
        email: joi.string()
            .pattern(new RegExp(/\S+@\S+\.\S+/i)),
        password: joi.string()
            .pattern(new RegExp(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,32}$/)),
        cpf: joi.string()
            .pattern(new RegExp(/^\d{11}$/)),
        phone: joi.string()
            .pattern(new RegExp(/^\d{10,13}$/))
    })

    const result = schema.validate(account)
    return result
}

module.exports = validateAccount