import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import '../CSS/Navbar.css'

export function Landing() {
    return (
        <div>
            <Navbar />
            <Home />
        </div>
    );
}
export default Landing;
