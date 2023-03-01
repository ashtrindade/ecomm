const accounts = require('../src/use-case/accounts')
const changeUserNameUseCase = require('../src/use-case/changeUserName.js')

// 'email', 'newName'
changeUserNameUseCase()

console.log(accounts)