const express = require('express')
const CategoriesController = require('../controllers/categoriesController')

const router = express.Router()

router
    .get(
        '/api/categories',        
        CategoriesController.listAllCategories
    )
    .get(
        '/api/categories/:id',
        CategoriesController.getCategoryById
    )
    .post(
        '/api/categories',
        CategoriesController.createNewCategory
    )
    .put(
        '/api/categories/:id',
        CategoriesController.updateCategory
    )
    .delete(
        '/api/categories/:id',
        CategoriesController.deleteCategory 
    )

module.exports = router