const accounts = require('../src/use-case/accounts')
const createUserUseCase = require('../src/use-case/createUserAccount.js')

// 'name', 'email', 'password'
createUserUseCase()

console.log(accounts)