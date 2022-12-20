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
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-black mt-5 md:mt-10 mb-1  ">
              First Name <span className="text-red">* </span>
            </h2>
            <input
              placeholder="Enter your first name…"
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
            <h2 className=" text-base f-f-b text-black md:mt-10 mb-1 ">
              Last Name <span className="text-red">* </span>
            </h2>
            <input
              placeholder="Enter your last name…"
              className=" input-register "
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            {errors?.length > 0 ? (
              <p style={{ color: "red" }}>
                {errors?.find((e) => e.field == "lastName")
                  ?.msg || ""}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-bla  ">
              Email Address <span className="text-red">* </span>
            </h2>
            <input
              placeholder="Enter your email address…"
              className=" input-register "
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
            <h2 className=" text-base f-f-b text-black  ">
              Mobile Number <span className="text-red">* </span>
            </h2>

            <form>
              <div className="flex">
                <label
                  for="search-dropdown"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Your Email
                </label>
                <div className="relative" >
                  <select style={{ width: '70px', height: "100%" }} value={mobileNumberCode} onChange={(e) => setMobileNumberCode(e.target.value)} className="flex-shrink-0  inline-flex items-center text-sm f-f-b text-white  py-2.5 px-2 green-gradiant-2  text-center  focus:outline-none  mobile-btn cursor-pointer" >
                    {CountryCodeData.countryCodes.map((cc) => (
                      <option
                        value={cc.dial_code}
                        selected={
                          countryDialCode == cc.dial_code
                            ? true
                            : false
                        }
                        className="text-black"
                      >
                        &nbsp;&nbsp;{cc.dial_code}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cc.name}
                      </option>
                    ))}
                  </select>

                  <img alt=""
                    src="/images/mobilearrow.png"
                    className=" absolute top-[16px] 2xl:top-[22px] right-[3px] h-[12px] w-[12px] "
                  />
                </div>

                {/* <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0  inline-flex items-center text-sm f-f-b text-white  py-2.5 px-1 green-gradiant  text-center  focus:outline-none  mobile-btn "
                  type="button"
                > 
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button> */}

                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Shopping
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Images
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        News
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Finance
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="relative w-full">
                  <input
                    type="number"
                    id="search-dropdown"
                    className="block  input-register-mob"
                    placeholder="Enter your mobile number…"
                    required
                    onChange={(e) => setMobileNumber(e.target.value)}
                    value={mobileNumber}
                  />
                </div>
              </div>
            </form>
            {errors?.length > 0 ? (
              <p style={{ color: "red" }}>
                {errors?.find((e) => e.field == "mobileNumber")
                  ?.msg || ""}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-bla  ">
              Date of Birth <span className="text-red">* </span>
            </h2>

            {/* date input */}
            <div className="relative" >
              <DatePicker
                selected={dateOfBirth || ""}
                onChange={(date) => setDateOfBirth(date)}
                dateFormat="dd/MM/yyyy"
                maxDate={moment().subtract(18, "years")._d}
                showYearDropdown
                scrollableYearDropdown
                placeholderText={
                  " Select your date of birth"
                }
                yearDropdownItemNumber={50}
                className=" items-center text-sm f-f-b text-white optinbg contact-btn lg:text-sm pl-5 w-full rounded-[20px] h-[47px] md:h-[49px] 2xl:h-[57px]  cursor-pointer "
              />
              <img alt=""
                src="/images/mobilearrow.png"
                className=" absolute top-[16px] 2xl:top-[20px] right-[17px]"
              />

            </div>
            {errors?.length > 0 ? (
              <p style={{ color: "red" }}>
                {errors?.find((e) => e.field == "dob")
                  ?.msg || ""}
              </p>
            ) : (
              ""
            )}
            {/* <input type="date" id="start" name="trip-start"
              className=" input-register  pr-10 "
              value="2018-07-22"
              min="2018-01-01" max="2018-12-31" /> */}
            {/* date input ended  */}
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Shopping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Images
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Finance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-bla  ">
              Nationality<span className="text-red">* </span>
            </h2>

            {/* new code data started */}
            <div className="relative" >
              <select id="cars" name="carlist" form="carform" className=" items-center text-sm f-f-b text-white  optinbg  contact-btn   lg:text-sm  pl-5 w-full rounded-[20px] h-[47px] md:h-[49px] 2xl:h-[57px]  cursor-pointer" onChange={(e) => setNationality(e.target.value)} >
                <option value={""} className="text-black">Select Nationality</option>
                {NationalityData.nationality.map((n) => (
                  <option className="text-black" value={n.nationality} selected={n.nationality == nationality ? true : false}>
                    {n.nationality}
                  </option>
                ))}
              </select>
              {errors?.length > 0 ? (
                <p style={{ color: "red" }}>
                  {errors?.find((e) => e.field == "nationality")
                    ?.msg || ""}
                </p>
              ) : (
                ""
              )}
              <img alt=""
                src="/images/mobilearrow.png"
                className=" absolute top-[16px] 2xl:top-[24px] right-[17px]"
              />
            </div>
            {/* new code data end */}
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Shopping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Images
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Finance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="   col-span-6 xl:col-span-6 ">
            <div className="text-center">
              <button className=" buttonstyle text-sm sm:text-tiny 2xl:text-lg f-f-b text-green shadow-lg border border-green bg-white rounded-full px-[47px] sm:px-[50px] py-[15px] sm:py-[17px] 2xl:px-[79px] 2xl:py-[25px] mt-5 2xl:mt-8" onClick={() => {
                scrollTo(0, 500);
                setStep(1)
              }}>
                Back
              </button>
            </div>
          </div>
          <div className="   col-span-6 xl:col-span-6 ">
            <div className="text-center">
              <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full px-[47px] sm:px-[50px] py-[15px] sm:py-[17px] 2xl:px-[79px] 2xl:py-[25px] mt-5 2xl:mt-8" onClick={() => {
                Validation()
              }}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
