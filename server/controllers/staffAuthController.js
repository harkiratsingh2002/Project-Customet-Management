const Staff = require('../models/staff')
const app = express()

const router = express.Router()

const loginStaff = async (req, res) => {
    try {
        const { email, password } = req.body;

        //check if user exist 
        const staff = await Staff.findOne({ email });
        if (!staff) {
            return res.json({
                error: 'staff does not exist'
            })
        }
        //check if password is correct
        const match = await comparePassword(password, staff.password);
        if (match) {


            jwt.sign({ email: staff.email, id: staff._id, name: staff.fName }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(staff);
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
// forgot password

module.exports = {

    loginStaff,
    getProfile
}