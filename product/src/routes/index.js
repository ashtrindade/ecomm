const express = require('express')
const category = require('./categoriesRoutes')

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).json({ "Ecomm API": "Home" })
    })

    app.use(
        express.json(),
        category
    )
}

module.exports = routes