import React from "react";

import Welcomeinput from "./Welcomeinput";

import Informationslick from "../OurPlans/Informationslick";
import Link from "next/link";
import Steps from "../OurPlans/Steps";
import { testimonials } from "../../lib/APICommunications";

export default function CustomizeplanPersonalInformation({step, setStep, setPersonalInformation, personalInformation, testimonialsData}) {
  
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto mb-5 mt-10 md:my-20">
        {/* code testing */}
        {/* <Steps step={step} /> */}
        {/* code testing ended */}

        <div className="grid grid-cols-12  mt-10 md:my-10 2xl:my-20   bg-green-light rounded-[100px] ">
          <div className="   col-span-12  xl:col-span-6  ">
            <div className=" p-6  lg:p-7 2xl:p-[50px]">
              <h2 className=" text-green f-f-b text-center md:text-left text-xl  md:text-5xl xl:text-4xl 2xl:text-9xl  ">
                Welcome to VMeals!
              </h2>
              <h2 className=" text-dark f-f-li text-sm text-center md:text-left md:text-base 2xl:text-4xl ">
                Tell us about yourself...
              </h2>

              <Welcomeinput setStep={setStep} setPersonalInformation={setPersonalInformation} personalInformation={personalInformation} />
            </div>
          </div>
          <div className="   col-span-12 hidden md:block  xl:col-span-6  ">
            <div className=" relative ">
              <img
                src="/images/personalinformation.png"
                className="w-full h-[588px] md:h-[891px] lg:h-[713px]  xl:h-[680px]  2xl:h-[796px] rounded-[100px]  "
              />
              <div className=" 2xl:w-[518px] w-[356px] h-[319px] md:w-[441px] md:h-[321px] 2xl:h-[318px] personscrd p-6 md:p-8 left-[4%] md:left-[24%] lg:left-[30%] xl:left-[19%] bottom-[49px] md:bottom-[110px] xl:bottom-[49px] absolute">
                <Informationslick testimonialsData={testimonialsData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export async function getServerSideProps() {
  try {
    //console.log('header fetching')
    let testimonialData = await fetch(testimonials)
    let data = await testimonialData.json()
    return {
      props: { testimonialsData: { ...data } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { testimonialsData: {} }
    }
  }

}