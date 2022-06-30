import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset()
        createUserWithEmailAndPassword(data.email, data.password, data.Name)
    };
    if (user || gUser) {
        navigate('/')
    }

    const handleGoogleUser = () => {
        signInWithGoogle()
    }
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div >


                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">

                        <div class="card-body w-full">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h1 className='text-center text-3xl'>SIGNUP</h1>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text"
                                        {...register("Name", { required: true })}
                                        placeholder="Name" class="input input-bordered" />
                                    <p className='text-red-700'>{errors.Name?.type === 'required' && "Name is required"}</p>
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text"
                                        {...register("email", { required: true })}
                                        placeholder="email" class="input input-bordered" />
                                    <p className='text-red-700'>{errors.email?.type === 'required' && "email is required"}</p>
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        {...register("password", { required: true })}
                                        placeholder="password" class="input input-bordered" />
                                    <p className='text-red-700 '>{errors.password?.type === 'required' && "password is required"}</p>
                                    <label class="label">
                                        <p onClick={() => navigate('/login')} className="btn btn-link link-hover text-[#0D60C8]">Already have an account?Please Login</p>
                                    </label>
                                </div>
                                <div class="form-control mt-2">
                                    <button class="btn btn-primary">Signup</button>
                                </div>
                                <div class="divider">OR</div>

                            </form>
                            <div class="form-control mt-0">
                                <button onClick={handleGoogleUser} class="btn btn-secondary">Google</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default SignUp;