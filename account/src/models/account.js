const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    id: { type: String },
    createdDate: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cpf: { type: String, required: true },
    phone: { type: String, required: true },
    addresses: [
        {
            addressNickname: { type: String, required: true },
            street: { type: String, required: true },
            number: { type: String, required: true },
            neighborhood: { type: String, required: true },
            complement: { type: String, required: true },
            zipCode: {
                type: String,
                required: true,
                match: /^\d{8}$/
            },
            city: { type: String, required: true },
            state: {
                type: String,
                required: true,
                enum: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']
            }
        }
    ],
    versionKey: false
})

const accounts = mongoose.model('accounts', accountSchema)

module.exports = accounts