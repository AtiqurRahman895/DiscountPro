// import React from 'react';
// import PropTypes from 'prop-types';

import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { TransferLists } from "../../Contexts/TransferLists";

const Base = () => {
  const coupons=useLoaderData()
  const [selectedCategory,setSelectedCategory] =useState('All Brands')
  const [searchedBrand, setSearchedBrand]=useState()
  const [brandsToShow, setBrandsToShow]=useState(coupons)
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading]= useState(true)

  useEffect(()=>{
    if(window.localStorage.getItem('bookmarks')){
      setBookmarks(JSON.parse(window.localStorage.getItem('bookmarks')))
    }
    setLoading(false)
  },[])

  useEffect(()=>{
    loading || window.localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
  },[bookmarks])

  const value={coupons,
    selectedCategory,setSelectedCategory,
    searchedBrand,setSearchedBrand,
    brandsToShow,setBrandsToShow,
    bookmarks, setBookmarks,
    loading, setLoading,
  }

  return (
    <>
      <TransferLists.Provider value={value}>
        <Header />
        <Outlet />
        <Footer />
      </TransferLists.Provider>

    </>
  );
};

// Base.propTypes = {

// };

export default Base;
