const Message = require('../models/contact')

const test = (req, res) => {
    res.json('test is working')
}

const sendMessage = async (req, res) => {
    try {
        const { name, email, phoneNumber, subject, message } = req.body
        if (!name || !email || !phoneNumber || !subject || !message) {
            return res.status(400).json({ msg: 'All fields are required' })
        }

        const newMessage = await Message.create({ name, email, phoneNumber, subject, message })

        return res.json(newMessage)

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    test,
    sendMessage
}