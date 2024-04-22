import React from "react";
import Navbar from "../components/Navbar";


import Footer from "../components/footer";
import bgImage1 from '../images/car-home-bg.jpg';

export function Landing() {
    return (

        <><div> <Navbar /> </div>
            <div className="body">
                <div>
                    <section id="home" className="bg">

                        <div class="card text-bg-light">
                            <img src={bgImage1} class="img-fluid" alt="White Honda CRV car parked in a scenic location with white snow covered mountains in the background" />                                <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small>Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            <div><Footer /></div></>
    );
}
export default Landing;
