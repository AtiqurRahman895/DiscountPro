import notAvailable from '../../assets/notAvailable.png'
import { useContext } from 'react';
import { TransferLists } from '../../Contexts/TransferLists';
import BrandCard from './BrandCard';
const BrandCardsSection = () => {
    const {brandsToShow}= useContext(TransferLists)

    return (
        <>
            { brandsToShow.length===0?
                <div className='h-lvh place-items-center grid content-center bg-white'>
                <img src={notAvailable} alt="" className='w-full'/>
                </div>:
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-12">
                {
                    brandsToShow?.map((brand,index)=>(
                        <BrandCard key={index} specificBrand={brand} bookmarkPage={false} />
                    ))
                }
                </div>


            }
        </>

    );
};

export default BrandCardsSection;