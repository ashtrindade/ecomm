const express = require('express')
const passport = require('passport')
const AccountsController = require('../controllers/accountsController')

const router = express.Router()

router
    .get(
        '/api/accounts',
        passport.authenticate('jwt', { session: false }),
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
        passport.authenticate('jwt', { session: false }),
        AccountsController.updateAccount
    )
    .delete(
        '/api/accounts/:id',
        passport.authenticate('jwt', { session: false }),
        AccountsController.deleteAccount
    )

module.exports = router