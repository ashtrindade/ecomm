const joi = require('joi')

const validatePayment = (payment) => {
    const schema = joi.object().keys({
        amount:
            joi.number()
                .positive()
                .required(),
        cardHolder:
            joi.string()
                .pattern(/[a-zA-Z]+/)
                .min(3)
                .required(),
        cardNumber:
            joi.string()
                .length(16)
                .pattern(/\d/)
                .required(),
        cardExp:
            joi.string()
                .pattern(/\d{4}-\d{2}/)
                .required(),
        cardCvv:
            joi.string()
                .length(3)
                .required()
    })

    const result = schema.validate(payment)
    return result
}

module.exports = validatePayment