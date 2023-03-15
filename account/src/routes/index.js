const express = require('express')
const account = require('./accountRoutes')

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).json({ 'Ecomm API': 'Home' })
    })

    app.use(
        express.json(),
        account
    )
}

module.exports = routes