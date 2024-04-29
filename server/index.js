const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors')
const { mongoose } = require('mongoose')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();






// databse connection 
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('database connected'),
        console.log(mongoose.connection.readyState)
    )
    .catch((err) => console.log('database not connected', err))

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))






app.use('/', require('./Routes/authRoutes'))
app.use('/', require('./Routes/contactRoutes'))



const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
