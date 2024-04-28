const mongoose = require('mongoose');
const staffSchema = new mongoose.Schema({

    fName: String,
    lName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,




})

const StaffModel = mongoose.model('staff', staffSchema)
module.exports = StaffModel