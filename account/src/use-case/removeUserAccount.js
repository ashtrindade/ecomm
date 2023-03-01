const accounts = require('./accounts')
const searchUserAccountByEmailUseCase = require('./searchUserAccountByEmail.js')

function removeUserUseCase(email) {
    const userByEmail = searchUserAccountByEmailUseCase(email)
    if (userByEmail.length > 0) {
        accounts.splice((userByEmail[0].id -1), 1)
        return true
    }
    return false
}

module.export = removeUserUseCase()