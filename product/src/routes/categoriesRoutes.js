const express = require('express')
const CategoriesController = require('../controllers/categoriesController')

const router = express.Router()

router
    .get('/api/categories', CategoriesController.listAllCategories)

module.exports = router