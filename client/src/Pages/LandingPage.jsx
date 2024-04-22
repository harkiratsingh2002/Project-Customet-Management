import React from "react";
import Navbar from "../components/Navbar";
import '../CSS/LandingPage.css'


import Footer from "../components/footer";
import bgImage1 from '../images/car-home-bg.jpeg';

export function Landing() {
    return (

        <><div> <Navbar /> </div>
            <div className="body">
                <div>
                    <section id="home" className="bg ">

                        <div class="card fluid text-bg-light ">
                            <img src={bgImage1} class=" card-img img-fluid" alt="White car camped in an open field at night with an attached tent and fancy lights" />
                            <div class="card-img-overlay text-center">
                                <h1 class="card-title display-1 fw-bold text-color-light">Get your Dream Car Today!</h1>
                                <h2 class="card-text  fw-bold text-color-light">Discover Top-Notch New and Pre-Owned Japanese Cars at Unbeatable Prices!</h2>


                                <div className=" d-md-none">
                                    <button>Search Cars</button>
                                </div>

                                <form action="#">
                                    <div class="card rounded-pill  d-none d-md-block justify-content-center">
                                        <div class="card-body">
                                            <div class="row justify-content-center">
                                                <div class="col-md">
                                                    <div class="form-group ">
                                                        <select id="inputState" class="form-control text-center border-top-0 border-bottom-0" >
                                                            <option selected> New/Used</option>
                                                            <option>New</option>
                                                            <option>Used</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md">
                                                    <div class="form-group ">
                                                        <select id="inputState" class="form-control text-center border-top-0 border-bottom-0" >
                                                            <option selected>Make</option>
                                                            <option>BMW</option>
                                                            <option>Audi</option>
                                                            <option>Maruti</option>
                                                            <option>Tesla</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md">
                                                    <div class="form-group ">
                                                        <select id="inputState" class="form-control text-center border-top-0 border-bottom-0" >
                                                            <option selected>Model</option>
                                                            <option>City</option>
                                                            <option>Jazz</option>
                                                            <option>Brio</option>

                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-md">
                                                    <div class="form-group ">
                                                        <select type="input" id="inputState" class="form-control text-center border-top-0 border-bottom-0" >
                                                            <option selected>Price</option>
                                                            <option>$5,000-$10,000</option>
                                                            <option>$10,000-$20,000</option>
                                                            <option>$20,000-$40,000</option>
                                                            <option>$40,000-$60,000</option>
                                                            <option>$60,000-$100,000</option>
                                                            <option>$100,000 and Above </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-auto">
                                                    <button type="submit" class="btn  btn-success dark-bg text-light">Search</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <h5 class="card-text fst-italic text-color-light">See our <a href="#/vehicles" class="text-color-light">car collection</a> to view all</h5>
                            </div>
                        </div>


                    </section>
                </div >
            </div >



            <div><Footer /></div></>
    );
}
export default Landing;
