import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
    const {user,updateUserProfile}=useContext(AuthContext)
    const [name, setName]=useState(user?.displayName)
    const [photoURL, setPhotoURL]=useState(user?.photoURL)

    const navigate=useNavigate()

    const handleFormInputChanges=(e)=>{
        if(e.target.name==="name"){
            setName(e.target.value)
        }
        if(e.target.name==="photoURL"){
            setPhotoURL(e.target.value)
        }
        
    }
    const UpdateProfileOnSubmit=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const photoURL=e.target.photoURL.value
        
        updateUserProfile(name,photoURL).then(()=>{
            e.target.reset()
            navigate("/")
            toast.success("User Profile successfully updated!")
        }).catch((error) => {
            toast.error(error.message?error.message:error.code)

        });

    }
    return (
        <section>
            <div className="container hero flex items-center justify-center">

                    <div className="card w-full max-w-md shrink-0 shadow-2xl p-4 md:p-8 my-20 space-y-4">
                    <h1 className="text-5xl font-bold">Update now!</h1>
                    <form onSubmit={UpdateProfileOnSubmit} className="card-body p-0">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input onChange={handleFormInputChanges} type='text' name="name" placeholder="Name" className="input input-bordered" minLength={3} value={name} required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input onChange={handleFormInputChanges} type='text' name="photoURL" placeholder="Photo url" className="input input-bordered" value={photoURL}/>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-custom-primary hover:bg-custom-half-primary text-white hover:text-black btn-block">Update</button>
                        </div>

                    </form>
                    </div>
            </div>
        </section>
    );
};

export default UpdateProfile;