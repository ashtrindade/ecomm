const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3003

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) =>
    res.status(200)
        .send({ "API": "Homepage" }))
app.listen(PORT, () => console.log(`🟢 - Server running on PORT ${PORT}`))

module.exports = app