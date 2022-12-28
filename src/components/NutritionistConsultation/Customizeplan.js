import React, { useState } from "react";

import Welcomeinput from "./Welcomeinput";

import Informationslick from "../OurPlans/Informationslick";
import Link from "next/link";
import Steps from "../OurPlans/Steps";
import { testimonials } from "../../lib/APICommunications";
import Dietryinput from './Dietryinputs'

export default function CustomizeplanPersonalInformation({}) {
  
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [mobileNumber, setMobileNumber] = useState(null)
  const [mobileNumberCode, setMobileNumberCode] = useState(null)
  const [dob, setDOB] = useState(null)
  const [nationality, setNationality] = useState(null)
  const [gender, setGender] = useState(null)
  const [height, setHeight] = useState(null)
  const [currentWeight, setCurrentWeight] = useState(null)
  const [desiredWeight, setDesiredWeight] = useState(null)
  const [dietaryRestrictions, setDietaryRestrictions] = useState(null)
  const [allergies, setAllergies] = useState(null)
  const [activityLevel, setActivityLevel] = useState(null)
  const [activityType, setActivityType] = useState(null)
  const [fitnessGoal, setFitnessGoal] = useState(null)
  const [contactType, setContactType] = useState(null)
  const [comment, setComment] = useState(null)

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