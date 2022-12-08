import React from "react";

export default function Hero() {
  return (
    <>
      <h1 className="  text-xl md:text-4xl 2xl:text-8xl text-white f-f-b text-center pt-[136px] lg:pt-[233px] xl:pt-[272px] 2xl:pt-[330px] ">
        Our Blog
      </h1>
      <div className="text-center mt-5 2xl:mt-16">
        <ul className="inline-flex">
          <li>
            <img
              src="/images/fi-sr-home.png"
              className="w-[22px]  2xl:w-[35px] h-auto   2xl:-mt-2"
            />
          </li>
          <li className=" ml-5 2xl:ml-10">
            <svg
              className=" w-22px 2xl:w-[14px] h-[24px] 2xl:h-[26px] "
              viewBox="0 0 14 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2501 8.87501L4.60673 1.23168C4.13774 0.76291 3.50174 0.499645 2.83865 0.499802C2.17555 0.499958 1.53967 0.763522 1.0709 1.23251C0.602135 1.7015 0.338871 2.3375 0.339027 3.0006C0.339184 3.6637 0.602749 4.29958 1.07174 4.76835L8.71506 12.41C8.79266 12.4874 8.85424 12.5794 8.89625 12.6806C8.93826 12.7819 8.95988 12.8904 8.95988 13C8.95988 13.1096 8.93826 13.2182 8.89625 13.3194C8.85424 13.4206 8.79266 13.5126 8.71506 13.59L1.07174 21.2317C0.602749 21.7004 0.339184 22.3363 0.339027 22.9994C0.338871 23.6625 0.602135 24.2985 1.0709 24.7675C1.53967 25.2365 2.17555 25.5001 2.83865 25.5002C3.50174 25.5004 4.13774 25.2371 4.60673 24.7683L12.2501 17.125C13.3421 16.03 13.9554 14.5465 13.9554 13C13.9554 11.4535 13.3421 9.97007 12.2501 8.87501Z"
                fill="white"
              />
            </svg>
          </li>
          <li className=" ml-5 2xl:ml-10">
            <h1 className=" text-md md:text-lg 2xl:text-2xl text-white f-f-b text-center  ">
              Our Blog
            </h1>
          </li>
        </ul>
      </div>
      <button className="absolute right-5 top-[44%] cursor-pointer">
        <img
          src="/images/WhatsApp-Floating-Button.png"
          className=" hidden md:block w-[40px] lg:w-[48px] xl:w-[68px] 2xl:w-[90px] h-auto   "
        />
      </button>
      <button className="absolute right-5 bottom-[13%] cursor-pointer">
        <img
          src="/images/Scroll-Up-Floating-Button.png"
          className=" hidden md:block w-[40px] lg:w-[48px] xl:w-[68px] 2xl:w-[90px] h-auto   "
        />
      </button>
    </>
  );
}
