import { useContext, useEffect } from "react";
import { TransferLists } from "../../Contexts/TransferLists";
import { useNavigate } from "react-router-dom";
import useCategoryBrandCount from "../../Hooks/useCategoryBrandCount";
import useFilterbyCategoryAndName from "../../Hooks/useFilterbyCategoryAndName";
import Aos from "aos";
import 'aos/dist/aos.css'; 

const TopCategories = () => {
    const {setSelectedCategory,}=useContext(TransferLists)
    const {getCouponsByCategory} = useFilterbyCategoryAndName()
    const categoryCounts=useCategoryBrandCount()
    const navigate=useNavigate()
    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false,
        });
        // console.log("AOS Initialized");  
    }, []);
    
    const handleClickCard=(category)=>{
        setSelectedCategory(category)
        getCouponsByCategory(category)
        navigate('/brands')
    }
    return (
        <section data-aos="fade-up" className="">
            <div className="container space-y-10">
                <h3 className='mx-auto text-center'>Top Categories</h3>
                <div className="grid xs:grid-cols-2 md:grid-cold-3 lg:grid-cols-4 gap-4">
                    {
                        categoryCounts.map(({category,totalCount},index)=>(
                            <div onClick={()=>handleClickCard(category)} key={index}
                             className="px-4 py-6 place-items-center grid gap-3 content-center rounded-md border duration-500
                              border-custom-primary hover:border-custom-half-primary bg-custom-half-primary
                               hover:bg-custom-primary text-custom-primary hover:text-white hover:shadow-lg">
                                <h4 >{category}</h4>
                                <b className="text-nowrap">Brands: {totalCount}</b>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    );
};

export default TopCategories;