import React from "react";
import Navbar from "../components/Navbar";
import "../CSS/LandingPage.css";
import { Footer } from "../components/Footer";

import bgImage1 from "../images/car-home-bg.jpeg";
import bgImage2 from "../images/car-home-bg-2.png";
import bgImage3 from "../images/car-home-bg-3.jpeg";

import featuredSearch1 from "../images/card-featured-search-1.jpg"
import featuredSearch2 from "../images/card-featured-search-2.jpg"
import featuredSearch3 from "../images/card-featured-search-3.jpg"
import featuredSearch4 from "../images/card-featured-search-4.jpg"

export function Landing() {
  return (
    <>
      <div>
        {" "}
        <Navbar />{" "}
      </div>
      <div className="body">
        <div>
          <section id="home" className="bg ">
            <div class="card fluid text-bg-light ">
              <img
                src={bgImage3}
                class=" card-img img-fluid"
                height={370} alt="White car camped in an open field at night with an attached tent and fancy lights"
              />
              <div class="card-img-overlay text-center">
                <h1 class="card-title display-1 fw-bolder  text-color-light">
                  Get your Dream Car Today!
                </h1>
                <h2 class="card-text  text-color-light">
                  Discover Top-Notch New and Pre-Owned Japanese Cars at
                  Unbeatable Prices!
                </h2>
                <h5 class="card-text fst-italic text-color-light">
                  See our{" "}
                  <a href="#/vehicles" class="text-color-light">
                    car collection
                  </a>{" "}
                  to view all
                </h5>

                <div className=" d-md-none">
                  <button>Search Cars</button>
                </div>

                <form action="#">
                  <div class="card rounded-pill  d-none d-md-block justify-content-center">
                    <div class="card-body">
                      <div class="row justify-content-center">
                        <div class="col-md">
                          <div class="form-group ">
                            <select
                              id="inputState"
                              class="form-control text-center border-top-0 border-bottom-0"
                            >
                              <option selected> New/Used</option>
                              <option>New</option>
                              <option>Used</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md">
                          <div class="form-group ">
                            <select
                              id="inputState"
                              class="form-control text-center border-top-0 border-bottom-0"
                            >
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
                            <select
                              id="inputState"
                              class="form-control text-center border-top-0 border-bottom-0"
                            >
                              <option selected>Model</option>
                              <option>City</option>
                              <option>Jazz</option>
                              <option>Brio</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-md">
                          <div class="form-group ">
                            <select
                              type="input"
                              id="inputState"
                              class="form-control text-center border-top-0 border-bottom-0"
                            >
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
                          <button
                            type="submit"
                            class="btn  btn-success dark-bg text-light"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="container-fluid ps-5 pe-5 featuredSearches mb-5">
                <h2 class="text-center fw-bold mb-3 mt-3 ">Featured Searches</h2>

              <div class="row">
                {/* <!-- Card 1: Affordable used cars under $20k --> */}
                <div class="col">
                    <div class="card">
                        <img
                            src={featuredSearch1}
                            class="card-img "
                            alt="Affordable used car"
                        />
                        <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                            
                            <a href="#" class="btn btn-light btn-lg fw-bold ">
                                Find affordable cars
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img
                            src={featuredSearch4}
                            class="card-img img-fluid"
                            alt="Workhorse ute"
                        />
                        <div class="card-img-overlay  d-flex flex-column justify-content-center align-items-center">
                            
                            <a href="#" class="btn btn-light btn-lg fw-bold ">
                                Find utes
                            </a>
                        </div>
                    </div>
                </div>
                {/* <!-- Card 3: Near new demos to driveaway now --> */}
                <div class="col">
                  <div class="card">
                    <img
                      src={featuredSearch3}
                      class="card-img img-fluid"
                       alt="Near new demo car"
                    />
                    <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center ">
                      
                      <a href="#" class="btn btn-light btn-lg fw-bold ">
                        Find demo cars
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- Card 4: Quality used car under 5 years old --> */}
                <div class="col">
                  <div class="card">
                    <img 
                      src={featuredSearch2}
                      class="card-img img-fluid"
                       alt="Quality used car"
                    />
                    <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                     
                      <a href="#" class="btn btn-light btn-lg fw-bold ">
                        Find quality used cars
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
export default Landing;
