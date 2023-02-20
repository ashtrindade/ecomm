const database = require('../../database/models')
const validateStatusUpdate = require('../validations/validadeStatusUpadate')
const validatePayment = require('../validations/validatePayment')

class PaymentController {
    static async getPaymentById(req, res) {
        const { id } = req.params
        try {
            const payment = await database.Payments.findOne({
                where: { id: Number(id) },
                attributes: ['id', 'amount', 'cardHolder', 'cardNumber', 'cardExp', 'status', 'createdAt', 'updatedAt']
            })
            if (!payment) { return res.status(404).send(`Not found`) }
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
            return res.status(201).json({ id: newPayment.id, status: 'Created' })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateStatus(req, res) {
        const { error } = validateStatusUpdate(req.body)
        if (error) throw error

        const { id } = req.params
        const updateStatus = req.body
        try {
            const currentStatus = await database.Payments.findOne({ where: { id: Number(id) } })
            if (!currentStatus) { return res.status(404).send(`Not found`) }
            if (currentStatus.status === 'Created') {
                await database.Payments.update(updateStatus, { where: { id: Number(id) } })
                return res.status(200).send(`Status updated to ${updateStatus.status}`)
            } else {
                return res.status(409).send(`Status can not be changed`)
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PaymentController