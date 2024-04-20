const User = require('../models/user')
const { hashPassword, confirmPassword } = require('../helpers/auth')


const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password, lastName, title, firstName, streetNumber, streetName, zipCode, suburb, country, countryCode, phoneNumber, agreeToTerms } = req.body;
        //check if name was entered
        if (!lastName) {
            return res.json({
                error: 'Last Name is required'
            })
        }
        // Check if password is good 
        if (!password || password.length < 8)
            return res.json({
                error: 'Password must be at least 8 characters long'
            });
        if (password !== req.body.confirmPassword)
            return res.json({
                error: 'Passwords do not match'
            })
        // check the email is unique
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({
                error: 'Email already exists'
            })
        }
        const phoneNumberexist = await User.findOne({ phoneNumber });
        if (phoneNumberexist) {
            return res.json({
                error: 'Phone Number already exists'
            })
        }

        if (agreeToTerms === false) {
            return res.json({
                error: 'Please agree to the terms and conditions'
            })
        }
        if (!firstName) {
            return res.json({
                error: 'Last Name is required'
            })
        }
        const hashedPassword = await hashPassword(password);

        //register the user

        const user = await User.create({

            firstName,
            lastName,
            email,
            password: hashedPassword,
            streetNumber,
            streetName,
            zipCode,
            suburb,
            country,
            countryCode,
            phoneNumber,
            agreeToTerms
        });


        return res.json(user)


    } catch (error) {
        console.log(error)

    }

}

module.exports = {
    test,
    registerUser
}