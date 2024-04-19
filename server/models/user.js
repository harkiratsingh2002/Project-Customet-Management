const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    firstName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,

    lastName: String,
    title: String,
    streetNumber: String,
    streetName: String,
    zipCode: String,
    suburb: String,
    country: String,
    countryCode: String,
    phoneNumber: {
        type: String,
        unique: true
    },
    agreeToTerms: Boolean

})

const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel