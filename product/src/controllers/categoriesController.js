const categories = require('../models/category')
const validateCategory = require('../validations/validateCategory')
class CategoryController {
    static listAllCategories = (req, res) => {
        categories.find((err, Categories) => {
            if (err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(200).json(Categories)
            }
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

    static updateCategory = (req, res) => {
        const { id } = req.params
        categories.findByIdAndUpdate(id, { $set: req.body }, { new: true }, (err) => {
            if (err) {
                return res.status(500).send({ message: err.message })
            }
            return res.status(204).send({ message: 'Category successfully updated' })
        })
    }

    static deleteCategory = (req, res) => {
        const { id } = req.params

        categories.findByIdAndDelete(id, (err) => {
            if (err) {
                return res.status(500).send({ message: err.message })
            }
            return res.status(204).send({ message: 'Category successfully deleted' })
        })
    }
}

module.exports = CategoryController