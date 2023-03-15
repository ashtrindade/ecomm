const express = require('express')
const passport = require('passport')
const { createProxyMiddleware } = require('http-proxy-middleware')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') })

const accountsRoutes = express.Router()

const accountsProxy = createProxyMiddleware(
    `${process.env.ACCOUNTS_URL}:${process.env.ACCOUNTS_PORT}/api/accounts`,
    { changeOrigin: true }
)

const authJWT = passport.authenticate('jwt', { session: false })

accountsRoutes
    .get('/api/accounts', authJWT, accountsProxy)
    .get('/api/accounts/:id', accountsProxy)
    .post('/api/accounts/login', accountsProxy)
    .post('/api/accounts', accountsProxy)
    .put('/api/accounts/:id', authJWT, accountsProxy)
    .delete('/api/accounts:id', authJWT, accountsProxy)
    
module.exports = accountsRoutes