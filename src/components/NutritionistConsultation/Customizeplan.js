import React, { useState } from "react";

import Welcomeinput from "./Welcomeinput";

import Informationslick from "../OurPlans/Informationslick";
import Link from "next/link";
import Steps from "../OurPlans/Steps";
import { testimonials, vmealsConsultationForm } from "../../lib/APICommunications";
import Dietryinput from './Dietryinputs'
import { validateEmail } from "../../helpers";
import axios from "axios";

export default function CustomizeplanPersonalInformation({ }) {

  const [personalInformation, setPersonalInformation] = React.useState(1);
  const [dietryInformation, setDietryInformation] = React.useState(1);
  const [errors, setErrors] = React.useState(null);

  const Validation = async () => {
    let err = [];
    if (personalInformation?.email?.length > 0) {
      let checkEmail = await validateEmail(personalInformation?.email);
      if (checkEmail == "Invalid Email Address!") {
        err.push({
          field: "email",
          msg: checkEmail,
        });
      }
    }

    if (!personalInformation?.firstName) {
      err.push({
        field: "firstName",
        msg: "First Name is required!",
      });
    }
    if (!personalInformation?.lastName) {
      err.push({
        field: "lastName",
        msg: "Last Name is required!",
      });
    }
    if (!personalInformation?.dateOfBirth) {
      err.push({
        field: "dob",
        msg: "Date Of Birth is required!",
      });
    }
    if (!personalInformation?.nationality) {
      err.push({
        field: "nationality",
        msg: "Nationality is required!",
      });
    }
    if (!personalInformation?.email) {
      err.push({
        field: "email",
        msg: "Email is required!",
      });
    }
    if (!personalInformation?.mobileNumber) {
      err.push({
        field: "mobileNumber",
        msg: "Mobile Number is required!",
      });
    }
    if (!personalInformation?.gender) {
      err.push({
        field: "gender",
        msg: "Gender is required!",
      });
    }
    if (!personalInformation?.height) {
      err.push({
        field: "height",
        msg: "Height is required!",
      });
    }
    if (!personalInformation?.currentWeight) {
      err.push({
        field: "currentWeight",
        msg: "Current Weight is required!",
      });
    }
    if (!personalInformation?.desiredWeight) {
      err.push({
        field: "desiredWeight",
        msg: "Desired Weight is required!",
      });
    }
    if (!dietryInformation?.restriction) {
      err.push({
        field: "restriction",
        msg: "Dietary Restriction is required!",
      });
    }
    if (!dietryInformation?.allergies) {
      err.push({
        field: "allergies",
        msg: "Allergies is required!",
      });
    }
    if (!dietryInformation?.activityLevel) {
      err.push({
        field: "activityLevel",
        msg: "Activity Level is required!",
      });
    }
    if (!dietryInformation?.activityType) {
      err.push({
        field: "activityType",
        msg: "Activity Type is required!",
      });
    }
    if (!dietryInformation?.contact) {
      err.push({
        field: "contact",
        msg: "Contact is required!",
      });
    }
    if (err.length > 0) {
      setErrors(err);
    } else {
      addConsultation()
    }

  }

  const addConsultation = () => {
    let body = {
      "clientInformation": {
        "firstName": personalInformation?.firstName,
        "lastName": personalInformation?.lastName,
        "email": personalInformation?.email,
        "mobileNumber": personalInformation?.mobileNumberCode + personalInformation?.mobileNumber,
        "dateOfBirth": (new Date(personalInformation?.dateOfBirth)).toDateString(),
        "nationality": personalInformation?.nationality,
        "gender": personalInformation?.gender,
        "height": personalInformation?.heigth + "cm",
        "currentWeight": personalInformation?.currentWeight + "Kg(s)",
        "desiredWeight": personalInformation?.desiredWeight + "Kg(s)"
      },
      "dietaryInformation": {
        "dietaryRestrictions": dietryInformation?.restriction,
        "allergies": dietryInformation?.allergies,
        "activityLevel": dietryInformation?.acitivityLevel,
        "acitivityType": dietryInformation?.acitivityType,
        "fitnessGoal": dietryInformation?.goal,
        "wayToContact": dietryInformation?.contact,
        "additionalComments": dietryInformation?.comment
      }
    }
    axios
      .post(vmealsConsultationForm, body)
      .then((res) => {
        console.log("form Submitted")
      });
  }

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

                <Welcomeinput errors={errors} personalInformation={personalInformation} setPersonalInformation={setPersonalInformation} />
              </div>
            </div>
            <div className="   col-span-12   xl:col-span-6  ">
              <h2 class=" text-base sm:text-2xl 2xl:text-4xl f-f-li uppercase text-green tracking-[0.22em] text-center lg:text-left  mt-4 2xl:mt-8 ">DIETARY information</h2>
              <Dietryinput errors={errors} Validation={Validation} setDietryInformation={setDietryInformation} dietryInformation={dietryInformation} />
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