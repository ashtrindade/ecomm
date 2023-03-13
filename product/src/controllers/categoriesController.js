const categories = require('../models/category')
const validateCategory = require('../validations/validateCategory')
class CategoryController {
    static listAllCategories = (req, res) => {
        categories.find((err, Categories) => {
            console.log(err)
            res.status(200).json(Categories)
        })
    }

    static getCategoryById = (req, res) => {
        const { id } = req.params
        categories.findById(id, (err, category) => {
            if (err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(200).json(category)
            }
        })
    }

    static createNewCategory = (req, res) => {
        const { error } = validateCategory(req.body)
        if (error) throw error

        const category = new categories(req.body)

        category.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - Failed`})
            } else {
                res.status(201).send(category.toJSON())
            }
        })
    }
}

module.exports = CategoryController