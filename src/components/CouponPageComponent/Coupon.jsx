// import PropTypes from 'prop-types';

import { Link, useParams } from "react-router-dom";
import useSpecificBrand from "../../Hooks/useSpecificBrand";
import { Helmet } from "react-helmet-async";
import { IoStar } from "react-icons/io5";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { BsBookmarkHeartFill } from "react-icons/bs";
import useCheckIfBookmarked from "../../Hooks/useCheckIfBookmarked";
import useUpdateBookmarks from "../../Hooks/useUpdateBookmarks";

const Coupon = () => {
  const { _id } = useParams();
  const specificBrand = useSpecificBrand({ brandId: _id });
  
  const {bookmarked}= useCheckIfBookmarked({specificBrandId:_id})
  const {addToBookmarks,removeFromBookmarks}= useUpdateBookmarks({specificBrand})
  const manageBookmarkButton=()=>{
      if(bookmarked){
          removeFromBookmarks()
      }else{
          addToBookmarks()
      }
  }

  return (
    <main>
      <Helmet>
        <title>
          {specificBrand?.description || "Loading..."} | Discount PRO
        </title>
      </Helmet>

      {
        specificBrand?
          <section className="space-y-4">
            <div className="bg-white border-b-2 border-gray-300">
              <div className="container flex flex-col xs:flex-row gap-4 items-center py-6">
                <img src={specificBrand.brand_logo} alt={specificBrand.brand_name} className="w-[100px] lg:w-[150px]"/>
                <div className="space-y-3">
                  <h3 className="font-bold">{specificBrand.description}</h3>
                  <div className="flex gap-2 flex-wrap items-center">
                    <h6 className="text-custom-primary font-bold">{specificBrand.brand_name}</h6>
                    <div className="badge badge-md badge-warning text-nowrap space-x-1">
                      <p>{specificBrand.rating}</p>
                      <IoStar />
                    </div>
                    {specificBrand.isSaleOn && <p className="">Sale is on</p>}
                  </div>
                    
                  <BsBookmarkHeartFill onClick={manageBookmarkButton} className={`${bookmarked&&"text-custom-primary"} text-2xl cursor-pointer`} />


                </div>
                
              </div>
            </div>
            <div className="container space-y-6">
                <h5>Total Available Coupon: {specificBrand.coupons.length}</h5>
                {specificBrand.coupons.map((coupon,index)=>(
                <div key={index} className="grid xs:flex gap-3 bg-white rounded-lg p-3 shadow-md">
                    <CopyToClipboard text={coupon.coupon_code} onCopy={()=>toast.success(`You have copied Coupon code for ${coupon.description}`)}>
                      <div className="w-full xs:w-fit p-3 rounded-md border-2 border-dashed height-auto text-center place-content-center hover:bg-gray-50 duration-500 hover:scale-95">
                        <h2 className="font-bold text-custom-primary">Copy</h2>
                        <h5 className="font-medium">Code</h5>
                      </div>
                    </CopyToClipboard>

                    <div className=" w-full flex flex-wrap gap-x-6 gap-y-3 justify-between items-center">
                      <div className="space-y-2">
                        <b>Valid Till: {coupon.expiry_date}</b>
                        <h4>{coupon.description}</h4>
                        <b className="text-custom-primary">Condition: <span className="text-black font-medium">{coupon.condition}</span> </b>
                      </div>
                      <Link to={specificBrand.shop_link} target="_blank" className="primaryButton activePrimaryButton">Use now</Link>

                    </div>
                  </div>                 
                ))}

              </div>
          </section>
          :
          <div className=""><h1>Loading....</h1></div>
      }

    </main>
  );
};

// Coupon.propTypes = {

// };

export default Coupon;
