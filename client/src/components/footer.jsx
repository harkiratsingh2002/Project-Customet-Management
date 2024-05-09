import React from 'react'
import '../CSS/footer.css'

export function Footer() {
    return (
        <div>
            {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
            <div class="container-fluid  bg-custom me-0 ms-0">

                <footer class="text-center text-lg-start border border-white mt-1 pt-4">
                    {/* <!-- Grid container --> */}
                    <div class="container p-4">
                        {/* <!--Grid row--> */}
                        <div class="row">
                            {/* <!--Grid column--> */};
                            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 ">
                                <h5 class="text-uppercase mb-4 text-white">OUR WORLD</h5>

                                <ul class="list-unstyled mb-4 ">
                                    <li>
                                        <a href="#!" class="text-white  text-decoration-none">Home</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white  text-decoration-none">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white  text-decoration-none">Reviews</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white  text-decoration-none">Our Team</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 white">
                                <h5 class="text-uppercase mb-4 text-white">Assistance</h5>

                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#!" class="text-white  text-decoration-none">Contact us</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white  text-decoration-none">Car Advice</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white  text-decoration-none">Finance </a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white  text-decoration-none">Family Car</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white  text-decoration-none">First Car</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 class="text-uppercase mb-4 text-white">Careers</h5>

                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#!" class="text-white  text-decoration-none">Jobs</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 class="text-uppercase mb-4 text-white" >Sign up to our newsletter</h5>

                                <div class="form-outline form-white mb-4">
                                    <input type="email" id="form5Example2" class="form-control" />
                                    <label class="form-label text-white" for="form5Example2 ">Email address</label>
                                </div>

                                <button type="submit" class="btn btn-success btn-outline-white btn-block text-white">Subscribe</button>
                            </div>
                            {/* <!--Grid column--> */}
                        </div>
                        {/* <!--Grid row--> */}
                    </div>
                    {/* <!-- Grid container --> */}

                    {/* <!-- Copyright --> */}
                    <div class="text-center p-3 border-top border-white text-white">
                        © 2024 Copyright: <span></span>
                        <a class="text-white" href="https://mdbootstrap.com/">Japan Direct Autos</a>
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>

            </div>
            {/* <!-- End of .container --> */}
        </div>
    )
}
