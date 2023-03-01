const accounts = require('./accounts')

function changeUserNameUseCase(email, newName) {
    const userByEmail = accounts.find((user) => user.email === email)    
    if (userByEmail) {
        const userIndex = accounts.findIndex((user) => user.email === email)
        accounts[userIndex].name = newName
        return true
    } else {
        return false
    }
}

module.export = changeUserNameUseCase()