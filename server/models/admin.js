const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({

    fName: String,
    lName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,




})

const AdminModel = mongoose.model('admin', adminSchema)
module.exports = AdminModel