import React from "react";

import Slider from "react-slick";
import { vmealsSampleMenu } from "../../lib/APICommunications";

export default function Simplemenu({ sampleMenu }) {
  //console.log("sample menu in menu", sampleMenu)
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto my-5 md:my-10 lg:my-20">
        <h3 className="  text-base  sm:text-2xl  2xl:text-4xl f-f-li  captalize text-green tracking-[1px] lg:tracking-[0.22em]  text-center xl:text-left  leading-[56px] uppercase ">
          SAMPLE MENU
        </h3>
        <Slider {...settings} className="mt-6" >
          {/* one start */}
          {sampleMenu?.map(menu => (
            <div className="  " >
              <div className="relative">
                <img src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${menu?.SampleMenuItemImage?.url}` || "/images/breakfast.png"} className=" w-[93%]  rounded-[20px] ml-auto mr-auto 2xl:mr-0  " />
                <button className=" text-sm sm:text-tiny 2xl:text-tiny f-f-b text-white sub rounded-full w-[145px] h-[41px]  absolute top-[20px] left-[52px]  ">
                  {menu?.MealType}
                </button>
              </div>
              <h3 className="text-black f-f-b text-sm 2xl:text-base text-center mt-3 ">
                {menu?.ItemName}
              </h3>
            </div>
          ))}
          {/* one end */}
        </Slider>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
   
    let sampleMenu = await fetch(vmealsSampleMenu)
    let data = await sampleMenu.json()
    //console.log("slider bar ->>",data)
   
    return {
      props: { sampleMenu: { ...data?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { sampleMenu: [] }
    }
  }

}