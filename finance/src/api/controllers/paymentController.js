const database = require('../../database/models')
const validatePayment = require('../validations/validatePayment')

class PaymentController {
    static async getAllPayments(req, res) {
        try {
            const allPayments = await database.Payments.findAll()
            return res.status(200).json(allPayments)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getPaymentById(req, res) {
        const { id } = req.params
        try {
            const payment = await database.Payments.findOne({
                where: {
                    id: Number(id)
                },
                attributes: ['id', 'amount', 'cardHolder', 'cardNumber', 'cardExp', 'status', 'createdAt', 'updatedAt']
            })
            return res.status(200).json(payment)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async addNewPayment(req, res) {
        const { error } = validatePayment(req.body)
        if (error) throw error

        const addPayment = req.body
        try {
            const newPayment = await database.Payments.create(addPayment)
            return res.status(201).json({ id: newPayment.id, status: 'Created'})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PaymentController