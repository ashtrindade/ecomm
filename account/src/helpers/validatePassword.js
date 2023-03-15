const bcrypt = require('bcryptjs')

const validatePassword = (password, hashPassword) => {
    const compare = bcrypt.compareSync(password, hashPassword)
    return compare
}

module.exports = validatePassword