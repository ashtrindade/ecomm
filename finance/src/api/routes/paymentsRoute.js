const express = require('express')
const PaymentController = require('../controllers/paymentController')

const router = express.Router()

router
    .get('/api/admin/payments', PaymentController.getAllPayments)
    .get('/api/admin/payments/:id', PaymentController.getPaymentById)
    .post('/api/admin/payments/', PaymentController.addNewPayment)
    .patch('/api/admin/payments/:id', PaymentController.updateStatus)
module.exports = router