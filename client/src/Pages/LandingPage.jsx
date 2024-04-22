import React from "react";
import Navbar from "../components/Navbar";

import '../CSS/Navbar.css'
import Footer from "../components/footer";

export function Landing() {
    return (

        <><div> <Navbar /> </div>
            <div className="body">
                <div>
                    <section id="home">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-8 mt-5">
                                    <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                                        Feels the Fress Business Perspective
                                    </h1>
                                    <p className="lead text-center fs-4 mb-5 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi sit, illo velit quisquam corrupti iure quos odio mollitia sint quod?</p>
                                    <p className="lead text-center fs-4 mb-5 text-white">This text was added by abhi</p>
                                    <p className="lead text-center fs-4 mb-5 text-white">This text was added by Suri</p>
                                    <div className="buttons d-flex justify-content-center">
                                        <button className="btn btn-light me-4 rounded-pill px-4 py-2">
                                            Get Quote
                                        </button>
                                        <button className="btn btn-outline-light rounded-pill px-4 py-2">
                                            Our Services
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            <div><Footer /></div></>
    );
}
export default Landing;
