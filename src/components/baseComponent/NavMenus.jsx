// import React from 'react';
// import PropTypes from 'prop-types';

import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiPriceTag } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const NavMenus = () => {
  return (
    <>
      <li className="w-fit">
        <NavLink to={"/"} className="hover:bg-transparent flex items-center gap-1"><AiOutlineHome /> Home</NavLink>
      </li>
      <li className="w-fit">
        <NavLink to={"/brands"} className="hover:bg-transparent flex items-center gap-1"><GiPriceTag />Brands</NavLink>
      </li>
      <li className="w-fit">
        <NavLink to={"/profile"} className="hover:bg-transparent flex items-center gap-1"><CgProfile />Profile</NavLink>
      </li>
    </>
  );
};

// NavMenus.propTypes = {

// };

export default NavMenus;
