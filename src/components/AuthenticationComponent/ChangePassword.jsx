
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const ChangePassword = () => {
    // const [showOldPassword, setShowOldPassword]=useState(false)
    const [showPassword, setShowPassword]=useState(false)
    const {user,ChangePassword}=useContext(AuthContext)
    const [password, setPassword]=useState()
    const [passwordError, setPasswordError]=useState(false)
    const navigate=useNavigate()

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
        const password=e.target.password.value
        // const oldPassword=e.target.oldPassword.value

        // if(oldPassword===user.password){
        //     // have to use becrypt to compare Oldpassword with user.reloadUserInfo.passwordHash
        //     toast.error("Incorrect old password!")
        //     e.target.oldPassword.focus()
        //     return
        // }

        if(passwordError){
            e.target.password.focus();
            return
        }

        ChangePassword(password)
            .then(() => {
                e.target.reset()
                navigate("/")
                toast.success("Password changed successfully!")

            }).catch((error) => {
                toast.error(error.message?error.message:error.code)

            });
            

    }
    return (
        <section>
            <div className="container hero flex items-center justify-center">

                    <div className="card w-full max-w-md shrink-0 shadow-2xl p-4 md:p-8 my-20 space-y-4">
                    <h1 className="text-5xl font-bold">Change Password!</h1>
                    <form onSubmit={CreatUserOnSubmit} className="card-body p-0">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered disabled:border  disabled:border-gray-300" value={user.email} disabled/>
                        </div>

                        {/* <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Old Password</span>
                            </label>

                            <input type={showOldPassword?"text":"password"} name="oldPassword" placeholder="password" className="input input-bordered" required />

                            <button onClick={()=>setShowOldPassword(!showOldPassword)} type="button" className="btn btn-circle btn-sm absolute right-4 top-11">
                                {showOldPassword?<IoIosEye className="text-[20px]" />:<IoIosEyeOff className="text-[20px]" />}
                            </button>

                        </div> */}

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
                            <button className="btn bg-custom-primary hover:bg-custom-half-primary text-white hover:text-black btn-block">Change</button>
                        </div>


                    </form>
                    </div>
            </div>
        </section>
    );
};


export default ChangePassword;