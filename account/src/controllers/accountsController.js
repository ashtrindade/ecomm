const accounts = require('../models/account')
const validateAccount = require('../validations/validateAccount')

class AccountsController {

    static listAllAccounts = (req, res) => {
        accounts.find((err, Accounts) => {
            console.log(err)
            res.status(200).json(Accounts)
        })
    }

    static getAccountById = (req, res) => {
        const { id } = req.params
        accounts.findById(id, (err, account) => {
            if (err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(200).json(account)
            }
        })
    }

    static createNewAccount = (req, res) => {
        const { error } = validateAccount(req.body)
        if (error) throw error

        const account = new accounts(req.body)

        account.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - Failed`})
            } else {
                res.status(201).send(account.toJSON())
            }
        })
    }
}

module.exports = AccountsController