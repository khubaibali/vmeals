import React from "react";
const BaseURL = process.env.NEXT_PUBLIC_BASE_URL
const ImageBaseURL = process.env.NEXT_PUBLIC_BASE_URL_IMAGE

import { vmealsOurGeniuses } from '../../../src/lib/APICommunications';
import RTFMapping from '../Common/RTFMapping.jsx'

export default function Genius({ ourGeniusData = [{}] }) {
  //console.log("ourGeniusData--->", ourGeniusData)
  return (
    <>
      <div className="bg-green-light  pt-[235px] -mt-[241px] sm:pt-[131px] sm:-mt-[98px] lg:pt-[290px] lg:-mt-[160px]  ">
        <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto">
          <div className="grid grid-cols-12  sm:gap-8 lg:gap-14  ">
            <div className="   col-span-12 xl:col-span-6  xl:hidden ">
              <h2 className="  text-base text-center lg:text-left sm:text-3xl 2xl:text-4xl f-f-li text-green mt-10 tracking-[0.22em] ">
                {/* OUR GENIUSES */}
                {ourGeniusData[0]?.VMealsOurGeniusesHeading}
              </h2>
              <h2 className=" text-center lg:text-left text-xl sm:text-5xl 2xl:text-7xl f-f-b black md:leading-[50px] 2xl:leading-[75px]  xl:mt-8">
                {/* A team of nutrition experts at your fingertips! */}
                {ourGeniusData[0]?.VMealsOurGeniusesTitle}
              </h2>
              {/* <h2 className="  text-center lg:text-left f-f-r text-black text-tiny  2xl:text-base mt-7 leading-[23px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </h2> */}
              <RTFMapping data={ourGeniusData[0]?.VMealsOurGeniusesDescription} />

              <div className="text-center">

                <button className="green-gradiant shadow-lg f-f-b text-sm md:text-base 2xl:text-lg text-white   w-[136px]  h-[49px] md:w-[182px]  md:h-[60px] 2xl:h-[79px]  2xl:w-[219px] mt-5 rounded-full  " href='https://wa.me/+971562922081' target={"_blank"}>
                  {/* Book Appointment */}
                  {ourGeniusData[0]?.VMealsOurGeniusesButtonBookAppointment}

                </button>

              </div>
            </div>
            <div className="   col-span-12 xl:col-span-6 relative ">
              <img
                src="/images/Gunjan-Photo 1.png"
                alt=""
                className="w-full h-auto xl:absolute xl:bottom-0 "
              />
            </div>
            <div className="   col-span-12 lg:col-span-6 hidden xl:block ">
              <h2 className="  text-3xl 2xl:text-4xl f-f-li text-green mt-10 lg:mt-0  tracking-[0.22em] ">
                {/* OUR GENIUSES */}
                {ourGeniusData[0]?.VMealsOurGeniusesHeading}
              </h2>
              <h2 className="  text-5xl 2xl:text-7xl f-f-b black leading-[50px] 2xl:leading-[75px]  mt-8">
                {/* A team of nutrition experts at your fingertips! */}
                {ourGeniusData[0]?.VMealsOurGeniusesTitle}
              </h2>
              {/* <h2 className="  text-center lg:text-left f-f-r text-black text-tiny  2xl:text-base mt-7 leading-[23px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </h2> */}
              <RTFMapping data={ourGeniusData[0]?.VMealsOurGeniusesDescription} />
              <button className="green-gradiant shadow-lg f-f-b text-sm md:text-base 2xl:text-lg text-white   w-[136px]  h-[49px] md:w-[182px]  md:h-[60px] 2xl:h-[79px]  2xl:w-[219px] mt-5 rounded-full mb-10 ">
                <a href='https://wa.me/+971562922081' target={"_blank"}>
                  {/* Book Appointment */}
                  {ourGeniusData[0]?.VMealsOurGeniusesButtonBookAppointment}

                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export async function getServerSideProps() {
  try {

    let ourGeniusData = await fetch(vmealsOurGeniuses)
    let data = await ourGeniusData.json()
    //console.log("slider bar ->>", data)

    return {
      props: { ourGeniusData: { ...data?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { ourGeniusData: [] }
    }
  }

}
