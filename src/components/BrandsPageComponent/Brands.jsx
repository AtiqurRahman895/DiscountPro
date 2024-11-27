// import PropTypes from 'prop-types';

import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { TransferLists } from "../../Contexts/TransferLists";
import BrandsPageSidebar from "./BrandsPageSidebar";
import BrandCardsSection from "./BrandCardsSection"

const Brands = () => {
    const {selectedCategory,setSelectedCategory,searchedBrand,setSearchedBrand}= useContext(TransferLists)

    useEffect(()=>{
        if(searchedBrand){
            setSelectedCategory('')
            setSearchedBrand('')
        }
    },[searchedBrand])
    // console.log(selectedCategory)
    return (
        <main>
            <Helmet>
                <title>Brands | Discount PRO</title>
            </Helmet>
            <section className="py-10">
                <div className="container space-y-10">
                    <h3 className="mx-auto text-center">
                        {searchedBrand || !selectedCategory || selectedCategory==='All Brands'?"All Brands":`${selectedCategory} Brands`}
                        {/* {selectedCategory?`${selectedCategory} Brands`:`All Brands`} */}
                    </h3>

                    <div className="grid grid-cols-12 gap-6 ">
                        <div className="col-span-12 md:col-span-4">
                            <BrandsPageSidebar/>
                            
                        </div>
                        <div className="col-span-12 md:col-span-8 z-10">
                            <BrandCardsSection />
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

// Brands.propTypes = {
    
// };

export default Brands;