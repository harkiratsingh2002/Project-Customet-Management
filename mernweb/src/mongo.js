const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/mernweb")
    .then(() => {
        console.log("mongodb connected");

    })
    .catch(() => {
        console.log('failed');
    })

const newSchema = new mongoose.Schema({
    email: {
        typeof: String,
        required: true
    },
    password: {
        typeof: String,
        required: true
    }
})

const collection = mongoose.Model("collection", newSchema)
module.exports = collection