import PropTypes from 'prop-types';
import notAvailable from '../../assets/notAvailable.png'
import ReactStars from 'react-stars';
import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5';
import { GiPriceTag } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { TransferLists } from '../../Contexts/TransferLists';
const BrandCards = () => {
    const {brandsToShow}= useContext(TransferLists)

    // console.log(brandsToShow)
    return (
        <>
            { brandsToShow.length===0?
                <div className='h-lvh place-items-center grid content-center bg-white'>
                <img src={notAvailable} alt="" className='w-full'/>
                </div>:
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-12">
                {
                    brandsToShow?.map((brand,index)=>(
                        <div key={index} className="card border bg-white duration-500 rounded-lg hover:shadow-md">
                            <figure>
                                <img
                                src={brand.brand_logo}
                                alt={brand.brand_name} className="w-[120px]" />
                            </figure>
                            <div className="card-body pt-0">
                                <div className="divider my-0"></div>
                                <h6 className="">{brand.brand_name} ({brand.category})</h6>
                                <div className="flex gap-2 items-center">
                                <ReactStars
                                    count={5}
                                    value={brand.rating} 
                                    size={18} 
                                    edit={false} 
                                    isHalf={true} 
                                    halfIcon={<IoStarHalf />} 
                                    emptyIcon={<IoStarOutline />} 
                                    fullIcon={<IoStar />} 
                                    color1="#04808929 " 
                                    color2="#048189" 
/>
                                <span>{brand.rating}</span>
                                </div>
                                <p className='py-5'>{brand.description}</p>
                                <div className="flex gap-6 items-baseline flex-wrap">
                                    <Link to={`/brand/${brand._id}`} className="cardButton">View Coupons</Link>
                                    {
                                        brand.isSaleOn && <div className='flex items-center gap-1 animate-bounce absolute text-nowrap top-4 left-4'>
                                            <GiPriceTag className='text-custom-primary' />
                                            <a className='text-custom-primary text-xs '>Sale is on</a>
                                        </div>
                                    }
                                    
                                </div>
                                
                            </div>
                        </div>
                    ))
                }
            </div>


            }
        </>

    );
};

BrandCards.propTypes = {
    brandsToShow: PropTypes.array.isRequired
};

export default BrandCards;