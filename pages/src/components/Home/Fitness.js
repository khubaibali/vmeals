import React from "react";

export default function Fitness() {
  return (
    <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto  my-10 md:my-20">
      <div className="grid grid-cols-12  gap-8 lg:gap-14  ">
        <div className="   col-span-12 lg:col-span-6  ">
          <h1 className="  text-base text-center lg:text-left sm:text-3xl 2xl:text-4xl f-f-li  md:mt-10 text-green tracking-[1px] lg:tracking-[0.22em] ">
            GET STARTED
          </h1>
          <h1 className=" text-center lg:text-left text-xl sm:text-5xl 2xl:text-7xl f-f-b black md:leading-[50px] 2xl:leading-[75px] mt-4  md:mt-8">
            Start your fitness journey with us!
          </h1>
          <img
            src="/images/start your finest journey with us-02.png"
            alt=""
            className="w-full h-auto xl:h-[500px] 2xl:h-[707px] lg:hidden "
          />
          <ul className="inline-flex">
            <li>
              <h1 className="f-f-b text-green text-6xl sm:text-8xl 2xl:text-10xl mt-16 2xl:mt-16">
                01.
              </h1>
            </li>
            <li className="ml-4">
              <h2 className="  mt-4 md:mt-0 text-base sm:text-xl xl:text-2xl leading-[31px] 2xl:leading-[46px] 2xl:text-4xl text-black  sm:pt-10 f-f-b  ">
                Choose your plan
              </h2>
              <h2 className="   f-f-r text-black text-tiny  2xl:text-base mt-2 md:mt-5 leading-[23px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
            </li>
          </ul>
          <ul className="inline-flex  ">
            <li>
              <h1 className="f-f-b text-green text-6xl sm:text-8xl 2xl:text-10xl mt-16 2xl:mt-16">
                02.
              </h1>
            </li>
            <li className="ml-4">
              <h2 className="  mt-4 md:mt-0 text-base sm:text-xl xl:text-2xl leading-[31px] 2xl:leading-[46px] 2xl:text-4xl text-black  sm:pt-10 f-f-b  ">
                Customise your plan
              </h2>
              <h2 className="   f-f-r text-black text-tiny  2xl:text-base mt-2 md:mt-5 leading-[23px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
            </li>
          </ul>
          <ul className="inline-flex  ">
            <li>
              <h1 className="f-f-b text-green text-6xl sm:text-8xl 2xl:text-10xl mt-16 2xl:mt-16">
                03.
              </h1>
            </li>
            <li className="ml-4">
              <h2 className="  mt-4 md:mt-0 text-base sm:text-xl xl:text-2xl leading-[31px] 2xl:leading-[46px] 2xl:text-4xl text-black  sm:pt-10 f-f-b  ">
                Enter your information
              </h2>
              <h2 className="   f-f-r text-black text-tiny  2xl:text-base mt-2 md:mt-5 leading-[23px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
            </li>
          </ul>
          <ul className="inline-flex  ">
            <li>
              <h1 className="f-f-b text-green text-6xl sm:text-8xl 2xl:text-10xl mt-16 2xl:mt-16">
                04.
              </h1>
            </li>
            <li className="ml-4">
              <h2 className="  mt-4 md:mt-0 text-base sm:text-xl xl:text-2xl leading-[31px] 2xl:leading-[46px] 2xl:text-4xl text-black  sm:pt-10 f-f-b  ">
                Place your order
              </h2>
              <h2 className="   f-f-r text-black text-tiny  2xl:text-base mt-2 md:mt-5 leading-[23px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
            </li>
          </ul>
          <ul className="inline-flex  ">
            <li>
              <h1 className="f-f-b text-green text-6xl sm:text-8xl 2xl:text-10xl mt-16 2xl:mt-16">
                05.
              </h1>
            </li>
            <li className="ml-4">
              <h2 className="  mt-4 md:mt-0 text-base sm:text-xl xl:text-2xl leading-[31px] 2xl:leading-[46px] 2xl:text-4xl text-black  sm:pt-10 f-f-b  ">
                Enjoy your meals!
              </h2>
              <h2 className="   f-f-r text-black text-tiny  2xl:text-base mt-2 md:mt-5 leading-[23px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
            </li>
          </ul>
        </div>
        <div className="   col-span-12 lg:col-span-6  ">
          <img
            alt=""
            src="/images/start your finest journey with us-02.png"
            className="w-full h-auto xl:h-[500px] 2xl:h-[707px] mt-96 hidden lg:block "
          />
        </div>
      </div>
    </div>
  );
}
