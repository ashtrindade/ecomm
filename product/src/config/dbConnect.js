const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

mongoose.connect(process.env.DB_SERVER)

let db = mongoose.connection

module.exports = db