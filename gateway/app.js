const express = require('express')
const passport = require('passport')
const PORT = process.env.PORT || 8000

const categoriesRoutes = require('./src/routes/categories')
const accountsRoutes = require('./src/routes/accounts')
const paymentsRoutes = require('./src/routes/payments')

const db = require('../account/src/config/dbConnect')

db.on('error', console.log.bind(console, '🔴 - Error'))
db.once('open', () => {
    console.log('🟢 - Connetciont successfull')
})

const app = express()

require('./src/config/passport')(passport)
app.use(passport.initialize())

app.use('/', categoriesRoutes)
app.use('/', accountsRoutes)
app.use('/', paymentsRoutes)

app.listen(PORT)

module.exports = app
