import React from "react";
const BaseURL = process.env.NEXT_PUBLIC_BASE_URL
const ImageBaseURL = process.env.NEXT_PUBLIC_BASE_URL_IMAGE

import { vmealsGetStarted } from '../../../src/lib/APICommunications';
export default function Fitness({ homeFitnessData = [{}] }) {

  return (
    <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto  my-10 md:my-20">
      <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-14  ">
        <div className="   col-span-12 lg:col-span-6  ">
          <h2 className="  text-base text-center lg:text-left sm:text-3xl 2xl:text-4xl f-f-li uppercase  md:mt-10 text-green tracking-[1px] lg:tracking-[0.22em] ">
            {/* GET STARTED */}
            {homeFitnessData[0]?.VMealsGetStartedHeading}
          </h2>
          <h2 className=" text-center lg:text-left text-xl sm:text-5xl 2xl:text-7xl f-f-b black md:leading-[50px] 2xl:leading-[75px] mt-4  md:mt-8">
            {/* Start your fitness journey with us! */}
            {homeFitnessData[0]?.VMealsGetStartedTitle}
          </h2>
          <img
            src="/images/start your finest journey with us-02.png"
            alt=""
            className="w-full h-auto xl:h-[500px] 2xl:h-[707px] lg:hidden "
          />

          {
            homeFitnessData[0]?.VMealsGetStartedList.map((dt,ind) => (
              <ul className="inline-flex">
                <li>
                  <h2 className="f-f-b text-green text-6xl sm:text-8xl 2xl:text-10xl mt-16 2xl:mt-8">
                  0{ind+1}.
                  </h2>
                </li>
                <li className="ml-4">
                  <h2 className="  mt-4 md:mt-0 text-base sm:text-xl xl:text-2xl leading-[31px] 2xl:leading-[46px] 2xl:text-4xl text-black  sm:pt-10 f-f-b  ">
                    {/* Choose your plan */}
                    {dt?.VMealsGetStartedItemTitle}
                  </h2>
                  <h2 className="   f-f-r text-black text-tiny  2xl:text-base mt-2 md:mt-5 leading-[23px] ">
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. */}
                    {dt?.VMealsGetStartedItemDescription}
                  </h2>
                </li>
              </ul>
            ))
          }


        </div>
        <div className="   col-span-12 lg:col-span-6  ">
          <img
            alt=""
            // src="/images/start your finest journey with us-02.png"
            src={`${ImageBaseURL}${homeFitnessData[0]?.VMealsGetStartedImage?.url}`}
            className="w-full h-auto xl:h-[500px] 2xl:h-[707px] mt-96 hidden lg:block "
          />
        </div>
      </div>
    </div>
  );
}


export async function getServerSideProps() {
  try {

    let homeFitnessData = await fetch(vmealsGetStarted)
    let data = await homeFitnessData.json()
    //console.log("slider bar ->>", data)

    return {
      props: { homeFitnessData: { ...data?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { homeFitnessData: [] }
    }
  }

}
