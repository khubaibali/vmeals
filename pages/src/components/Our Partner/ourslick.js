import React from "react";
import Slider from "react-slick";

export default function Slick() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img src="/images/arrow-left-slick.png" />,
    prevArrow: <img src="/images/arrow-right-slick.png" />,
  };
  return (
    <div>
      <Slider {...settings} className="outslick-setting">
        <div>
          <img
            src="/images/Fitness First Logo.png"
            className="w-[88%] md:w-[74%] xl:w-[70%] 2xl:w-[80%] h-auto 2xl:[130px] ml-auto mr-auto pt-[17%] lg:pt-[25%] "
          />
        </div>
        <div>
          <img
            src="/images/Fitness First Logo.png"
            className="w-[88%] md:w-[74%] xl:w-[70%] 2xl:w-[80%] h-auto 2xl:[130px] ml-auto mr-auto pt-[17%] lg:pt-[25%] "
          />
        </div>
        <div>
          <img
            src="/images/Fitness First Logo.png"
            className="w-[88%] md:w-[74%] xl:w-[70%] 2xl:w-[80%] h-auto 2xl:[130px] ml-auto mr-auto pt-[17%] lg:pt-[25%] "
          />
        </div>
      </Slider>
    </div>
  );
}
