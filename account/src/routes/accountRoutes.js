const express = require('express')
const AccountsController = require('../controllers/accountsController')

const router = express.Router()

router
    .get('/api/accounts', AccountsController.listAllAccounts)
    .get('/api/accounts/:id', AccountsController.getAccountById)
    .post('/api/admin/accounts', AccountsController.createNewAccount)    

module.exports = router