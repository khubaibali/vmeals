import React from "react";
import Ourslick from "./ourslick";
import Registerform from "../Common/Registerform";

export default function Fitnesour() {
  return (
    <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto my-10 sm:my-20">
      <div className="grid grid-cols-12  gap-8 lg:gap-14  ">
        <div className="   col-span-12 lg:col-span-5 xl:col-span-5  ">
          <h1 class="  text-base  sm:text-3xl 2xl:text-4xl f-f-li text-green text-center xl:text-left tracking-[1px] lg:tracking-[0.22em] ">
            OUR PARTNERS
          </h1>
          <div className=" rounded-2xl  mt-5 md:mt-20  border border-green fitnessbg ">
            <div className="w-[100%] h-[221px] md:h-[331px] 2xl:h-[407px] bg-white rounded-2xl">
              <Ourslick />
            </div>
            <div className="  p-5 px-8 sm:p-6 2xl:p-12  ">
              <p className="   f-f-it text-white  text-xs sm:text-tiny  2xl:text-base leading-[12px] sm:leading-[23px] text-center  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum orci arcu, dapibus et finibus sit amet, efficitur et
                nunc. Aenean et pharetra orci. Aenean eget sem eget ex accumsan
                aliquet. Etiam at velit mattis nibh cursus ultrices ut non
                ipsum. Etiam volutpat risus vitae odio egestas, suscipit egestas
                lacus pharetra.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="   col-span-12 lg:col-span-1 xl:col-span-1  "></div>
        <div className="   col-span-12 lg:col-span-6 xl:col-span-6  ">
          <div className=" bg-white-light p-5 xl:p-7 2xl:p-10 rounded-lg ">
            <h2 className=" text-green f-f-b text-center md:text-left text-xl  md:text-3xl 2xl:text-5xl ">
              Register your Company
            </h2>
            <Registerform />
          </div>
        </div>
      </div>
    </div>
  );
}
