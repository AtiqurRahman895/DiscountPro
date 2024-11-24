// import PropTypes from 'prop-types';

import { Helmet } from "react-helmet-async";
import HomeHero from "./HomeHero";
import TopBrands from "./TopBrands";
import BrandsOnSale from "./BrandsOnSale";
import FaqSection from "./FaqSection";
import TopCategories from "./TopCategories";

const Home = () => {
    return (
        <main className="space-y-20">
            <Helmet>
                <title>Home | Discount PRO</title>
            </Helmet>
            <HomeHero/>
            <TopBrands/>
            <BrandsOnSale/>
            <TopCategories/>
            <FaqSection/>

        </main>
    );
};

// Home.propTypes = {
    
// };

export default Home;