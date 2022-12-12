import React from "react";
import Slider from "react-slick";
const BaseURL = process.env.NEXT_PUBLIC_BASE_URL

export default function Slick({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img alt=""  src="/images/arrow-left (1).png" />,
    prevArrow: <img alt=""  src="/images/arrow-right.png" />,
    // beforeChange: (current, next) => this.setState({ activeSlide: next }),
    // afterChange: current => this.setState({ activeSlide2: current })
  };
  return (
    <div>
      <Slider {...settings} className="outslick-setting">
        {
          data?.map((item) => (
            <div>
              <img
                src={`${BaseURL}${item?.VMealsOurPartnersImageUpload?.url}` }
                className="w-[88%] md:w-[74%] xl:w-[70%] 2xl:w-[80%] h-auto 2xl:[130px] ml-auto mr-auto pt-[17%] lg:pt-[25%] "
              />
            </div>
          ))
        }

      </Slider>
    </div>
  );
}
