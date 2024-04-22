import './App.css';
import axios from 'axios';
import { Toaster, toaster } from 'react-hot-toast';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './Pages/LandingPage.jsx';
import { About } from './Pages/AboutPage.jsx';
import { Vehicles } from './Pages/VehiclesPage.jsx';
import { Contact } from './Pages/ContactPage.jsx';
import { LogInPage } from './Pages/LogInPage.jsx';
import { RegisterPage } from './Pages/RegisterPage.jsx';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (

    <><Toaster position='bottom-right' toastOptions={{ duration: 2000 }} /><Routes>


      <Route exact path="/" element={<Landing />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/vehicles" element={<Vehicles />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/login" element={<LogInPage />} />
      <Route exact path="/register" element={<RegisterPage />} />

    </Routes></>


  );
}

export default App;
