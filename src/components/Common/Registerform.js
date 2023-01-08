import React, { useState } from "react";
const BaseURL = process.env.NEXT_PUBLIC_BASE_URL
import { vmealsRegisterCompany } from "../../../src/lib/APICommunications";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CountryCodeData from "../../lib/data/countryCode/data.json";
import { validateEmail } from "../../helpers";
export default function Registerform() {
  const [registerForm, setFormData] = useState({})
  const [isDisabled, setDisable] = useState(false)
  const [validateEmailError, setValidateEmailError] = useState(null)
  const [countryDialCode, setCountryDialCode] = useState("+971");
  const [Loading, setLoading] = useState(false)

  function formControl(event) {
    // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", { [event.target.name]: event.target.value })

    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }
  const CallSubmitForm = async () => {
    setLoading(true)
    // if(registerForm.email){
    let validate = await validateEmail(registerForm.email)
    // console.log("here", validate)
    if (validate == "Invalid Email Address!") {
      // console.log("here 1")
      setValidateEmailError(validate)
      return false
    }
    // }
    // console.log("registerForm", {
    //   ...registerForm,
    //   mobileNumber: `${registerForm?.countryCode || "+971"}${registerForm?.mobileNumber}`
    // }); return
    setDisable(true)
    fetch(`${vmealsRegisterCompany}`, {
      method: 'POST',
      body: JSON.stringify({
        ...registerForm,
        mobileNumber: `${registerForm?.countryCode || "+971"}${registerForm?.mobileNumber}`
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        if (data?.name === "ValidationError") {
          toast.error("Please fill the required field")
          setLoading(false)
        } else {
          toast.success("Form submitted successfully")
          window.location.reload(false);
        }
        setDisable(false)
      }).catch(error => {
        setDisable(false)
        toast(error?.message)
      });

  }
  //console.log("registerform", registerForm)

  return (
    <>
      <div className="w-9/12 sm:w-full ml-auto mr-auto ">
        <div className="grid grid-cols-12 gap-5  md:gap-8 2xl::gap-14  ">
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <p className=" text-base f-f-b text-black mt-5 md:mt-10 mb-1  ">
              First Name <span className="text-red">* </span>
            </p>
            <input
              name="firstName"
              placeholder="Enter your first name…"
              className=" input-register "
              onChange={formControl}
            />
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <p className=" text-base f-f-b text-black md:mt-10 mb-1 ">
              Last Name <span className="text-red">* </span>
            </p>
            <input
              name="lastName"
              placeholder="Enter your last name…"
              className=" input-register "
              onChange={formControl}
            />
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <p className=" text-base f-f-b text-bla  ">
              Email Address <span className="text-red">* </span>
            </p>
            <input
              name="email"
              placeholder="Enter your email address…"
              className=" input-register "
              onChange={formControl}
            />
            {validateEmailError && <p className="text-red">{validateEmailError}</p>}
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <p className=" text-base f-f-b text-black  ">
              Mobile Number <span className="text-red">* </span>
            </p>

            <form>
              <div className="flex">
                <label
                  for="search-dropdown"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Your Email
                </label>
                {/* <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0  inline-flex items-center text-sm f-f-b text-white  py-2.5 px-1 green-gradiant-2  text-center  focus:outline-none  mobile-btn "
                  type="button"
                >
                  +971{" "}
                  <img src="/images/mobilearrow.png" className=" w-[12px] h-[12px] ml-1" />
                </button> */}
                 <div className="relative" >
                <select style={{ width: '70px', height:"100%" }} name="countryCode" onChange={formControl} className="flex-shrink-0  inline-flex items-center text-sm f-f-b text-white  py-2.5 px-2 green-gradiant-2  text-center  focus:outline-none  mobile-btn cursor-pointer" >
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
                    name="mobileNumber"
                    type="number"
                    id="search-dropdown"
                    className="block  input-register-mob"
                    placeholder="Enter your mobile number…"
                    onChange={formControl}
                    required
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <p className=" text-base f-f-b text-bla  ">
              Company Name <span className="text-red">* </span>
            </p>
            <input
              name="comapnyName"
              placeholder="Enter your company name…"
              className=" input-register "
              onChange={formControl}
            />
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <p className=" text-base f-f-b text-black  ">
              Designation <span className="text-red">* </span>
            </p>
            <input
              name="designation"
              placeholder="Enter your designation…"
              className=" input-register "
              onChange={formControl}
            />
          </div>
          <div className="   col-span-12  ">
            <p className=" text-base f-f-b text-black  ">
              Message <span className="text-red">* </span>
            </p>

            <textarea
              name="message"
              rows="4"
              cols="50"
              placeholder="Type your message..."
              className=" message-register "
              onChange={formControl}
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full px-[47px] sm:px-[50px] py-[13px] sm:py-[17px] 2xl:px-[79px] 2xl:py-[25px] mt-5 2xl:mt-8"
            onClick={CallSubmitForm}
            disabled={Loading}
          >
            {Loading ? <img src="/images/loader.gif"  width={35} className={"flex"} /> : "Submit"}
          </button>
        </div>
      </div>
    </>
  );
}
