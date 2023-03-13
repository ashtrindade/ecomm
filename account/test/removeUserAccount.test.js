const accounts = require('../src/use-case/accounts')
const removeUserUseCase = require('../src/use-case/removeUserAccount.js')

// 'email'
removeUserUseCase()

console.log(accounts)