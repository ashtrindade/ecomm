const express = require('express')
const AccountsController = require('../controllers/accountsController')

const router = express.Router()

router
    .get(
        '/api/accounts',
        AccountsController.listAllAccounts
    )
    .get(
        '/api/accounts/:id',
        AccountsController.getAccountById
    )
    .post(
        '/api/accounts',
        AccountsController.createNewAccount
    )
    .post(
        '/api/accounts/login',
        AccountsController.userLogin
    )
    .put(
        '/api/accounts/:id',
        AccountsController.updateAccount
    )
    .delete(
        '/api/accounts/:id',
        AccountsController.deleteAccount
    )

module.exports = router