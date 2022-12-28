import React from "react";
import Slider from "react-slick";
import { testimonials } from "../../lib/APICommunications";
import RTFMappingTestimonials from "../Common/RTFMappingTestimonials";

export default function Informationslick({ testimonialsData }) {
  // console.log("testimonialsData>>>>",testimonialsData)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img src="/images/arrow-right-left.png" />,
    prevArrow: <img src="/images/arrow-rightpersonal.png" />,
  };
  return (
    <div>
      <Slider {...settings} className="personalslick">
        {testimonialsData?.map(t => (
          <div className=" h-[305px] relative  " >
            <div className=" text-white f-f-li text-sm 2xl:text-tiny text-center  ">
              {" "}
              <div>
                 <RTFMappingTestimonials data={t.description} />

              </div>
            </div>
            <div className="absolute bottom-[33px]" >
            <h3 className=" f-f-b text-white text-base 2xl:text-xl mt-4   ">
              {t.Name}
            </h3>
            <h3 className=" f-f-it text-white text-sm 2xl:text-base  ">
              {t.designation}
            </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    //console.log('header fetching')
    let testimonialsData = await fetch(testimonials)
    let data = await testimonialsData.json()
    // console.log("------------------->", data)
    return {
      props: { testimonialsData: { ...data } }, // will be passed to the page component as props
    }
  } catch (error) {
    console.log("errro", error)
    return {
      props: { testimonialsData: {} }
    }
  }

}