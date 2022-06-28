import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset()
    };
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div >

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">

                            <div class="card-body w-full">
                                <h1 className='text-center text-3xl'>SIGNUP</h1>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text"
                                        {...register("Name", { required: true })}
                                        placeholder="Name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text"
                                        {...register("email", { required: true })}
                                        placeholder="email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        {...register("password", { required: true })}
                                        placeholder="password" class="input input-bordered" />
                                    <label class="label">
                                        <p onClick={() => navigate('/login')} className="btn btn-link link-hover text-[#0D60C8]">Already have an account?Please Login</p>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Signup</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;