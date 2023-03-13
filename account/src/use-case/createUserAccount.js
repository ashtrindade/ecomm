const accounts = require('./accounts')

function createUserUseCase(name, email, password) {
    accounts.push({
        id: accounts.length + 1,
        name: name,
        email: email,
        password: password,
        createdDate: new Date().toISOString().slice(0, 10),
    })

    return accounts[accounts.length - 2]
}

module.export = createUserUseCase()