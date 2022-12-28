import React, { useState } from "react";
import NationalityData from "../../lib/data/nationality/data.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import CountryCodeData from "../../lib/data/countryCode/data.json";
import { validateEmail } from "../../helpers";

export default function Welcomeinput({ errors, setPersonalInformation, personalInformation }) {


  const [countryDialCode, setCountryDialCode] = useState("+971");

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
              onChange={(e) => setPersonalInformation({...personalInformation, firstName: e.target.value})}
              value={personalInformation?.firstName}
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
              onChange={(e) => setPersonalInformation({...personalInformation, lastName: e.target.value})}
              value={personalInformation?.lastName}
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
              onChange={(e) => setPersonalInformation({...personalInformation, email: e.target.value})}
              value={personalInformation?.email}
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
                <div className="relative" >
                  <select style={{ width: '70px', height: "100%" }} 
                   onChange={(e) => setPersonalInformation({...personalInformation, mobileNumberCode: e.target.value})}
                  className="flex-shrink-0  inline-flex items-center text-sm f-f-b text-white  py-2.5 px-2 green-gradiant-2    focus:outline-none  mobile-btn cursor-pointer" >
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
                        &nbsp;&nbsp;<span className="text-left" style={{ width: '20px' }}>{cc.dial_code}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-right" style={{ float: 'right' }}>{cc.name}</span>
                      </option>
                    ))}
                  </select>

                  <img alt=""
                    src="/images/mobilearrow.png"
                    className=" absolute top-[16px] 2xl:top-[22px] right-[3px] h-[12px] w-[12px] "
                  />
                </div>

         
                <div className="relative w-full">
                  <input
                    type="number"
                    id="search-dropdown"
                    className="block  input-register-mob"
                    placeholder="Enter your mobile number…"
                    required
                    onChange={(e) => setPersonalInformation({...personalInformation, mobileNumber: e.target.value})}
                    value={personalInformation?.mobileNumber}
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
                selected={personalInformation?.dateOfBirth || ""}
                onChange={(date) => setPersonalInformation({...personalInformation, dateOfBirth: date})}
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
          
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-bla  ">
              Nationality<span className="text-red">* </span>
            </h2>

            {/* new code data started */}
            <div className="relative" >
              <select id="cars" name="carlist" form="carform" className=" items-center text-sm f-f-b text-white  optinbg  contact-btn   lg:text-sm  pl-5 w-full rounded-[20px] h-[47px] md:h-[49px] 2xl:h-[57px]  cursor-pointer" 
              onChange={(e) => setPersonalInformation({...personalInformation, nationality: e.target.value})}
             
              >
                <option value={""} className="text-black">Select Nationality</option>
                {NationalityData.nationality.map((n) => (
                  <option className="text-black" value={n.nationality} selected={n.nationality == personalInformation?.nationality ? true : false}>
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
           
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-bla  ">
              Gender<span className="text-red">* </span>
            </h2>

            {/* new code data started */}
            <div className="relative" >
              <select id="cars" name="carlist" form="carform" className=" items-center text-sm f-f-b text-white  optinbg  contact-btn   lg:text-sm  pl-5 w-full rounded-[20px] h-[47px] md:h-[49px] 2xl:h-[57px]  cursor-pointer" 
              onChange={(e) => setPersonalInformation({...personalInformation, gender: e.target.value})}
               >
                <option value="" selected className="text-black" >Select Option</option>
                <option value="male" className="text-black" selected={personalInformation?.gender == "male" ? true : false}>Male</option>
                <option value="female" className="text-black" selected={personalInformation?.gender == "female" ? true : false}>Female</option>
                <option value="other" className="text-black" selected={personalInformation?.gender == "other" ? true : false}>Other</option>
              </select>

              <img alt=""
                src="/images/mobilearrow.png"
                className=" absolute top-[16px] 2xl:top-[24px] right-[17px]"
              />
               {errors?.length > 0 ? (
                <p style={{ color: "red" }}>
                  {errors?.find((e) => e.field == "gender")
                    ?.msg || ""}
                </p>
              ) : (
                ""
              )}
            </div>

          </div>

          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-bla  ">
              Height <span className="text-green" >(cm)  </span><span className="text-red">* </span>
            </h2>

            {/* new code data started */}
            <div className="relative" >
              <select id="cars" name="carlist" form="carform" className=" items-center text-sm f-f-b text-white  optinbg  contact-btn   lg:text-sm  pl-5 w-full rounded-[20px] h-[47px] md:h-[49px] 2xl:h-[57px]  cursor-pointer" 
              onChange={(e) => setPersonalInformation({...personalInformation, height: e.target.value})} >
                <option value=""  className="text-black" >Select Option</option>
                {
                  [...Array(300)].map((e, i) => (
                    <option value={i+1} className="text-black">{i+1} {" cm"}</option>
                  ))
                }
               
              </select>

              <img alt=""
                src="/images/mobilearrow.png"
                className=" absolute top-[16px] 2xl:top-[24px] right-[17px]"
              />
               {errors?.length > 0 ? (
                <p style={{ color: "red" }}>
                  {errors?.find((e) => e.field == "height")
                    ?.msg || ""}
                </p>
              ) : (
                ""
              )}
            </div>

          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-bla  ">
              Current Weight  <span className="text-green" >(kg)  </span><span className="text-red">* </span>
            </h2>

            {/* new code data started */}
            <div className="relative" >
              <select id="cars" name="carlist" form="carform" className=" items-center text-sm f-f-b text-white  optinbg  contact-btn   lg:text-sm  pl-5 w-full rounded-[20px] h-[47px] md:h-[49px] 2xl:h-[57px]  cursor-pointer" 
               onChange={(e) => setPersonalInformation({...personalInformation, currentWeight: e.target.value})} >
               <option value=""  className="text-black" >Select Option</option>
               {
                 [...Array(700)].map((e, i) => (
                   <option value={i+1} className="text-black">{i+1} {" kg"}</option>
                 ))
               }
              </select>

              <img alt=""
                src="/images/mobilearrow.png"
                className=" absolute top-[16px] 2xl:top-[24px] right-[17px]"
              />
              {errors?.length > 0 ? (
                <p style={{ color: "red" }}>
                  {errors?.find((e) => e.field == "currentWeight")
                    ?.msg || ""}
                </p>
              ) : (
                ""
              )}
            </div>

          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-bla  ">
              Desired Weight <span className="text-green" >(kg)  </span><span className="text-red">* </span>
            </h2>

            {/* new code data started */}
            <div className="relative" >
              <select id="cars" name="carlist" form="carform" className=" items-center text-sm f-f-b text-white  optinbg  contact-btn   lg:text-sm  pl-5 w-full rounded-[20px] h-[47px] md:h-[49px] 2xl:h-[57px]  cursor-pointer" 
              onChange={(e) => setPersonalInformation({...personalInformation, desiredWeight: e.target.value})} >
              <option value=""  className="text-black" >Select Option</option>
              {
                [...Array(700)].map((e, i) => (
                  <option value={i+1} className="text-black">{i+1} {" kg"}</option>
                ))
              }
              </select>

              <img alt=""
                src="/images/mobilearrow.png"
                className=" absolute top-[16px] 2xl:top-[24px] right-[17px]"
              />
              {errors?.length > 0 ? (
                <p style={{ color: "red" }}>
                  {errors?.find((e) => e.field == "desiredWeight")
                    ?.msg || ""}
                </p>
              ) : (
                ""
              )}
            </div>

          </div>
          <div className="   col-span-12 ">
            <div className=" text-center xl:text-right">
              <button className=" buttonstyle text-sm sm:text-tiny 2xl:text-lg f-f-b text-green shadow-lg border border-green bg-white rounded-full  2xl:h-[79px] h-[40px] w-[112px] md:h-[52px] md:w-[143px] 2xl:w-[219px]  mt-5 2xl:mt-8"
              >
                Clear
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
