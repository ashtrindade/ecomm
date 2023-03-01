const accounts = require('../src/use-case/accounts')
const { createUserAddressUseCase, insertUserAddressUseCase } = require('../src/use-case/addUserAddress.js')

// 'logradouro', 'numero', 'complemento', 'bairro', 'cep', 'cidade', 'uf'
// eslint-disable-next-line no-unused-vars
const newAddress = createUserAddressUseCase()

// accounts, 'email', newAddress
insertUserAddressUseCase()

console.log(accounts)