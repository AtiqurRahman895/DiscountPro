// import React from 'react';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import googleSVG from '../../assets/google.svg'
// import PropTypes from 'prop-types';

const Login = () => {
    const [showPassword, setShowPassword]=useState(false)
    const [email,setemail]=useState()
    const [emailValid, setEmailValid]=useState(false)
    const {loginWithGoogle,loginUser,setUser}=useContext(AuthContext)
    const navigate=useNavigate()

    const handleEmailInputChanges=(e)=>{
        setemail(e.target.value)
        setEmailValid(e.target.checkValidity())
    }

    const handleGoogleLoginBtn=()=>{
        loginWithGoogle()
        .then((userCredential)=>{
            setUser(userCredential.user)
            navigate("/")
            toast.success(`Login successful! Welcome, ${userCredential.user.displayName}!`)
        }).catch((error) => {
            toast.error(error.message?error.message:error.code)

        })
    }
    const LoginOnSubmit=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value

        loginUser(email,password)
            .then((userCredential) => {
                setUser(userCredential.user)
                e.target.reset()
                navigate("/")
                toast.success(`Login successful! Welcome, ${userCredential.user.displayName}!`)


            }).catch((error) => {
                toast.error(error.message?error.message:error.code)

            });
    }
    return (
        <section>
            <div className="container hero flex items-center justify-center">
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl p-4 md:p-8 my-20 space-y-4">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form onSubmit={LoginOnSubmit} className="card-body p-0">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input onChange={handleEmailInputChanges} type="email" name='email' placeholder="Email" className="input input-bordered" value={email} required />
                        </div>
                        
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword?"text":"password"} name="password" placeholder="Password" className="input input-bordered" required />
                            <button onClick={()=>setShowPassword(!showPassword)} type="button" className="btn btn-circle btn-sm absolute right-4 top-11" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                                {showPassword?<IoIosEye className="text-[20px]" />:<IoIosEyeOff className="text-[20px]" />}
                            </button>

                            <Link to={"/forgot-password"} state={{email}} className="label-text-alt link link-hover hover:scale-100 hover:font-semibold">
                                Forgot password?
                            </Link>
                            
                        </div>

                        <div className="form-control mt-6">
                        <button className="btn bg-custom-primary hover:bg-custom-half-primary text-white hover:text-black btn-block">Login</button>
                        </div>
                        <span className="text-center mt-4">
                            Do not have an account? <Link to={"/register"} className="link link-hover text-custom-primary hover:font-bold ">Register now</Link>
                        </span>
                    </form>
                    <h3 className='text-center text-custom-half-primary'>or</h3>
                    <button onClick={handleGoogleLoginBtn} className='btn bg-white text-black'><img src={googleSVG} alt="" className='w-[1rem]'/>Login with Google</button>

                    </div>
            </div>
        </section>
    );
};

// Login.propTypes = {
    
// };

export default Login;