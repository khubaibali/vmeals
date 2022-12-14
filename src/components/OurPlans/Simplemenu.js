import React from "react";

import Slider from "react-slick";
import { vmealsSampleMenu } from "../../lib/APICommunications";

export default function Simplemenu({ sampleMenu }) {
  console.log("sample menu in menu", sampleMenu)
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
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
        breakpoint: 480,
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
        <h1 class="  text-base  sm:text-2xl  2xl:text-4xl f-f-li  captalize text-green tracking-[1px] lg:tracking-[0.22em]  text-center xl:text-left  leading-[56px] uppercase ">
          SAMPLE MENU
        </h1>
        <Slider {...settings}>
          {/* one start */}
          {sampleMenu?.map(menu => (
            <div>
              <div className="relative">
                <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${menu?.SampleMenuItemImage?.url}` || "/images/breakfast.png"} className=" w-full h-[300px] " />
                <button class=" text-sm sm:text-tiny 2xl:text-tiny f-f-b text-white sub rounded-full w-[145px] h-[41px]  absolute top-[20px] left-[20px]  ">
                  {menu?.MealType}
                </button>
              </div>
              <h1 className="text-black f-f-b text-sm 2xl:text-base text-center">
                {menu?.ItemName}
              </h1>
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
    console.log("slider bar ->>",data)
   
    return {
      props: { sampleMenu: { ...data?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { sampleMenu: [] }
    }
  }

}