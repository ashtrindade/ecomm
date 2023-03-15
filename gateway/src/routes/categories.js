const express = require('express')
const passport = require('passport')
const { createProxyMiddleware } = require('http-proxy-middleware')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') })

const categoriesRoutes = express.Router()

const categoriesProxy = createProxyMiddleware(
    `${process.env.PRODUCTS_URL}:${process.env.PRODUCTS_PORT}/api/categories`,
    { changeOrigin: true }
)

const authJWT = passport.authenticate('jwt', { session: false })

categoriesRoutes
    .get('/api/categories', categoriesProxy)
    .get('/api/categories/:id', categoriesProxy)
    .post('/api/categories', authJWT, categoriesProxy)
    .put('/api/categories/:id', authJWT, categoriesProxy)
    .delete('/api/categories:id', authJWT, categoriesProxy)
    
module.exports = categoriesRoutes