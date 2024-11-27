import { useContext } from 'react';
import BrandCard from '../BrandsPageComponent/BrandCard';
import { TransferLists } from '../../Contexts/TransferLists';
import notAvailableImg from '../../assets/notAvailable.png'

const BookmarkCardsSection = () => {
    const {bookmarks} = useContext(TransferLists);

    return (
        <section>
            {
                bookmarks.length >= 1?
                    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
                    {
                        bookmarks?.map((brand,index)=>(
                            <BrandCard key={index} specificBrand={brand} bookmarkPage={true} />
                        ))
                    }
                    </div>
                :
                <div className="container grid justify-items-center text-center">
                    <img src={notAvailableImg} alt="Not Available" className='m-'/>
                    <h2 className='text-custom-primary '>You have yet to Bookmark any brands!</h2>
                </div>
                
            }

        </section>
    );
};

export default BookmarkCardsSection;