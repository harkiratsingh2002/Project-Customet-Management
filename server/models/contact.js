const mongoose = require('mongoose');
const { Schema } = mongoose
const contactSchema = new Schema({

    name: String,
    email: {
        type: String,
        unique: true
    },
    phoneNumber: String,
    subject: String,
    message: String




})

const ContactModel = mongoose.model("Message", contactSchema)
module.exports = ContactModel