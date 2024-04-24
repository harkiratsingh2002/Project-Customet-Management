import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




export default function ForgotPassword() {

    // this section of code links the frontend with the backend and sending the data back and forth

    const navigate = useNavigate()

    const [email, setEmail] = useState()
    cont[Otp, setOTP] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <>
            <Navbar />
            <div>
                {/* this is the code for frontend  */}
                <section class="bg-light py-3 py-md-5 py-xl-8">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                                <div class="mb-5">
                                    <div class="text-center mb-4">
                                        <a href="#!">
                                            <img src="./assets/img/bsb-logo.svg" alt="BootstrapBrain Logo" width="175" height="57" />
                                        </a>
                                    </div>
                                    <h4 class="text-center mb-4">Password Reset</h4>
                                </div>
                                <div class="card border border-light-subtle rounded-4">
                                    <div class="card-body p-3 p-md-4 p-xl-5">
                                        <form onSubmit={handleSubmit}>
                                            <p class="text-center mb-4">Provide the email address associated with your account to recover your password.</p>
                                            <div class="row gy-3 overflow-hidden">
                                                <div class="col-12">
                                                    <div class="form-floating mb-3">
                                                        <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required onChange={(e) => { setEmail(e.target.value) }} />
                                                        <label for="email" class="form-label">Email</label>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid">
                                                        <button class="btn btn-primary btn-lg" type="submit">Reset Password</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-4">
                                    <a href="#/login" class="link-secondary text-decoration-none">Login</a>
                                    <a href="#/register" class="link-secondary text-decoration-none">Register</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
