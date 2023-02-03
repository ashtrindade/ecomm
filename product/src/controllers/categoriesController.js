const categories = require('../models/category')

class CategoryController {
    static listAllCategories = (req, res) => {
        categories.find((err, Categories) => {
            console.log(err)
            res.status(200).json(Categories)
        })
    }
}

module.exports = CategoryController