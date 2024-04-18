import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import '../CSS/Navbar.css'
import Footer from "../components/footer";

export function Landing() {
    return (
        <div>
            <Navbar />
            <Home />
            <Footer />
        </div>
    );
}
export default Landing;
