const express = require('express')
const passport = require('passport')
const { createProxyMiddleware } = require('http-proxy-middleware')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') })

const paymentsRoutes = express.Router()

const paymentsProxy = createProxyMiddleware(
    `${process.env.PAYMENST_URL}:${process.env.PAYMENST_PORT}/api/payments`,
    { changeOrigin: true }
)

const authJWT = passport.authenticate('jwt', { session: false })

paymentsRoutes
    .get('/api/payments/:id', authJWT, paymentsProxy)
    .post('/api/payments', authJWT, paymentsProxy)
    .patch('/api/payments:id', authJWT, paymentsProxy)
    
module.exports = paymentsRoutes
