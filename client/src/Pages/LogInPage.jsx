import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from 'axios';
import '../CSS/login.css';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import logo from '../images/logo.png'
import LoginPageImg from "../images/login-page-img.jpg"
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode as jwt_decode } from 'jwt-decode';




export function LogInPage() {

    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const loginUser = async (e) => {
        e.preventDefault()
        const { email, password } = data
        try {
            const { data } = await axios.post('/login', { email, password });
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({})
                navigate('/dashboard')
            }

        } catch (error) {

        }
    }

    return (
        <><div>
            <Navbar />
        </div>
            <div className="body">
                {/* <!-- Login 8 - Bootstrap Brain Component --> */}
                <section class="bg-light p-3 p-md-4 p-xl-5">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12 col-xxl-11">
                                <div class="card border-light-subtle shadow-sm">
                                    <div class="row g-0">
                                        <div class="col-12 col-md-6">
                                            <img class="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy" src={LoginPageImg} alt="Welcome back you've been missed!" />
                                        </div>
                                        <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
                                            <div class="col-12 col-lg-11 col-xl-10">
                                                <div class="card-body p-3 p-md-4 p-xl-5">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="mb-5">
                                                                <div class="text-center mb-4">
                                                                    <a href="#!">
                                                                        <img src={logo} alt="BootstrapBrain Logo" width="150" height="100" />
                                                                    </a>
                                                                </div>
                                                                <h4 class="text-center">Welcome back you've been missed!</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div className="fluid">


                                                                <GoogleLogin
                                                                    onSuccess={credentialResponse => {
                                                                        var credentialsResponseDecoded = jwt_decode(credentialResponse.credential);
                                                                        console.log(credentialsResponseDecoded);
                                                                        navigate('/dashboard', { state: { name: credentialsResponseDecoded.name } });

                                                                    }}
                                                                    onError={() => {
                                                                        console.log('Login Failed');
                                                                    }}
                                                                />
                                                            </div>
                                                            <p class="text-center mt-4 mb-5">Or sign in with</p>
                                                        </div>
                                                    </div>
                                                    <form onSubmit={loginUser}>
                                                        <div class="row gy-3 overflow-hidden">
                                                            <div class="col-12">
                                                                <div class="form-floating mb-3">
                                                                    <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required value={data.email} onChange={(e) =>
                                                                        setData({ ...data, email: e.target.value })} />
                                                                    <label for="email" class="form-label">Email</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-12">
                                                                <div class="form-floating mb-3">
                                                                    <input type="password" class="form-control" name="password" id="password" placeholder="Password" required value={data.password} onChange={(e) => setData({
                                                                        ...data, password:
                                                                            e.target.value
                                                                    })} />
                                                                    <label for="password" class="form-label">Password</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-12">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me" />
                                                                    <label class="form-check-label text-secondary" for="remember_me">
                                                                        Keep me logged in
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-12">
                                                                <div class="d-grid">
                                                                    <button class="btn btn-dark btn-lg" type="submit">Log in now</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                                                                <a href="#!" class="link-secondary text-decoration-none">Create new account</a>
                                                                <a href="#/ForgotPassword" class="link-secondary text-decoration-none">Forgot password</a>
                                                                <a href="#/staffLogIn" class="link-secondary text-decoration-none">Staff Log In</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div></>
    );
}

export default LogInPage;
