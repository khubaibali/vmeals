import React from "react";

import Welcomeinput from "./Welcomeinput";

import Informationslick from "./Informationslick";
import Link from "next/link";

export default function Customizeplan() {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto my-20">
        {/* code testing */}
        <div className="no-scrollbar overflow-x-auto">
          <div className=" planscrol ">
            <div className="grid grid-cols-10  lg:gap-4  border-2 border-green   rounded-full bg-white shadow-lg ">
              <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                <div className="relative">
                  <Link href="/ourplans">
                    <button class="  text-smtwo md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-black  rounded-full    px-[32px] md:px-[25px] addwidth pb-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:py-[20px]">
                      <ul className="inline-flex">
                        <li>
                          <img
                            src="/images/choose-plan-inactive-diet.png"
                            className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                          />
                        </li>
                        <li className="mt-2 md:mt-3 ml-2 lg:ml-4">
                          Select Plan
                        </li>
                      </ul>
                    </button>
                  </Link>
                  <img
                    src="/images/arrowplans.png"
                    className="  w-[36px] xl:w-[60px] absolute top-[50%] right-[31px] md:right-[21px]  lg:right-6 "
                  />
                </div>
              </div>
              {/*  */}
              <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                <div className="relative">
                  <Link href="/classicdiet">
                    <button class="  text-smtwo md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-black  rounded-full    px-[32px] md:px-[25px] addwidth pb-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:py-[20px]">
                      <ul className="inline-flex">
                        <li>
                          <img
                            src="/images/customize-inactive.png"
                            className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                          />
                        </li>
                        <li className="mt-2 md:mt-3 ml-2 lg:ml-4">
                          Customise Plan
                        </li>
                      </ul>
                    </button>
                  </Link>
                  <img
                    src="/images/arrowplans.png"
                    className="  w-[36px] xl:w-[60px] absolute top-[50%] right-[31px] md:right-[21px]  lg:right-6 "
                  />
                </div>
              </div>
              <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                <div className="relative">
                <Link href="/personalInformation" >
                  <button class=" text-smtwo md:text-xstwo lg:text-xsone sub xl:text-smtwo 2xl:text-base f-f-r text-white  rounded-full    px-[32px] md:px-[13px] lg:px-[25px] xl:px-[17px] addwidth pb-[3px] lg:py-[6px] 2xl:px-[29px] 2xl:py-[20px]">
                    <ul className="inline-flex">
                      <li>
                        <img
                          src="/images/Sign-Up-Login-active 1.png"
                          className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                        />
                      </li>
                      <li className="mt-2 md:mt-3 ml-2 lg:ml-4">
                        Personal Information
                      </li>
                    </ul>
                  </button>
                  </Link>
                  <img
                    src="/images/arrowplans.png"
                    className="  w-[36px] xl:w-[60px] absolute top-[50%] right-0  lg:-right-4 2xl:-right-6 "
                  />
                </div>
              </div>
              <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">

                <div className="relative">
                  <Link href="/deliveryInformation">
                  <button class=" text-smtwo md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-black  rounded-full    px-[32px] md:px-[25px] addwidth pb-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:py-[20px]">
                    <ul className="inline-flex">
                      <li>
                        <img
                          src="/images/delivery-icon-inactive.png"
                          className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                        />
                      </li>
                      <li className="mt-2 md:mt-3 ml-2 lg:ml-4">
                        Delivery Information
                      </li>
                    </ul>
                  </button>
                  </Link>
                  <img
                    src="/images/arrowplans.png"
                    className="  w-[36px] xl:w-[60px] absolute top-[50%] right-0  lg:-right-4 2xl:-right-6 "
                  />
                </div>
              </div>
              <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
              <Link href="/ordersummary" >
                <button class=" text-smtwo md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-black  rounded-full    px-[32px] md:px-[25px] addwidth pb-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:py-[20px]">
                  <ul className="inline-flex">
                    <li>
                      <img
                        src="/images/summary-inactive.png"
                        className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                      />
                    </li>
                    <li className="mt-2 md:mt-3 ml-2 lg:ml-4">Order Summary</li>
                  </ul>
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* code testing ended */}

        <div className="grid grid-cols-12 gap-8 my-10 2xl:my-20   bg-green-light rounded-[100px] ">
          <div className="   col-span-12  xl:col-span-6  ">
            <div className=" p-6 md:p-16 xl:p-7 2xl:p-[50px]">
              <h2 className=" text-green f-f-b text-center md:text-left text-xl  md:text-5xl xl:text-4xl 2xl:text-9xl  ">
                Welcome to VMeals!
              </h2>
              <h1 className=" text-dark f-f-li text-sm text-center md:text-left md:text-base 2xl:text-4xl ">
                Tell us about yourself...
              </h1>

              <Welcomeinput />
            </div>
          </div>
          <div className="   col-span-12  xl:col-span-6  ">
            <div className=" relative ">
              <img
                src="/images/personalinformation.png"
                className="w-full h-[588px] md:h-[891px] xl:h-[680px]  2xl:h-[796px] rounded-[100px]  "
              />
              <div className=" 2xl:w-[518px] w-[356px] h-[319px] md:w-[441px] md:h-[272px] 2xl:h-[318px] personscrd p-6 md:p-8 left-[4%] md:left-[19%] lg:left-[32%] xl:left-[19%] bottom-[49px] md:bottom-[110px] xl:bottom-[49px] absolute">
                <Informationslick />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
