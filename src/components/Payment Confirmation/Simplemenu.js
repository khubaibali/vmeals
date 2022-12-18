import React from "react";
import Slider from "react-slick";

export default function Simplemenu() {
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
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto my-20">
        <h2 className="  text-base  sm:text-2xl  2xl:text-4xl f-f-li  captalize text-green tracking-[1px] lg:tracking-[0.22em]  text-center xl:text-left  leading-[56px] uppercase ">
          SAMPLE MENU
        </h2>
        <Slider {...settings}>
          {/* one start */}
          <div>
            <div className="relative">
              <img src="/images/breakfast.png" className=" w-full h-[300px] " />
              <button className=" text-sm sm:text-tiny 2xl:text-tiny f-f-b text-white sub rounded-full w-[145px] h-[41px]  absolute top-[20px] left-[20px]  ">
                Breakfast
              </button>
            </div>
            <h2 className="text-black f-f-b text-sm 2xl:text-base text-center">
              Stuffed Cheesy Omelette with Mushrooms
            </h2>
          </div>
          {/* one end */}
          {/* one start */}
          <div>
            <div className="relative">
              <img src="/images/luch.png" className=" w-full h-[300px] " />
              <button className=" text-sm sm:text-tiny 2xl:text-tiny f-f-b text-white sub rounded-full w-[145px] h-[41px]  absolute top-[20px] left-[20px]  ">
                Lunch
              </button>
            </div>
            <h2 className="text-black f-f-b text-sm 2xl:text-base text-center">
              Stuffed Cheesy Omelette with Mushrooms
            </h2>
          </div>
          {/* one end */}
          {/* one start */}
          <div>
            <div className="relative">
              <img src="/images/dinner.png" className=" w-full h-[300px] " />
              <button className=" text-sm sm:text-tiny 2xl:text-tiny f-f-b text-white sub rounded-full w-[145px] h-[41px]  absolute top-[20px] left-[20px]  ">
                Dinner
              </button>
            </div>
            <h2 className="text-black f-f-b text-sm 2xl:text-base text-center">
              Stuffed Cheesy Omelette with Mushrooms
            </h2>
          </div>
          {/* one end */}
          {/* one start */}
          <div>
            <div className="relative">
              <img src="/images/snack.png" className=" w-full h-[300px] " />
              <button className=" text-sm sm:text-tiny 2xl:text-tiny f-f-b text-white sub rounded-full w-[145px] h-[41px]  absolute top-[20px] left-[20px]  ">
                Snack
              </button>
            </div>
            <h2 className="text-black f-f-b text-sm 2xl:text-base text-center">
              Chocolate Protein Balls
            </h2>
          </div>
          {/* one end */}
          {/* one start */}
          <div>
            <div className="relative">
              <img src="/images/drink.png" className=" w-full h-[300px] " />
              <button className=" text-sm sm:text-tiny 2xl:text-tiny f-f-b text-white sub rounded-full w-[145px] h-[41px]  absolute top-[20px] left-[20px]  ">
                Drink
              </button>
            </div>
            <h2 className="text-black f-f-b text-sm 2xl:text-base text-center">
              Orange, Lemon & Ginger Detox Juice
            </h2>
          </div>
          {/* one end */}

          {/* one start */}
          {/* <div  >
            <div className='relative'>
        <img src={breakfast} className=" w-full h-[300px] "  />
        <button className=" text-sm sm:text-tiny 2xl:text-tiny f-f-b text-white sub rounded-full w-[145px] h-[41px]  absolute top-[20px] left-[20px]  ">Breakfast</button>
        </div>
        <h2 className='text-black f-f-b text-sm 2xl:text-base text-center' >Stuffed Cheesy Omelette with Mushrooms</h2>
        </div> */}
          {/* one end */}
        </Slider>
      </div>
    </div>
  );
}
