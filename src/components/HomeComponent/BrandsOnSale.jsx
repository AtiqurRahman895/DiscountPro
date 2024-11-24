import { Link } from "react-router-dom";
import useFilterByOnSale from "../../Hooks/useFilterByOnSale";
import { RiCoupon3Line } from "react-icons/ri";

const BrandsOnSale = () => {
  const onSaleBrands = useFilterByOnSale()
  return (
        <section id="onSaleSction">
            <div className="container space-y-10">
                <h3 className="mx-auto text-center">
                    Brands on Sell
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
                    {
                        onSaleBrands?.map((brand,index)=>(
                            <Link to={`/brand/${brand._id}`} key={index} className="card bg-white border border-custom-primary rounded-lg duration-500 hover:shadow-md">
                                <figure className="">
                                    <img
                                    src={brand.brand_logo}
                                    alt={brand.brand_name} className="w-[120px]" />
                                </figure>
                                <div className="card-body pt-0">
                                    <div className="divider my-0"></div>
                                    <h6 className="">{brand.brand_name} ({brand.category})</h6>
                                    <p>{brand.description}</p>
                                    <button className="text-custom-primary text-xs bg-custom-half-primary px-2 p-1 rounded-full w-fit flex gap-1 items-center">{brand.coupons.length} Coupons <RiCoupon3Line className="text-[14px]"/></button>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default BrandsOnSale;