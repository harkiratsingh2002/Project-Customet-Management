const bcrypt = require('bcrypt');

// bcrypt package is used to hash the password
const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                reject(err)
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}

//password is compared with the hashed password uing compare function of bcrypt package
const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed)
}

module.exports = {
    hashPassword,
    comparePassword
}
