import React, { useState } from "react";
import NationalityData from "../../lib/data/nationality/data.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import CountryCodeData from "../../lib/data/countryCode/data.json";
import { validateEmail } from "../../helpers";

export default function Welcomeinput({ isLoading, setIsLoading, Validation, errors, setDietryInformation, dietryInformation }) {


  const ActivityLevelOptions = [
    {
      label: "(x1) Very Minimal / Sedentary Lifestyle(little or no exercise)",
      value: "x1"
    },
    {
      label: "(x1.2) Low Activity(Light Sport 1 - 3 days / week)",
      value: "x1.2"
    },
    {
      label: "(x1.4) Active(Exercise / Sports 3 - 5 days / week)",
      value: "x1.4"
    },
    {
      label: "(x1.6) Very Active(Hard Exercise / Sport 5 - 6 days / week)",
      value: "x1.6"
    },
    {
      label: "(x2) Highly Active(Very hard sport & Physical Job or 2X Training)",
      value: "x2"
    }
  ];

  const contactOptions = [
    {}
  ]

  const [firstName, setFirstName] = useState(dietryInformation?.firstName)
  const [nationality, setNationality] = useState(dietryInformation?.nationality);
  // const [errors, setErrors] = useState(null);

  // const Validation = async () => {
  //   let err = [];
  //   if (email?.length > 0) {
  //     let checkEmail = await validateEmail(email);
  //     if (checkEmail == "Invalid Email Address!") {
  //       err.push({
  //         field: "email",
  //         msg: checkEmail,
  //       });
  //     }
  //   }

  //   if (!firstName) {
  //     err.push({
  //       field: "firstName",
  //       msg: "First Name is required!",
  //     });
  //   }
  //   if (!lastName) {
  //     err.push({
  //       field: "lastName",
  //       msg: "Last Name is required!",
  //     });
  //   }
  //   if (!dateOfBirth) {
  //     err.push({
  //       field: "dob",
  //       msg: "Date Of Birth is required!",
  //     });
  //   }
  //   if (!nationality) {
  //     err.push({
  //       field: "nationality",
  //       msg: "Nationality is required!",
  //     });
  //   }
  //   if (!email) {
  //     err.push({
  //       field: "email",
  //       msg: "Email is required!",
  //     });
  //   }
  //   if (!mobileNumber) {
  //     err.push({
  //       field: "mobileNumber",
  //       msg: "Mobile Number is required!",
  //     });
  //   }
  //   setErrors(err);
  //   if (err.length <= 0) {
  //     setDietryInformation({
  //       firstName,
  //       lastName,
  //       email,
  //       mobileNumber,
  //       mobileNumberCode,
  //       dateOfBirth,
  //       nationality
  //     })
  //     setStep(3)
  //     scrollTo(0, 500);

  //   } else {
  //     //console.log("")
  //   }
  // }

  return (
    <div>
      {" "}
      <div className="w-9/12 sm:w-full ml-auto mr-auto ">
        <div className="grid grid-cols-12 gap-5  md:gap-8 2xl::gap-14  ">
          <div className="   col-span-12  ">
            <p className=" text-base f-f-b text-black mt-5 md:mt-10 mb-1  ">
              Do you have any dietary restrictions? <span className="text-green text-sm 2xl:text-base " > (If yes, please mention them) </span> <span className="text-red">* </span>
            </p>
            <input
              placeholder="Enter your dietary restrictions..."
              className=" input-register "
              onChange={(e) => setDietryInformation({ ...dietryInformation, restriction: e.target.value })}
              value={dietryInformation?.restriction}
            />
            {errors?.length > 0 ? (
              <p style={{ color: "red" }}>
                {errors?.find((e) => e.field == "restriction")
                  ?.msg || ""}
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="   col-span-12  ">
            <p className=" text-base f-f-b text-bla  ">
              Do you have any allergies?<span className="text-green text-sm 2xl:text-base "> (If yes, please mention them) </span><span className="text-red">* </span>
            </p>
            <input
              placeholder="Enter your allergies..."
              className=" input-register "
              onChange={(e) => setDietryInformation({ ...dietryInformation, allergies: e.target.value })}
              value={dietryInformation?.allergies}
            />
            {errors?.length > 0 ? (
              <p style={{ color: "red" }}>
                {errors?.find((e) => e.field == "allergies")
                  ?.msg || ""}
              </p>
            ) : (
              ""
            )}
          </div>


          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <p className=" text-base f-f-b text-bla  ">
              Activity Level<span className="text-red">* </span>
            </p>

            {/* new code data started */}
            <div className="relative" >
              <select id="cars" name="carlist" form="carform" className=" items-center text-sm f-f-b text-white  optinbg  contact-btn   lg:text-sm  pl-5 w-full rounded-[20px] h-[47px] md:h-[49px] 2xl:h-[57px]  cursor-pointer"
                onChange={(e) => setDietryInformation({ ...dietryInformation, activityLevel: e.target.value })} >
                <option value="volvo" selected className="text-black" >Select an option...</option>
                {ActivityLevelOptions?.map(al => (
                  <option value={al.value} className="text-black">{al.label}</option>
                ))}
              </select>

              <img alt=""
                src="/images/mobilearrow.png"
                className=" absolute top-[16px] 2xl:top-[24px] right-[17px]"
              />
              {errors?.length > 0 ? (
                <p style={{ color: "red" }}>
                  {errors?.find((e) => e.field == "activityLevel")
                    ?.msg || ""}
                </p>
              ) : (
                ""
              )}
            </div>

          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6  ">
            <p className=" text-base f-f-b text-black   ">
              Type of Activity <span className="text-red">* </span>
            </p>
            <input
              placeholder="Enter your activties…"
              className=" input-register "
              onChange={(e) => setDietryInformation({ ...dietryInformation, activityType: e.target.value })}
              value={dietryInformation?.activityType}
            />
            {errors?.length > 0 ? (
              <p style={{ color: "red" }}>
                {errors?.find((e) => e.field == "activityType")
                  ?.msg || ""}
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="   col-span-12 md:col-span-6 xl:col-span-6  ">
            <p className=" text-base f-f-b text-black   ">
              What is your fitness goal?
              {/* <span className="text-red">* </span> */}
            </p>
            <input
              placeholder="Enter your fitness goal…"
              className=" input-register "
              onChange={(e) => setDietryInformation({ ...dietryInformation, fitnessGoal: e.target.value })}
              value={dietryInformation?.fitnessGoal}
            />

          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <p className=" text-base f-f-b text-bla  ">
              How should we contact you<span className="text-red">* </span>
            </p>

            {/* new code data started */}
            <div className="relative" >
              <select id="cars" name="carlist" form="carform" className=" items-center text-sm f-f-b text-white  optinbg  contact-btn   lg:text-sm  pl-5 w-full rounded-[20px] h-[47px] md:h-[49px] 2xl:h-[57px]  cursor-pointer" 
              onChange={(e) => setDietryInformation({...dietryInformation, contact: e.target.value})} 
              >
              
                <option value="" className="text-black" >Select an option...</option>
                <option value="whatsapp" className="text-black">Whatsapp</option>
                <option value="call" className="text-black">Call</option>
                <option value="email" className="text-black">Email</option>
              </select>

              <img alt=""
                src="/images/mobilearrow.png"
                className=" absolute top-[16px] 2xl:top-[24px] right-[17px]"
              />
              {errors?.length > 0 ? (
                <p style={{ color: "red" }}>
                  {errors?.find((e) => e.field == "contact")
                    ?.msg || ""}
                </p>
              ) : (
                ""
              )}
            </div>

          </div>
          <div className="   col-span-12  ">
            <p className=" text-base f-f-b text-black   ">
              Additional Comments
            </p>
            <input
              placeholder="Enter your allergies..."
              className=" input-register "
              onChange={(e) =>  setDietryInformation({ ...dietryInformation, comment: e.target.value })}
              value={firstName}
            />
            {errors?.length > 0 ? (
              <p style={{ color: "red" }}>
                {errors?.find((e) => e.field == "comment")
                  ?.msg || ""}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="   col-span-12 ">
          <div className=" text-center xl:text-left">
              <button className="  text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full  2xl:h-[79px] h-[40px] w-[112px] md:h-[52px] md:w-[143px] 2xl:w-[219px]  mt-5 2xl:mt-8  items-center justify-center"
                onClick={() => Validation()}
                disabled={isLoading}
              >
                {isLoading ? <img src="/images/loader.gif" width={35} className={"flex"} /> : "Submit"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
