const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, sendMessage } = require("../controllers/contactController")

// middleware

router.use(cors({
    credentials: true,
    origin: "http://localhost:3000/#"
}));


router.get('/', test)
router.post('/contact', sendMessage)


module.exports = router;
