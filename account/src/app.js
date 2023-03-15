const express = require('express')
const routes = require('./routes/index')
const db = require('./config/dbConnect')
const PORT = process.env.PORT || 3005
const passport = require('passport')

require('dotenv').config()

db.on('error', console.log.bind(console, '🔴 - Error'))
db.once('open', () => {
    console.log('🟢 - Connetciont successfull')
})

const app = express()

require('./config/passport')(passport)
app.use(passport.initialize())

routes(app)

app.listen(PORT)

module.exports = app
