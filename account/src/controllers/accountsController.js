const accounts = require('../models/account')
const encryptPassword = require('../helpers/passwordEncrypt')
const validateAccount = require('../validations/validateAccount')
class AccountsController {

    static listAllAccounts = (req, res) => {
        accounts.find((err, accounts) => {
            console.log(err)
            res.status(200).json(accounts)
        })
    }

    static getAccountById = (req, res) => {
        const { id } = req.params
        accounts.findById(id, (err, account) => {
            if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(200).json(account)
            }
        })
    }

    static createNewAccount = (req, res) => {
        const { error } = validateAccount()
        if (error) throw error

        const hashPassword = encryptPassword(req.body.password)
        req.body.password = hashPassword

        const account = new accounts(req.body)
        account.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Failed` })
            } else {
                res.status(201).send(account.toJSON())
            }
        })
    }
}

module.exports = AccountsController