import React from "react";

import '../CSS/Navbar.css'
import logo from '../images/logo.png';


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg  mt-0 pt-0 pb-0 " >
            <div class="container-fluid ">


                <a class="navbar-brand col-4" href="#"><img src={logo} alt="" height={70} /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse fw-bold " id="navbarNavDropdown">
                    <ul class="navbar-nav col-8">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Dashoard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">All Vehicles</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About Us
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#/contact">Contact Us</a></li>
                                <li><a class="dropdown-item" href="#">Our Story</a></li>

                            </ul>
                        </li>
                    </ul>
                    <div class="col">
                        <a href="#/login"><button type="button" class="btn btn-dark me-3  ">Log In</button></a>
                        <a href="#/register"><button type="button" class="btn btn-dark me-3 ">Sign In</button></a>
                    </div>
                </div>

            </div>


        </nav >
    );
}
export default Navbar;
