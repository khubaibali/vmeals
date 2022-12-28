import React, { useState } from "react";
import NationalityData from "../../lib/data/nationality/data.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import CountryCodeData from "../../lib/data/countryCode/data.json";
import { validateEmail } from "../../helpers";

export default function Welcomeinput({ setStep, setPersonalInformation, personalInformation }) {
  const [firstName, setFirstName] = useState(personalInformation?.firstName)
  const [lastName, setLastName] = useState(personalInformation?.lastName)
  const [email, setEmail] = useState(personalInformation?.email)
  const [mobileNumber, setMobileNumber] = useState(personalInformation?.mobileNumber)
  const [mobileNumberCode, setMobileNumberCode] = useState(personalInformation?.mobileNumberCode)
  const [dateOfBirth, setDateOfBirth] = useState(personalInformation?.dateOfBirth)
  const [nationality, setNationality] = useState(personalInformation?.nationality);
  const [errors, setErrors] = useState(null);
  const [countryDialCode, setCountryDialCode] = useState("+971");

  const Validation = async () => {
    let err = [];
    if (email?.length > 0) {
      let checkEmail = await validateEmail(email);
      if (checkEmail == "Invalid Email Address!") {
        err.push({
          field: "email",
          msg: checkEmail,
        });
      }
    }

    if (!firstName) {
      err.push({
        field: "firstName",
        msg: "First Name is required!",
      });
    }
    if (!lastName) {
      err.push({
        field: "lastName",
        msg: "Last Name is required!",
      });
    }
    if (!dateOfBirth) {
      err.push({
        field: "dob",
        msg: "Date Of Birth is required!",
      });
    }
    if (!nationality) {
      err.push({
        field: "nationality",
        msg: "Nationality is required!",
      });
    }
    if (!email) {
      err.push({
        field: "email",
        msg: "Email is required!",
      });
    }
    if (!mobileNumber) {
      err.push({
        field: "mobileNumber",
        msg: "Mobile Number is required!",
      });
    }
    setErrors(err);
    if (err.length <= 0) {
      setPersonalInformation({
        firstName,
        lastName,
        email,
        mobileNumber,
        mobileNumberCode,
        dateOfBirth,
        nationality
      })
      setStep(3)
      scrollTo(0, 500);

    } else {
      //console.log("")
    }
  }
  return (
    <div>
      {" "}
      <div className="w-9/12 sm:w-full ml-auto mr-auto ">
        <div className="grid grid-cols-12 gap-5  md:gap-8 2xl::gap-14  ">
          <div className="   col-span-12  ">
            <h2 className=" text-base f-f-b text-black mt-5 md:mt-10 mb-1  ">
            Do you have any dietary restrictions? <span className="text-green text-sm 2xl:text-base " > (If yes, please mention them) </span> <span className="text-red">* </span>
            </h2>
            <input
              placeholder="Enter your dietary restrictions..."
              className=" input-register "
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            {errors?.length > 0 ? (
              <p style={{ color: "red" }}>
                {errors?.find((e) => e.field == "firstName")
                  ?.msg || ""}
              </p>
            ) : (
              ""
            )}
          </div>
       
          <div className="   col-span-12  ">
            <h2 className=" text-base f-f-b text-bla  ">
            Do you have any allergies?<span className="text-green text-sm 2xl:text-base "> (If yes, please mention them) </span><span className="text-red">* </span>
            </h2>
            <input
              placeholder="Enter your allergies..."
              className=" input-register "

            />
            {errors?.length > 0 ? (
              <p style={{ color: "red" }}>
                {errors?.find((e) => e.field == "email")
                  ?.msg || ""}
              </p>
            ) : (
              ""
            )}
          </div>
       
        
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-bla  ">
            Activity Level<span className="text-red">* </span>
            </h2>

            {/* new code data started */}
            <div className="relative" >
              <select id="cars" name="carlist" form="carform" className=" items-center text-sm f-f-b text-white  optinbg  contact-btn   lg:text-sm  pl-5 w-full rounded-[20px] h-[47px] md:h-[49px] 2xl:h-[57px]  cursor-pointer" onChange={(e) => setNationality(e.target.value)} >
              <option value="volvo" selected className="text-black" >Select an option...</option>
  <option value="saab" className="text-black">Saab</option>
  <option value="mercedes" className="text-black">Mercedes</option>
  <option value="audi" className="text-black">Audi</option>
              </select>
       
              <img alt=""
                src="/images/mobilearrow.png"
                className=" absolute top-[16px] 2xl:top-[24px] right-[17px]"
              />
            </div>
          
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6  ">
            <h2 className=" text-base f-f-b text-black   ">
            Type of Activity <span className="text-red">* </span>
            </h2>
            <input
              placeholder="Enter your activties…"
              className=" input-register "
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            {errors?.length > 0 ? (
              <p style={{ color: "red" }}>
                {errors?.find((e) => e.field == "firstName")
                  ?.msg || ""}
              </p>
            ) : (
              ""
            )}
          </div>
          
          <div className="   col-span-12 md:col-span-6 xl:col-span-6  ">
            <h2 className=" text-base f-f-b text-black   ">
            What is your fitness goal? <span className="text-red">* </span>
            </h2>
            <input
              placeholder="Enter your fitness goal…"
              className=" input-register "
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            {errors?.length > 0 ? (
              <p style={{ color: "red" }}>
                {errors?.find((e) => e.field == "firstName")
                  ?.msg || ""}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-bla  ">
            How should we contact you<span className="text-red">* </span>
            </h2>

            {/* new code data started */}
            <div className="relative" >
              <select id="cars" name="carlist" form="carform" className=" items-center text-sm f-f-b text-white  optinbg  contact-btn   lg:text-sm  pl-5 w-full rounded-[20px] h-[47px] md:h-[49px] 2xl:h-[57px]  cursor-pointer" onChange={(e) => setNationality(e.target.value)} >
              <option value="volvo" selected className="text-black" >Select an option...</option>
  <option value="saab" className="text-black">Saab</option>
  <option value="mercedes" className="text-black">Mercedes</option>
  <option value="audi" className="text-black">Audi</option>
              </select>
         
              <img alt=""
                src="/images/mobilearrow.png"
                className=" absolute top-[16px] 2xl:top-[24px] right-[17px]"
              />
            </div>
          
          </div>
          <div className="   col-span-12  ">
            <h2 className=" text-base f-f-b text-black   ">
            Additional Comments
            </h2>
            <input
              placeholder="Enter your allergies..."
              className=" input-register "
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            {errors?.length > 0 ? (
              <p style={{ color: "red" }}>
                {errors?.find((e) => e.field == "firstName")
                  ?.msg || ""}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="   col-span-12 ">
            <div className="text-center xl:text-left">
              <button className="  text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full  2xl:h-[79px] h-[40px] w-[112px] md:h-[52px] md:w-[143px] 2xl:w-[219px]  mt-5 2xl:mt-8"
              >
            Submit
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
