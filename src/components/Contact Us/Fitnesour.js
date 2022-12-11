import React from "react";
import Contactusform from "../Common/Contactusform";

export default function Fitnesour() {
  return (
    <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto mt-10 sm:my-20">
      <div className="grid grid-cols-12  gap-8 lg:gap-14 mt-10 md:mt-10 lg:my-24  ">
        <div className="   col-span-12 lg:col-span-5 xl:col-span-5  ">
          <h1 class="  text-base  sm:text-3xl 2xl:text-4xl f-f-li text-green text-center xl:text-left tracking-[1px] lg:tracking-[0.22em] ">
            Need Assistance?
          </h1>
          {/* code started */}
          <div className="w-11/12 ml-auto mr-auto md:w-12/12 mt-5 md:mt-10  lg:mt-20  ">
            <ul className="inline-flex">
              <li>
                {" "}
                <img
                  src="/images/location.png"
                  className=" width-[34px] md:width-[40px] 2xl:width-[50px] h-[34px] md:h-auto "
                />{" "}
              </li>
              <li className="ml-3 md:ml-7 mt-1 md:mt-3">
                {" "}
                <h2 className="f-f-b text-black-dark  text-sm md:text-tiny 2xl:text-lg   ">
                  R05, Oxford Tower, Business Bay, Dubai, U.A.E
                </h2>{" "}
              </li>
            </ul>
            <div>
              <ul className="inline-flex mt-8 md:mt-14 ">
                <li>
                  {" "}
                  <img
                    src="/images/smartphone.png"
                    className=" width-[34px] md:width-[40px] 2xl:width-[50px] h-[34px] md:h-auto "
                  />{" "}
                </li>
                <li className="ml-3 md:ml-7 mt-1 md:mt-3">
                  {" "}
                  <h2 className="f-f-b text-black-dark  text-sm md:text-tiny 2xl:text-lg   ">
                    +971 56 292 2081
                  </h2>{" "}
                </li>
              </ul>
            </div>
            <div>
              <ul className="inline-flex mt-8 md:mt-14 ">
                <li>
                  {" "}
                  <img
                    src="/images/email.png"
                    className=" width-[34px] md:width-[40px] 2xl:width-[50px] h-[34px] md:h-auto "
                  />{" "}
                </li>
                <li className="ml-3 md:ml-7 mt-1 md:mt-3">
                  {" "}
                  <h2 className="f-f-b text-black-dark  text-sm md:text-tiny 2xl:text-lg   ">
                    info@vmeals.ae
                  </h2>{" "}
                </li>
              </ul>
            </div>
            <div>
              <ul className="inline-flex mt-8 md:mt-14 ">
                <li>
                  {" "}
                  <img
                    src="/images/clock.png"
                    className=" width-[34px] md:width-[40px] 2xl:width-[50px] h-[34px] md:h-auto "
                  />{" "}
                </li>
                <li className="ml-3 md:ml-7 mt-1 md:mt-3">
                  {" "}
                  <h2 className="f-f-b text-black-dark  text-sm md:text-tiny 2xl:text-lg   ">
                    Sunday - Friday | 10:00am - 10:00pm
                  </h2>{" "}
                </li>
              </ul>
            </div>
          </div>
          {/* code ended */}

          <h1 className="f-f-b text-black-dark text-xl md:text-4xl mt-10 2xl:mt-20  text-center md:text-left">
            Connect with us!
          </h1>
          <div className="text-center md:text-left">
            <button class=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full  w-[152px] h-[55px] md:w-[219px] md:h-[79px]  mt-5 2xl:mt-8">
              <ul className="inline-flex">
                <li>
                  <img
                    src="/images/contactwhatsapp.png"
                    className="w-[30px] sm:w-[40px]   mt-1 2xl:mt-2   "
                  />
                </li>
                <li className="mt-2 md:mt-3 ml-2 md:ml-4">WhatsApp</li>
              </ul>
            </button>
            <button class=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full ml-6 md:ml-8  w-[152px] h-[55px] md:w-[219px] md:h-[79px]  mt-5 2xl:mt-8">
              <ul className="inline-flex">
                <li>
                  <img
                    src="/images/chat.png"
                    className="  w-[30px] sm:w-[40px]   mt-1 2xl:mt-2   "
                  />
                </li>
                <li className="mt-2 md:mt-3 ml-2 md:ml-4">WhatsApp</li>
              </ul>
            </button>
          </div>
        </div>
        <div className="   col-span-12 lg:col-span-1 xl:col-span-1  "></div>
        <div className="   col-span-12 lg:col-span-6 xl:col-span-6  ">
          <div className=" bg-white-light p-5 xl:p-7 2xl:p-10 rounded-lg ">
            <h2 className=" text-green f-f-b text-center md:text-left text-xl  md:text-3xl 2xl:text-5xl ">
              Let’s have a chat
            </h2>
            <Contactusform />
          </div>
        </div>
      </div>
    </div>
  );
}
