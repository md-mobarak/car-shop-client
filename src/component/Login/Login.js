import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div >

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">

                        <div class="card-body w-full">
                            <h1 className='text-center text-3xl uppercase'>Login</h1>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <p onClick={() => navigate('/signup')} className="btn btn-link link-hover text-[#0D60C8]">New To Car?Please Signup</p>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;