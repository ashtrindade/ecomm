const bodyParser = require('body-parser')
const payments = require('./paymentsRoute')

const routes = (app) => {
    app.use(bodyParser.json(),
        payments
    )
}

module.exports = routes