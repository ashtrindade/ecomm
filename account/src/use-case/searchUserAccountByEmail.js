const accounts = require('./accounts')

function searchUserAccountByEmailUseCase(email) {
    const userByEmail = accounts.filter((user) => user.email === email)
    if (userByEmail == ''){
        return 'Email not found.'
    }
    if (userByEmail != ''){
        return userByEmail
    }
}

module.export = searchUserAccountByEmailUseCase()