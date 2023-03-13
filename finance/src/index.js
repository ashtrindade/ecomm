const express = require('express')
const routes = require('./api/routes/index')

const PORT = process.env.PORT || 3003
const app = express()

routes(app)

app.listen(PORT)

module.exports = app