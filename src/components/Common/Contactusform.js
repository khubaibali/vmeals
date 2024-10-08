import React, { useState } from "react";
import { vmealsContact, vmealsFormContactUs } from "../../lib/APICommunications";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CountryCodeData from "../../lib/data/countryCode/data.json";
import { validateEmail } from "../../helpers";
export default function Contactusform() {
  const [registerForm, setFormData] = useState({})
  const [validateEmailError, setValidateEmailError] = useState(null)
  const [isDisabled, setDisable] = useState(false)
  const [countryDialCode, setCountryDialCode] = useState("+971");
  const [Loading, setLoading] = useState(false)
  function formControl(event) {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }
  const CallSubmitForm = async () => {
    setLoading(true)
    let validate = await validateEmail(registerForm.email)
    console.log("here", validate)
    if (validate == "Invalid Email Address!") {
      // console.log("here 1")
      setValidateEmailError(validate)
      setLoading(false)
      return false
    }
    setDisable(true)
    // console.log("registerForm", {
    //   ...registerForm,
    //   mobileNumber: `${registerForm?.countryCode || "+971"}${registerForm?.mobileNumber}`
    // });
    fetch(`${vmealsContact}`, {
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
          toast("Please fill the required field")
          setLoading(false)

        } else {
          toast.success("Form submitted successfully")
          // setFormData({})
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
            <p className=" text-sm xl:text-tiny 2xl:text-base f-f-b text-black mt-5 md:mt-10 mb-1  ">
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
            <p className=" text-sm xl:text-tiny 2xl:text-base f-f-b text-black md:mt-10 mb-1 ">
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
            <p className=" text-sm xl:text-tiny 2xl:text-base f-f-b text-bla  ">
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
            <p className=" text-sm xl:text-tiny 2xl:text-base f-f-b text-black  ">
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
                  <img src="/images/mobilearrow.png" className=" ml-1 h-[13px] w-[13px] " />
                </button> */}


                <div className="relative" >
                  <select style={{ width: '70px', height: "100%" }} name="countryCode" onChange={formControl} className="flex-shrink-0  inline-flex items-center text-sm f-f-b text-white  py-2.5 px-2 green-gradiant-2  text-center  focus:outline-none  mobile-btn" >
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

                </div>
                <div className="relative w-full">
                  <input
                    type="number"
                    id="search-dropdown"
                    className="block  input-register-mob"
                    placeholder="Enter your mobile number…"
                    name="mobileNumber"
                    onChange={formControl}
                    value={registerForm?.mobileNumber}
                    required
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <p className=" text-sm xl:text-tiny 2xl:text-base f-f-b text-black  ">
              Inquiry Type <span className="text-red">* </span>
            </p>

            {/* new code data started */}
            <div className="relative" >
              <select onChange={formControl} id="inquiryType" name="inquiryType" form="carform" className=" items-center text-sm f-f-b text-white  optinbg  contact-btn   lg:text-sm  pl-5 w-full rounded-[20px] h-[47px] md:h-[49px] 2xl:h-[57px]  " >
                <option value={""} className="text-black">Select an option...</option>
                <option value={"General Inquiry"} className="text-black" >
                  General Inquiry
                </option>
                <option value={"Corporate Inquiry"} className="text-black" >
                  Corporate Inquiry
                </option>
                <option value={"Feedback/Complaint"} className="text-black" >
                  Feedback/Complaint
                </option>
              </select>

              <img alt=""
                src="/images/mobilearrow.png"
                className=" absolute top-[16px] 2xl:top-[24px] right-[17px]"
              />
            </div>
            {/* new code data end */}
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <p className=" text-sm xl:text-tiny 2xl:text-base f-f-b text-bla  ">
              How should we contact you?<span className="text-red">* </span>
            </p>
            {/* new code data started */}
            <div className="relative" >
              <select onChange={formControl} id="wayToContact" name="wayToContact" form="carform" className=" items-center text-sm f-f-b text-white  optinbg  contact-btn   lg:text-sm  pl-5 w-full rounded-[20px] h-[47px] md:h-[49px] 2xl:h-[57px]  "  >
                <option value={""} className="text-black">Select an option...</option>
                <option value={"whatsapp"} className="text-black" >
                  WhatsApp
                </option>
                <option value={"call"} className="text-black" >
                  Call
                </option>
                <option value={"email"} className="text-black" >
                  Email
                </option>
              </select>

              <img alt=""
                src="/images/mobilearrow.png"
                className=" absolute top-[16px] 2xl:top-[24px] right-[17px]"
              />
            </div>
            {/* new code data end */}
          </div>
          <div className="   col-span-12  ">
            <p className=" text-sm xl:text-tiny 2xl:text-base f-f-b text-black  ">
              Message <span className="text-red">* </span>
            </p>

            <textarea
              rows="4"
              cols="50"
              placeholder="Type your message..."
              className=" message-register "
              name="message"
              onChange={formControl}
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button disabled={Loading} onClick={CallSubmitForm} className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full px-[47px] sm:px-[50px] py-[14px] sm:py-[17px] 2xl:px-[79px] 2xl:py-[25px] mt-5 2xl:mt-8">
            {Loading ? <img src="/images/loader.gif"  width={35} className={"flex"} /> : "Submit"}
          </button>
        </div>
      </div>
    </>
  );
}
