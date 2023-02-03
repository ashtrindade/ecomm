const express = require('express')
const CategoriesController = require('../controllers/categoriesController')

const router = express.Router()

router
    .get('/api/categories', CategoriesController.listAllCategories)
    .post('/api/admin/categories', CategoriesController.createNewCategory)

module.exports = router