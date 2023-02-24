const joi = require('joi')

const validateStatusUpdate = (status) => {
    const schema = joi.object().keys({
        status:
            joi.string()
                .equal('confirmed')
                .equal('canceled')
    })

    const result = schema.validate(status);
    return result;
}

module.exports = validateStatusUpdate