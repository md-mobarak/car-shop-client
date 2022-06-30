import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
const Login = () => {
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);


    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset()
        signInWithEmailAndPassword(data.email, data.password)

    };
    if (user || gUser) {
        navigate(from, { replace: true });
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
                                <h1 className='text-center text-3xl uppercase'>Login</h1>
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
                                    <p className='text-red-700'>{errors.password?.type === 'required' && "password is required"}</p>
                                    <label class="label">
                                        <p onClick={() => navigate('/signup')} className="btn btn-link link-hover text-[#0D60C8]">New To Car?Please Signup</p>
                                    </label>
                                </div>
                                <div class="form-control mt-2">
                                    <button class="btn btn-primary">Login</button>
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

export default Login;