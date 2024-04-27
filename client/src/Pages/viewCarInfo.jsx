import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import '../CSS/carInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faCogs, faCarCrash, faRoad, faGasPump, faTint, faCog, faShieldAlt } from '@fortawesome/free-solid-svg-icons'

import nissanXtrail from '../images/nissan-xtrail.jpg'
import nissanXtrail1 from '../images/nissan-xtrail-1.jpg'
import nissanXtrail2 from '../images/nissan-xtrail-2.jpg'
import nissanXtrail3 from '../images/nissan-xtrail-3.jpg'
import nissanXtrail4 from '../images/nissan-xtrail-4.jpg'
import nissanXtrail5 from '../images/nissan-xtrail-5.jpg'
import nissanXtrail6 from '../images/nissan-xtrail-6.jpg'
import nissanXtrail7 from '../images/nissan-xtrail-7.jpg'
import nissanXtrail8 from '../images/nissan-xtrail-8.jpg'





export default function CarInfo
    () {


    return (
        <>
            <section>
                <Navbar />
            </section>
            <section className="body">
                <div className="container my-4">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3 className="mb-3">2022 Nissan X-TRAIL</h3>
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={nissanXtrail} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={nissanXtrail1} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={nissanXtrail2} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={nissanXtrail3} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={nissanXtrail4} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={nissanXtrail5} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={nissanXtrail6} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={nissanXtrail7} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={nissanXtrail8} class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <div class="carousel-indicators me-0 ms-0 mb-5">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active thumbnail" aria-current="true" aria-label="Slide 1">
                                        <img src={nissanXtrail} class="d-block w-100 h-750" alt="..." />
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="thumbnail" aria-label="Slide 2">
                                        <img src={nissanXtrail1} class="d-block w-100" alt="..." />
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="thumbnail" aria-label="Slide 3">
                                        <img src={nissanXtrail2} class="d-block w-100" alt="..." />
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" class="thumbnail" aria-label="Slide 3">
                                        <img src={nissanXtrail3} class="d-block w-100" alt="..." />
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" class="thumbnail" aria-label="Slide 3">
                                        <img src={nissanXtrail4} class="d-block w-100" alt="..." />
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" class="thumbnail" aria-label="Slide 3">
                                        <img src={nissanXtrail5} class="d-block w-100" alt="..." />
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" class="thumbnail" aria-label="Slide 3">
                                        <img src={nissanXtrail6} class="d-block w-100" alt="..." />
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" class="thumbnail" aria-label="Slide 3">
                                        <img src={nissanXtrail7} class="d-block w-100" alt="..." />
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" class="thumbnail" aria-label="Slide 3">
                                        <img src={nissanXtrail8} class="d-block w-100" alt="..." />
                                    </button>
                                </div>
                                <br />

                                <div className="my-4 p-3 border rounded">
                                    <h2 className="font-weight-bold">Key Details</h2>
                                    <div className="container">
                                        <div className="d-flex flex-row flex-wrap align-items-center">
                                            <div className='col-5'>
                                                <h3 >
                                                    <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
                                                    <span className="text-muted">Mileage 10 km</span>
                                                </h3>
                                            </div>
                                            <div className=" col-7">
                                                <h3 >
                                                    <FontAwesomeIcon icon={faCogs} className="mr-2" />
                                                    <span className="text-muted">2.0TSC/107kW Hybrid, 4 cyl.</span>
                                                </h3>
                                            </div>
                                            <div className=" col-5">
                                                <h3 >
                                                    <FontAwesomeIcon icon={faCarCrash} className="mr-2" />
                                                    <span className="text-muted">Safety rating NA</span>
                                                </h3>
                                            </div>
                                            <div className=" col-7 ">
                                                <h3>
                                                    <FontAwesomeIcon icon={faRoad} className="mr-2" />
                                                    <span className="text-muted">Drive type AWD</span>
                                                </h3>
                                            </div>
                                            <div className="col-12">
                                                <h3 >
                                                    <FontAwesomeIcon icon={faGasPump} className="mr-2" />
                                                    <span className="text-muted">Petrol - Premium ULP (95)</span>
                                                </h3>
                                            </div>
                                            <div className="">
                                                <h3 >
                                                    <FontAwesomeIcon icon={faTint} className="mr-2" />
                                                    <span className="text-muted">Fuel efficiency 1.8L/100KM</span>
                                                </h3>
                                            </div>
                                            <div className="">
                                                <h3 >
                                                    <FontAwesomeIcon icon={faCog} className="mr-2" />
                                                    <span className="text-muted">Transmission Sports Automatic</span>
                                                </h3>
                                            </div>
                                            <div className="">
                                                <h3 >
                                                    <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
                                                    <span className="text-muted">Factory warranty 5 Yr, Unltd KMs</span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br />
                        </div>
                        <div className="col-lg-4">
                            <div className="border p-4 rounded">
                                <h3>$28,000 to $60,000</h3>
                                <p>Drive Away</p>
                                <p className="text-muted">5000, SA</p>
                                {/* <!-- Pricing Details, e.g., loan calculator --> */}
                                <p><strong>Estimated weekly finance payment</strong></p>
                                <p className='color-info'>$244/wk</p>

                            </div>
                            {/* <!-- Contact Form --> */}
                            <form className='border-primary'>
                                <h5>Message the dealer</h5>
                                <div className="form-group">
                                    <input type="text" className="form-control mb-2" placeholder="First name" />
                                    <input type="text" className="form-control mb-2" placeholder="Last name" />
                                    <input type="email" className="form-control mb-2" placeholder="Email address" />
                                    <textarea className="form-control mb-2" placeholder="Message" rows="3"></textarea>
                                    <button type="submit" className="btn btn-primary btn-block">Message dealer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
            <section className="reviews">
                {/* <!-- Testimonial 3 - Bootstrap Brain Component --> */}
                <section class="bg-light py-5 py-xl-8">
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                                <h2 class="fs-6 text-secondary mb-2 text-uppercase text-center">Happy Customers</h2>
                                <p class="display-5 mb-4 mb-md-5 text-center">We deliver what we promise. See what clients are expressing about us.</p>
                                <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                            </div>
                        </div>
                    </div>

                    <div class="container overflow-hidden">
                        <div class="row gy-4 gy-md-0 gx-xxl-5">
                            <div class="col-12 col-md-4">
                                <div class="card border-0 border-bottom border-primary shadow-sm">
                                    <div class="card-body p-4 p-xxl-5">
                                        <figure>
                                            <img class="img-fluid rounded rounded-circle mb-4 border border-5" loading="lazy" src="./assets/img/testimonial-img-1.jpg" alt="" />
                                            <figcaption>
                                                <div class="bsb-ratings text-warning mb-3" data-bsb-star="5" data-bsb-star-off="0"></div>
                                                <blockquote class="bsb-blockquote-icon mb-4">Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum euismod massa, at aliquet erat turpis quis diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</blockquote>
                                                <h4 class="mb-2">Luna John</h4>
                                                <h5 class="fs-6 text-secondary mb-0">UX Designer</h5>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="card border-0 border-bottom border-primary shadow-sm">
                                    <div class="card-body p-4 p-xxl-5">
                                        <figure>
                                            <img class="img-fluid rounded rounded-circle mb-4 border border-5" loading="lazy" src="./assets/img/testimonial-img-2.jpg" alt="" />
                                            <figcaption>
                                                <div class="bsb-ratings text-warning mb-3" data-bsb-star="4" data-bsb-star-off="1"></div>
                                                <blockquote class="bsb-blockquote-icon mb-4">Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum euismod massa, at aliquet erat turpis quis diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</blockquote>
                                                <h4 class="mb-2">Mark Smith</h4>
                                                <h5 class="fs-6 text-secondary mb-0">Marketing Specialist</h5>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="card border-0 border-bottom border-primary shadow-sm">
                                    <div class="card-body p-4 p-xxl-5">
                                        <figure>
                                            <img class="img-fluid rounded rounded-circle mb-4 border border-5" loading="lazy" src="./assets/img/testimonial-img-4.jpg" alt="" />
                                            <figcaption>
                                                <div class="bsb-ratings text-warning mb-3" data-bsb-star="5" data-bsb-star-off="0"></div>
                                                <blockquote class="bsb-blockquote-icon mb-4">Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum euismod massa, at aliquet erat turpis quis diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</blockquote>
                                                <h4 class="mb-2">Luke Reeves</h4>
                                                <h5 class="fs-6 text-secondary mb-0">Sales Manager</h5>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </section>
            <section className='footer'>
                <Footer />
            </section>
        </>
    )
}
