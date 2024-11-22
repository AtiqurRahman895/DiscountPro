
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import googleSVG from '../../assets/google.svg'

const Register = () => {
    const [showPassword, setShowPassword]=useState(false)
    const {setUser,loginWithGoogle,creatUser,updateUserProfile}=useContext(AuthContext)
    const [password, setPassword]=useState()
    const [passwordError, setPasswordError]=useState(false)
    const navigate=useNavigate()

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

    const handlePasswordInputChanges=(e)=>{
        setPassword(e.target.value)
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{6,20}$/;
        if (!regex.test(e.target.value)) {
                e.target.classList.add("invalid");
                setPasswordError(true)
        }else{
            e.target.classList.remove("invalid");
            setPasswordError(false)
        } 
    }

    const CreatUserOnSubmit=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const photoURL=e.target.photoURL.value
        const email=e.target.email.value
        const password=e.target.password.value

        if(passwordError){
            e.target.password.focus();
            return
        }

        creatUser(email,password)
            .then((userCredential) => {
                setUser(userCredential.user);
                toast.success("Your Registration successfull!")
                e.target.reset()
                updateUserProfile(name,photoURL).then(()=>{
                    navigate("/")
                }).catch((error) => {
                    toast.error(error.message?error.message:error.code)
    
                });

            }).catch((error) => {
                toast.error(error.message?error.message:error.code)

            });
            

    }
    return (
        <section>
            <div className="container hero flex items-center justify-center">

                    <div className="card w-full max-w-md shrink-0 shadow-2xl p-4 md:p-8 my-20 space-y-4">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <form onSubmit={CreatUserOnSubmit} className="card-body p-0">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text' name="name" placeholder="Name" className="input input-bordered" minLength={3} required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input type='text' name="photoURL" placeholder="Photo url" className="input input-bordered" />
                        </div>

                        {/* <label className="form-control">
                            <div className="label">
                                <span className="label-text">profile picture</span>
                            </div>
                            <input type="file" name="pic" className="file-input file-input-bordered" />
                        </label> */}

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input onChange={handlePasswordInputChanges} type={showPassword?"text":"password"} name="password" placeholder="password" className="input input-bordered" value={password} required />
                        <button onClick={()=>setShowPassword(!showPassword)} type="button" className="btn btn-circle btn-sm absolute right-4 top-11">
                            {showPassword?<IoIosEye className="text-[20px]" />:<IoIosEyeOff className="text-[20px]" />}
                        </button>
                        {passwordError && 
                            <label className="label">
                                <p className="label-text-alt text-red-500">Password must Be 6 to 20 characters long, Include at least one digit (0-9), one lowercase letter (a-z), one uppercase letter (A-Z) and one special character (@#$%^&*!)</p>
                            </label>
                        }
                        
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-custom-primary hover:bg-custom-half-primary text-white hover:text-black btn-block">Submit</button>
                        </div>

                        <span className="text-center mt-4">
                            Already have an account? <Link to={"/login"} className="link link-hover text-custom-primary hover:font-bold ">Login now</Link>
                        </span>

                    </form>
                    <h3 className='text-center text-custom-half-primary'>or</h3>
                    <button onClick={handleGoogleLoginBtn} className='btn bg-white text-black'><img src={googleSVG} alt="" className='w-[1rem]'/> Login with Google</button>
                    </div>
            </div>
        </section>
    );
};


export default Register;