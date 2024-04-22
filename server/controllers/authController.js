const User = require('../models/user')
const { hashPassword, comparePassword, confirmPassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken');



const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password, lastName, firstName, streetNumber, streetName, zipCode, suburb, country, countryCode, phoneNumber, agreeToTerms } = req.body;
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


// Login the user 

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        //check if user exist 
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({
                error: 'User does not exist'
            })
        }
        //check if password is correct
        const match = await comparePassword(password, user.password);
        if (match) {


            jwt.sign({ email: user.email, id: user._id, name: user.firstName }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(user);
            })
        }
        if (!match) {
            return res.json({
                error: 'Wrong Password, please try again'
            })
        }
    }

    catch (error) {
        console.log(error)
    }
}

const getProfile = (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }

}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}

