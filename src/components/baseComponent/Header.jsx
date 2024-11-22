// import PropTypes from 'prop-types';

import { Link, useLocation } from "react-router-dom";
import NavMenus from "./NavMenus";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import logo from "../../assets/logoRemovedBg.png"
// import { GoUnverified } from "react-icons/go";

const Header = () => {
    const location= useLocation() 
    // console.log(location.pathname)
    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }, [location.pathname]); // Trigger when the route changes

    const [scrollY, setScrollY]=useState(0)
    const headerRef = useRef(null)
    const{user,logoutUser,verifyAccount}=useContext(AuthContext)
    // console.log(user)


    useEffect(()=>{
      const changeHeaderColor=()=>{
        setScrollY(window.scrollY)
        if (window.scrollY >= 16) {
          document
            headerRef.current?.classList.add(`headerSectionAnimation`);
        } else {
          document
            headerRef.current?.classList.remove(`headerSectionAnimation`);
        }
      }

      window.addEventListener(`scroll`, changeHeaderColor)
  },[]) 
//   console.log(scrollY)

  return (
      <header ref={headerRef} className={`sticky top-0 z-50 w-full py-2`}>
        <div className="navbar container">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 space-y-2 shadow text-custom-black"
              >
                  <NavMenus/>

              </ul>
            </div>
            <Link 
              to={"/"}
              className={`btn btn-ghost hover:bg-transparent text-black hover:text-black text-lg`}>
              <img src={logo} alt="Discount Pro" className="w-[100px]"/>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavMenus/>
            </ul>
          </div>
          <div className="navbar-end">

            {user? 
            // <div onClick={logoutUser} className="primaryButton activePrimaryButton">Log Out</div>
              <div className="dropdown dropdown-end text-custom-black">
                <div tabIndex={0} role="button" className="indicator rounded-full hover:shadow-xl mx-4 avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Photo"
                      src={user.photoURL?`${user.photoURL}`:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                  </div>
                  {user.emailVerified &&
                        <RiVerifiedBadgeFill className="text-sky-500 text-[16px] indicator-item top-2 right-3"/>
                   }

                </div>
                <div className="dropdown-content bg-base-100 rounded-box z-[1] mt-3 min-w-52 p-2 shadow space-y-2">
                  <div className="space-y-1 text-center w-full">
                    {user.displayName &&
                    <div className="flex justify-center">
                      <h5>{user.displayName}</h5>
                      {/* {user.emailVerified?<RiVerifiedBadgeFill className="text-sky-500" />:<RiVerifiedBadgeFill className="text-red-500" />} */}
                      {/* {user.emailVerified && <RiVerifiedBadgeFill className="text-sky-400" />} */}
                    </div>
                    }
                    
                    <p className="text-custom-primary font-bold">{user.email&&user.email}</p>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm space-y-2">

                    {user.emailVerified || <li className="hover:scale-105 duration-200"><p onClick={verifyAccount} className="text-red-500 hover:text-red-500"> Verify now </p></li>}

                    <li><Link to={"/update-profile"} className="">Update Profile</Link></li>
                    <li><Link to={"/change-password"} className="">Change Password</Link></li>
                    <li className="hover:scale-105 duration-200"><p onClick={logoutUser}>Log Out</p></li>
                  </ul>
                </div>

              </div>
              :
              <div className="flex gap-2">
                
                <Link to={"/login"} className={`primaryButton activePrimaryButton`}>Login</Link>
                <Link to={"/register"} className={`hidden sm:inline-block primaryButton activePrimaryButton`}>Registration</Link>
              </div>
              
            }




          </div>
        </div>
      </header>

  );
};

// Footer.propTypes = {
    
// };

export default Header;
