const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    status: { type: String, required: true },
})

const categories = mongoose.model('categories', categorySchema)

module.exports = categories