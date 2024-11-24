// import { useContext } from "react";
// import { TransferLists } from "../../Contexts/TransferLists";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const Hero = () => {
  const slides=[
    {
      img:"bg-[url(https://i.ibb.co.com/5x85Jxs/heroImg0.jpg)]",
      title:"Save Big Every Day!",
      subText:"Discover top deals and coupons for Bangladesh's best brands.",
      buttonText:"Start Saving",
      buttonLink:"/brands"
    },
    {
      img:"bg-[url(https://i.ibb.co.com/vDDB5VX/heroImg1.jpg)]",
      title:"Your Savings Partner.",
      subText:"Access the latest coupons and maximize your shopping budget.",
      buttonText:"Find Coupons",
      buttonLink:"/brands"
    },
    {
      img:"bg-[url(https://i.ibb.co.com/0GrnVsL/heroImg2.png)]",
      title:"Deals That Don't Wait!",
      subText:"Limited-time offers from your favorite e-commerce platforms.",
      buttonText:"Grab Deals",
      buttonLink:"/brands"
    },

  ]

  const slideSettings = {
    dots: true,
    arrows:false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  };

  // const {coupons}=useContext(TransferLists)

  return (

    <section className="">
      <div className={`container text-white relative`}>
        <Slider {...slideSettings}>
          {
            slides.map((slide,index)=>(
              <div key={index} className={`w-full ${slide.img} bg-center bg-cover bg-no-repeat rounded-lg`}>
                <div className="sectionHeaderWidth m-auto text-center grid justify-items-center gap-4 py-16 md:py-24 z-10">
                  <h1 className="text-white">{slide.title}</h1>
                  <p className="text-[clamp(1rem,0.8628318584070797rem+0.7079646017699115vw,1.5rem)]">{slide.subText}</p>
                  <Link to={slide.buttonLink} className="heroButton1">{slide.buttonText}</Link>
                </div>
              </div>
            ))
          }
        </Slider>
        {/* <HeroSvg/> */}
      </div>
    </section>
  );
};

// Hero.propTypes = {

// };

export default Hero;
