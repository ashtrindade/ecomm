const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./config/dbConnect')
const category = require('./models/category')
const routes = require('./routes/index')

db.on('error', console.log.bind(console, '🔴 - Error'))
db.once('open', () => {
    console.log('🟢 - Connetciont successfull')
})

const app = express()
app.use(express.json())

routes(app)

app.listen(PORT)

module.exports = app