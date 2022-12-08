import React from "react";

export default function Genius() {
  return (
    <>
      <div className="bg-green-light  pt-[235px] -mt-[241px] sm:pt-[131px] sm:-mt-[98px] lg:pt-[290px] lg:-mt-[160px]  ">
        <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto">
          <div className="grid grid-cols-12  gap-8 lg:gap-14  ">
            <div className="   col-span-12 lg:col-span-6  lg:hidden ">
              <h1 className="  text-base text-center lg:text-left sm:text-3xl 2xl:text-4xl f-f-li text-green mt-10 lg:mt-40 tracking-[1px] lg:tracking-[0.22em] ">
                OUR GENIUSES
              </h1>
              <h1 className=" text-center lg:text-left text-xl sm:text-5xl 2xl:text-7xl f-f-b black md:leading-[50px] 2xl:leading-[75px]  mt-8">
                A team of nutrition experts at your fingertips!
              </h1>
              <h2 className="  text-center lg:text-left f-f-r text-black text-tiny  2xl:text-base mt-7 leading-[23px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </h2>
              <div className="text-center">
                <button class="green-gradiant shadow-lg f-f-b text-sm md:text-base 2xl:text-lg text-white   w-[136px]  h-[49px] md:w-[182px]  md:h-[60px] 2xl:h-[79px]  2xl:w-[219px] mt-5 rounded-full  ">
                  Book Appointment
                </button>
              </div>
            </div>
            <div className="   col-span-12 lg:col-span-6  ">
              <img
                src="/images/Gunjan-Photo 1.png"
                alt=""
                className="w-full h-auto"
              />
            </div>
            <div className="   col-span-12 lg:col-span-6 hidden lg:block ">
              <h1 className="  text-3xl 2xl:text-4xl f-f-li text-green mt-10 lg:mt-40 tracking-[1px] lg:tracking-[0.22em] ">
                OUR GENIUSES
              </h1>
              <h1 className="  text-5xl 2xl:text-7xl f-f-b black leading-[50px] 2xl:leading-[75px]  mt-8">
                A team of nutrition experts at your fingertips!
              </h1>
              <h2 className=" f-f-r text-black text-sm 2xl:text-base mt-7 leading-[23px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </h2>
              <button class="green-gradiant shadow-lg f-f-b text-sm md:text-base 2xl:text-lg text-white   w-[136px]  h-[49px] md:w-[182px]  md:h-[60px] 2xl:h-[79px]  2xl:w-[219px] mt-5 rounded-full  ">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
