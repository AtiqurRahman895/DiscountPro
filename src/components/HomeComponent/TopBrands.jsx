import { useContext } from 'react';
import Marquee from 'react-fast-marquee';
import { TransferLists } from '../../Contexts/TransferLists';
import { Link } from 'react-router-dom';

const TopBrands = () => {
  const {coupons:brands}=useContext(TransferLists)

    return (
        <section>
            <div className="container space-y-10">
                <h3 className='mx-auto text-center'>Top Brands</h3>
                <Marquee pauseOnHover={true} className='bg-transparent' speed={40}>
                    {brands.map((brand,index)=>(
                        <Link to={`/brand/${brand._id}`} key={index}>
                            <img src={brand.brand_logo} alt={brand.brand_name}  className='w-[100px] mx-10 lg:mx-14'/>
                        </Link>
                    ))}
                </Marquee>
            </div>
            
        </section>
    );
};

export default TopBrands;