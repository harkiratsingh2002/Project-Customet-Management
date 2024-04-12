import logo from './logo.svg';
import './App.css';


import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './Pages/LandingPage.jsx';
import { About } from './Pages/AboutPage.jsx';
import { Vehicles } from './Pages/VehiclesPage.jsx';
import { Contact } from './Pages/ContactPage.jsx';
import { Login } from './Pages/LogInPage.jsx';
import { RegisterPage } from './Pages/RegisterPage.jsx';



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
