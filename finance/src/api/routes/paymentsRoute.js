const express = require('express')
const PaymentController = require('../controllers/paymentController')

const router = express.Router()

router
    .get('/api/payments/:id', PaymentController.getPaymentById)
    .post('/api/payments/', PaymentController.addNewPayment)
    .patch('/api/payments/:id', PaymentController.updateStatus)
module.exports = router