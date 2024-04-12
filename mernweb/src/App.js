import logo from './logo.svg';
import './App.css';


import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './Pages/LandingPage.jsx';
import { About } from './Pages/AboutPage.jsx';
import { Vehicles } from './Pages/VehiclesPage.jsx';
import { Contact } from './Pages/ContactPage.jsx';
import { Login } from './Pages/LogInPage.jsx';
import { RegisterPage } from './Pages/RegisterPage.jsx';

const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/LogInPage", cors(), (req, res) => {

})

app.post("/LogInPage", async (req, res) => {
  const { email, password } = req.body
})
try {
  const check = await collection.findOne({ email: email })
  if (check) {
    res.json("Exist")
  }

}
catch {

}

function App() {

  return (

    <Routes>

      <Route exact path="/" element={<Landing />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/vehicles" element={<Vehicles />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<RegisterPage />} />

    </Routes>


  );
}

export default App;
