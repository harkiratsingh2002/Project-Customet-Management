import React, { useState } from "react";
import '../CSS/register.css';
import Navbar from "../components/Navbar";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


export function RegisterPage() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        title: "N/A",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        streetNumber: "",
        streetName: "",
        zipCode: "",
        suburb: "",
        country: "",
        countryCode: '',
        phoneNumber: '',
        agreeToTerms: false,



    })

    const registerUser = async (e,) => {
        e.preventDefault();
        const { firstName, lastName, email, password, confirmPassword, streetNumber, streetName, zipCode, suburb, country, countryCode, phoneNumber, agreeToTerms } = data;
        try {
            const { data } = await axios.post('/register', {
                firstName, lastName, email, password, confirmPassword, streetNumber, streetName, zipCode, suburb, country, countryCode, phoneNumber, agreeToTerms
            })
            if (data.error) {
                toast.error(data.error)
            }

            else {
                setData({})
                toast.success("Registered Successfully, Welcome to our website")
                navigate('/login')

            }



        } catch (error) {
            console.log(error)
        }
    }

    return (
        <><div>
            <Navbar />
        </div>
            <div>
                <form onSubmit={registerUser}>

                    <div className="body">
                        <section class="h-100 h-custom gradient-custom-2">
                            <div class="container py-5 h-100">
                                <div class="row d-flex justify-content-center align-items-center h-100">
                                    <div class="col-12">
                                        <div class="card card-registration card-registration-2" id="st">
                                            <div class="card-body p-0">
                                                <div class="row g-0">
                                                    <div class="col-lg-6">
                                                        <div class="p-5">
                                                            <h3 class="fw-normal mb-5" id="st1">General Infomation</h3>



                                                            <div class="row">
                                                                <div class="col-md-6 mb-4 pb-2">

                                                                    <div data-mdb-input-init class="form-outline">
                                                                        <input type="text" id="form3Examplev2" class="form-control form-control-lg" value={data.firstName} onChange={(e) => setData({ ...data, firstName: e.target.value })} />
                                                                        <label class="form-label" for="form3Examplev2">First name</label>
                                                                    </div>

                                                                </div>
                                                                <div class="col-md-6 mb-4 pb-2">

                                                                    <div data-mdb-input-init class="form-outline">
                                                                        <input type="text" id="form3Examplev3" class="form-control form-control-lg" value={data.lastName} onChange={(e) => setData({ ...data, lastName: e.target.value })} required />
                                                                        <label class="form-label" for="form3Examplev3">Last name</label>
                                                                    </div>

                                                                </div>
                                                            </div>


                                                            <div class="mb-4 pb-2">
                                                                <div data-mdb-input-init class="form-outline">
                                                                    <div class="col-12">
                                                                        <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                                                                        <label for="email" class="form-label 001 ">Email <span class="text-danger">*</span></label>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="row">
                                                                <div class="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                                    <div class="col-12">
                                                                        <input type="password" class="form-control" name="password" id="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} required />
                                                                        <label for="password" class="form-label">Password <span class="text-danger">*</span></label>
                                                                    </div>

                                                                    <div class="col-12">
                                                                        <input type="password" class="form-control" name="password" id="password" required value={data.confirmPassword} onChange={(e) => setData({ ...data, confirmPassword: e.target.value })} />
                                                                        <label for="password" class="form-label">Confirm Password <span class="text-danger">*</span></label>

                                                                        <div id="passwordHelpBlock" class="form-text">
                                                                            <p>Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</p>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 bg-indigo text-white">
                                                        <div class="p-5">
                                                            <h3 class="fw-normal mb-5">Contact Details</h3>

                                                            <div class="mb-4 pb-2">
                                                                <div data-mdb-input-init class="form-outline form-white">
                                                                    <input type="text" id="form3Examplea2" class="form-control form-control-lg" value={data.streetNumber} onChange={(e) => setData({ ...data, streetNumber: e.target.value })} />
                                                                    <label class="form-label" for="form3Examplea2">Street Number</label>
                                                                </div>
                                                            </div>

                                                            <div class="mb-4 pb-2">
                                                                <div data-mdb-input-init class="form-outline form-white">
                                                                    <input type="text" id="form3Examplea3" class="form-control form-control-lg" value={data.streetName} onChange={(e) => setData({ ...data, streetName: e.target.value })} />
                                                                    <label class="form-label" for="form3Examplea3">Streat Name</label>
                                                                </div>
                                                            </div>

                                                            <div class="row">
                                                                <div class="col-md-5 mb-4 pb-2">

                                                                    <div data-mdb-input-init class="form-outline form-white">
                                                                        <input type="text" id="form3Examplea4" class="form-control form-control-lg" value={data.zipCode} onChange={(e) => setData({ ...data, zipCode: e.target.value })} />
                                                                        <label class="form-label" for="form3Examplea4">Zip Code</label>
                                                                    </div>

                                                                </div>
                                                                <div class="col-md-7 mb-4 pb-2">

                                                                    <div data-mdb-input-init class="form-outline form-white">
                                                                        <input type="text" id="form3Examplea5" class="form-control form-control-lg" value={data.suburb} onChange={(e) => setData({ ...data, suburb: e.target.value })} />
                                                                        <label class="form-label" for="form3Examplea5">Suburb</label>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div class="mb-4 pb-2">
                                                                <div data-mdb-input-init class="form-outline form-white">
                                                                    <input type="text" id="form3Examplea6" class="form-control form-control-lg" value={data.country} onChange={(e) => setData({ ...data, country: e.target.value })} />
                                                                    <label class="form-label" for="form3Examplea6">Country</label>
                                                                </div>
                                                            </div>

                                                            <div class="row">
                                                                <div class="col-md-5 mb-4 pb-2">

                                                                    <div data-mdb-input-init class="form-outline form-white">
                                                                        <input type="text" id="form3Examplea7" class="form-control form-control-lg" value={data.countryCode} onChange={(e) => setData({ ...data, countryCode: e.target.value })} />
                                                                        <label class="form-label" for="form3Examplea7">Code +</label>
                                                                    </div>

                                                                </div>
                                                                <div class="col-md-7 mb-4 pb-2">

                                                                    <div data-mdb-input-init class="form-outline form-white">
                                                                        <input type="text" id="form3Examplea8" class="form-control form-control-lg" value={data.phoneNumber} onChange={(e) => setData({ ...data, phoneNumber: e.target.value })} />
                                                                        <label class="form-label" for="form3Examplea8">Phone Number</label>
                                                                    </div>

                                                                </div>
                                                            </div>



                                                            <div class="form-check d-flex justify-content-start mb-4 pb-3">
                                                                <input class="form-check-input me-3" type="checkbox" id="form2Example3c" value={data.agreeToTerms} onChange={(e) => setData({ ...data, agreeToTerms: e.target.value })} />
                                                                <label class="form-check-label text-white" for="form2Example3">
                                                                    I do accept the <a href="#!" class="text-white"><u>Terms and Conditions</u></a> of your
                                                                    site.
                                                                </label>
                                                            </div>

                                                            <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-light btn-lg"
                                                                data-mdb-ripple-color="dark">Register</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </form >
            </div>
        </>
    );
}
export default RegisterPage;