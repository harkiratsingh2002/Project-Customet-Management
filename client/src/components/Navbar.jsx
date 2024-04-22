import React from "react";
<<<<<<< Updated upstream
import '../CSS/Navbar.css'
import logo from '../images/logo.png';
=======


>>>>>>> Stashed changes
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light shadow pt-0 pb-0 navbar-custom sticky-top ">
                <div class="container-fluid  pe-0 ps-0">


                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
<<<<<<< Updated upstream
                        <div className="navbar-brand me-0">
                            <a href="#" class="navbar-brand"><img src={logo} alt="" width={120} height={110} /></a>
                        </div>
=======
                        <div>
                            <a class="navbar-brand" href="#">
                                <img src="/logo.png" alt="" width="0" height="24" class="d-inline-block align-text-top" />

                            </a>
                        </div>


>>>>>>> Stashed changes
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/vehicles">Vehicles</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/contact">Contact</a>
                            </li>


                        </ul>
<<<<<<< Updated upstream
=======

                        <a href="#/login"><button className="btn btn-outline-primary ms-auto px-4 rounded-pill LogIn">
>>>>>>> Stashed changes

                        <a class="me-3" href="#/login"><button type="button" class="btn btn-outline-secondary">Log In</button></a>
                        <a class="me-3" href="#/register"><button type="button" class="btn btn-outline-secondary">Register</button></a>

                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
