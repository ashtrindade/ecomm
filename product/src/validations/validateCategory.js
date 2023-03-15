const joi = require('joi')

const validateCategory = (category) => {
    const schema = joi.object().keys({
        name: joi.string()
            .min(3)
            .pattern(new RegExp(/^\D/))
            .required(),
        status: joi.string()
    })

    const result = schema.validate(category)
    return result
}

module.exports = validateCategory