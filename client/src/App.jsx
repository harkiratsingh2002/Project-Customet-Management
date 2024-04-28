import './App.css';
import axios from 'axios';
import { Toaster, toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min'

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './Pages/LandingPage.jsx';
import { About } from './Pages/AboutPage.jsx';
import { Vehicles } from './Pages/VehiclesPage.jsx';
import { Contact } from './Pages/ContactPage.jsx';
import { LogInPage } from './Pages/LogInPage.jsx';
import { RegisterPage } from './Pages/RegisterPage.jsx';
import { UserContextProvider } from './context/userContext.jsx';
import { Dashboard } from './Pages/Dashboard.jsx';
import ForgotPassword from './Pages/ForgotPassword.jsx';
import CarInfo from './Pages/viewCarInfo.jsx'
import { StaffLogInPage } from './Pages/LogInPage staff.jsx';
import { AdminLogInPage } from './Pages/LogInPage admin.jsx';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (

    <UserContextProvider>

      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />

      <Routes>


        <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/vehicles" element={<Vehicles />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<LogInPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
        <Route exact path="/vehicles/2022-nissan-xtrail" element={<CarInfo />} />
        <Route exact path="/staffLogIn" element={<StaffLogInPage />} />
        <Route exact path="/adminLogIn" element={<AdminLogInPage />} />


      </Routes>
    </UserContextProvider>


  );
}

export default App;
