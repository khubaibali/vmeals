import React from "react";

import Welcomeinput from "./Welcomeinput";

import Informationslick from "../OurPlans/Informationslick";
import Link from "next/link";
import Steps from "../OurPlans/Steps";
import { testimonials } from "../../lib/APICommunications";
import Dietryinput from './Dietryinputs'

export default function CustomizeplanPersonalInformation({}) {
  
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto mb-5 mt-10 md:my-20">
        {/* code testing */}
        {/* <Steps step={step} /> */}
        {/* code testing ended */}

        <div className=" bg-green-light rounded-[100px] p-6  lg:p-7 2xl:p-[50px]" >
        <h2 className=" text-green f-f-b text-center  text-xl  md:text-5xl xl:text-4xl 2xl:text-9xl  ">
              Consultation Form
              </h2>
       
        <div className="grid grid-cols-12  gap-8 2xl:gap-20  ">
          <div className="   col-span-12  xl:col-span-6  ">
            <div className=" ">
        
            <h2 class=" text-base sm:text-2xl 2xl:text-4xl f-f-li uppercase text-green tracking-[0.22em] text-center lg:text-left  mt-4 2xl:mt-8 ">Client information</h2>

              <Welcomeinput  />
            </div>
          </div>
          <div className="   col-span-12   xl:col-span-6  ">
          <h2 class=" text-base sm:text-2xl 2xl:text-4xl f-f-li uppercase text-green tracking-[0.22em] text-center lg:text-left  mt-4 2xl:mt-8 ">DIETARY information</h2>
              <Dietryinput/>
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