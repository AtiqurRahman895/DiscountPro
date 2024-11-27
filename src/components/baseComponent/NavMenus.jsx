// import React from 'react';
// import PropTypes from 'prop-types';

import { AiFillHome } from "react-icons/ai";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { GiPriceTag } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const NavMenus = () => {
  return (
    <>
      <li className="w-fit">
        <NavLink to={"/"} className="hover:bg-transparent flex items-center gap-1"><AiFillHome /> Home</NavLink>
      </li>
      <li className="w-fit">
        <NavLink to={"/brands"} className="hover:bg-transparent flex items-center gap-1"><GiPriceTag />Brands</NavLink>
      </li>
      <li className="w-fit">
        <NavLink to={"/bookmarks"} className="hover:bg-transparent flex items-center gap-1"><BsBookmarkHeartFill className="text-xs"/>Bookmarks</NavLink>
      </li>
    </>
  );
};

// NavMenus.propTypes = {

// };

export default NavMenus;
