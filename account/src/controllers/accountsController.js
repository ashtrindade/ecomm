const accounts = require('../models/account')
const encryptPassword = require('../helpers/encryptPassword')
const validatePassword = require('../helpers/validatePassword')
const issueJWT = require('../helpers/issueJwt')
const validateAccount = require('../validations/validateAccount')
class AccountsController {

    static listAllAccounts = (req, res) => {
        accounts.find((err, accounts) => {
            if (err) {
                return res.status(500).send({ msg: err.message })
            } else {
                return res.status(200).json(accounts)
            }
        })
    }

    static getAccountById = (req, res) => {
        const { id } = req.params
        accounts.findById(id, (err, account) => {
            if (err) {
                return res.status(500).send({ message: err.message })
            } else {
                return res.status(200).json(account)
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
                return res.status(500).send({ message: `${err.message} - Failed` })
            } else {
                return res.status(201).send(account.toJSON())
            }
        })
    }

    static userLogin = (req, res) => {
        accounts.findOne({ email: req.body.email })
            .then((user) => {
                if (!user) {
                    return res.status(400).json({ success: false, msg: 'Incorrect email or password ! Try again.' })
                }

                const isValid = validatePassword(req.body.password, user.password)

                if (isValid) {
                    const tokenObject = issueJWT(user)

                    res.status(200).json({
                        success: true,
                        token: tokenObject.token,
                        expiresIn: tokenObject.expires
                    })
                } else {
                    return res.status(400).json({ success: false, msg: 'Incorrect email or password ! Try again.' })
                }
            })
            .catch((err) => {
                throw(err)
            })
    }

    static updateAccount = (req, res) => {
        const { id } = req.params
        accounts.findByIdAndUpdate(id, { $set: req.body }, { new: true }, (err, account) => {
            if (err) {
                return res.status(500).send({ message: err.message })
            }
            return res.status(204).set('Location', `/admin/Accounts/${account.id}`).send({ message: 'Account successfully updated' })
        })
    }

    static deleteAccount = (req, res) => {
        const { id } = req.params

        accounts.findByIdAndDelete(id, (err) => {
            if (err) {
                return res.status(500).send({ message: err.message })
            }
            return res.status(204).send({ message: 'Account successfully deleted' })
        })
    }
}

module.exports = AccountsController