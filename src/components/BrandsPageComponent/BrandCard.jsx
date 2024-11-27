import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import { GiPriceTag } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import useCheckIfBookmarked from '../../Hooks/useCheckIfBookmarked';
import useUpdateBookmarks from '../../Hooks/useUpdateBookmarks';
import { MdDeleteForever } from 'react-icons/md';

const BrandCard = ({specificBrand,bookmarkPage}) => {
    const {bookmarked}= useCheckIfBookmarked({specificBrandId:specificBrand._id})
    const {addToBookmarks,removeFromBookmarks}= useUpdateBookmarks({specificBrand})
    const manageBookmarkButton=()=>{
        if(bookmarked){
            removeFromBookmarks()
        }else{
            addToBookmarks()
        }
    }
    
    return (
        <div className="card border bg-white duration-500 rounded-lg hover:shadow-md">
            <figure>
                <img
                src={specificBrand.brand_logo}
                alt={specificBrand.brand_name} className="w-[120px]" />
            </figure>
            <div className="card-body pt-0">
                <div className="divider my-0"></div>
                <h6 className="">{specificBrand.brand_name} ({specificBrand.category})</h6>
                <div className="flex gap-2 items-center">
                <ReactStars
                    count={5}
                    value={specificBrand.rating} 
                    size={18} 
                    edit={false} 
                    isHalf={true} 
                    halfIcon={<IoStarHalf />} 
                    emptyIcon={<IoStarOutline />} 
                    fullIcon={<IoStar />} 
                    color1="#04808929 " 
                    color2="#048189" 
    />
                <span>{specificBrand.rating}</span>
                </div>
                <p className='py-5'>{specificBrand.description}</p>
                <div className="flex gap-4">
                    <Link to={`/brand/${specificBrand._id}`} className="cardButton">View Coupons</Link>
                    {!bookmarkPage?
                        <button type='button' onClick={manageBookmarkButton} className={`cardButton2 ${bookmarked&&"activeCardButton"}`} style={{paddingInline:"9px", paddingBlock:"0rem"}}><BsBookmarkHeartFill className='text-lg'/></button>
                    :   
                        <button type='button' onClick={manageBookmarkButton} className={`cardButton`} style={{paddingInline:"6px", paddingBlock:"0rem"}}><MdDeleteForever className='text-2xl'/></button>
                    }
                    
                    
                </div>
                {
                    specificBrand.isSaleOn && <div className='flex items-center gap-1 animate-bounce absolute text-nowrap top-4 left-4'>
                        <GiPriceTag className='text-custom-primary' />
                        <a className='text-custom-primary text-xs '>Sale is on</a>
                    </div>
                }
                
            </div>
        </div>
    );
};

BrandCard.propTypes = {
    specificBrand: PropTypes.object.isRequired,
    bookmarkPage:PropTypes.bool.isRequired
};

export default BrandCard;