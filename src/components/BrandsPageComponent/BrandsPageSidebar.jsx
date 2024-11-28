import { useContext, useState } from 'react';
import useFilterbyCategoryAndName from '../../Hooks/useFilterbyCategoryAndName';
import { TransferLists } from '../../Contexts/TransferLists';

const BrandsPageSidebar = () => {
    const {selectedCategory, setSelectedCategory, setSearchedBrand}= useContext(TransferLists)
    const {getCouponsByCategory,getCouponsByBrandName} = useFilterbyCategoryAndName()
    const [showFilter, setShowFilter]=useState(false)
    const categoryNames = [
        "All Brands",
        "Electronics",
        "Clothing",
        "Groceries",
        "Beauty",
        "Fitness",
        "Gaming",
        "Travel",
        "Home & Decor",
        "Books & Stationery",
        "Toys & Games",
        "Automotive",
        "Health & Wellness"
    ];

    const HandleSearchSubmit=(e)=>{
        e.preventDefault()
        const brandName=e.target.searchValue.value
        setSearchedBrand(brandName)
        
        getCouponsByBrandName(brandName)
        e.target.reset()
    }
    const handlecategoryBtnClick=(categoryName)=>{
        setSelectedCategory(categoryName)
        getCouponsByCategory(categoryName)
    }

    return (
        <div className='flex flex-wrap justify-between items-baseline gap-x-8 gap-y-4'>
            <form onSubmit={HandleSearchSubmit} className='w-full sm:w-auto md:w-full'>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" name='searchValue' placeholder="Search Brands" minLength={2} required/>
                    <button type="submit">                    
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70 shrink-0">
                            <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                        </svg>
                    </button>

                </label>
                
            </form>
            <div className="space-y-4 md:w-full dropdown sm:dropdown-end md:dropdown-open">
                <p tabIndex={0} onClick={()=>setShowFilter(!showFilter)} className='text-custom-primary font-bold uppercase'>Filter By Category</p>
                <div tabIndex={0} className={`join join-vertical w-52 md:w-full dropdown-content z-20`} >
                    {
                        categoryNames.map(((categoryName,index)=>(
                            <button key={index} onClick={()=>handlecategoryBtnClick(categoryName)} className={`${categoryName===selectedCategory?"bg-custom-primary hover:bg-custom-primary text-white":""} btn join-item border border-gray-300`}>{categoryName}</button>
                        )))
                    }
                    

                </div>
            </div>
        </div>
    );
};

BrandsPageSidebar.propTypes = {
    
};

export default BrandsPageSidebar;