/* eslint-disable no-prototype-builtins */
const accounts = require('./accounts')

function searchUserAccountByUfUseCase(uf){
    const userAccountsWithAddress = accounts.filter(user => (user.hasOwnProperty('address')))
    const userAccountsByUf = userAccountsWithAddress.filter(userAccountsWithAddress => userAccountsWithAddress.address.uf.toLowerCase() === uf)

    return userAccountsByUf
}

module.export = searchUserAccountByUfUseCase()