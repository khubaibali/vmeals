import React from "react";
import RTFMaping from '../Common/RTFMapping.jsx'
export default function journy({ourCompanyData}) {
  return (
    <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto my-10 sm:my-20">
      <div className="grid grid-cols-12 gap-4 md:gap-8 lg:gap-14  ">
        <div className="   col-span-12 xl:col-span-6  ">
          <h2 className="  text-base  sm:text-3xl 2xl:text-4xl f-f-li   lg:mt-10 text-green text-center lg:text-left tracking-[0.22em] ">
            {/* ABOUT OUR COMPANY */}
            {ourCompanyData?.[0]?.VMealsAboutUsTitle}
          </h2>
          {/* <h2 className=" text-center xl:text-left text-xl sm:text-5xl 2xl:text-7xl f-f-b black md:leading-[50px] 2xl:leading-[75px] mt-2 md:mt-8">
            Start your fitness journey with us!
          </h2>
          <h2 className="   f-f-r text-black text-tiny  2xl:text-base mt-2 md:mt-7 leading-[23px] text-center xl:text-left ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            tellus cras adipiscing enim eu turpis egestas. Semper eget duis at
            tellus at urna condimentum mattis. Maecenas accumsan lacus vel
            facilisis. Elementum nibh tellus molestie nunc non blandit.
            Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in. Venenatis tellus in metus vulputate eu scelerisque felis. Ut
            pharetra sit amet aliquam id diam maecenas. Metus vulputate eu
            scelerisque felis imperdiet proin fermentum leo vel. Eu non diam
            phasellus vestibulum lorem sed risus ultricies tristique. Quis
            commodo odio aenean sed adipiscing diam donec adipiscing. Placerat
            vestibulum lectus mauris ultrices eros in cursus turpis massa.
            Scelerisque felis imperdiet proin fermentum leo vel orci porta non.
            Tellus in hac habitasse platea dictumst vestibulum rhoncus est
            pellentesque.
          </h2> */}
          <RTFMaping data={ourCompanyData?.[0]?.VMealsAboutUsDescription}/>
        </div>
        <div className="   col-span-12 xl:col-span-6  ">
          <img
            src="/images/about our company-03.png"
            alt=""
            className="w-full h-auto xl:mt-20 2xl:mt-0 "
          />
        </div>
      </div>
    </div>
  );
}
