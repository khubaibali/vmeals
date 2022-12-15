import React, { useState } from "react";
import { vmealsContact, vmealsFormContactUs } from "../../lib/APICommunications";

export default function Contactusform() {
  const [registerForm, setFormData] = useState({})
  const [isDisabled,setDisable] = useState(false)
  function formControl(event) {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }
  function CallSubmitForm() {
    setDisable(true)
    fetch(`${vmealsContact}`, {
      method: 'POST',
      body: JSON.stringify({
        ...registerForm
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        setDisable(false)
      }).catch(error => setDisable(false));

  }
  console.log("registerform", registerForm)
  return (
    <>
      <div className="w-9/12 sm:w-full ml-auto mr-auto ">
        <div className="grid grid-cols-12 gap-5  md:gap-8 2xl::gap-14  ">
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-black mt-5 md:mt-10 mb-1  ">
              First Name <span className="text-red">* </span>
            </h2>
            <input
              name="firstName"
              placeholder="Enter your first name…"
              className=" input-register "
              onChange={formControl}
            />
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-black md:mt-10 mb-1 ">
              Last Name <span className="text-red">* </span>
            </h2>
            <input
              name="lastName"
              placeholder="Enter your last name…"
              className=" input-register "
              onChange={formControl}
            />
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-bla  ">
              Email Address <span className="text-red">* </span>
            </h2>
            <input
              name="email"
              placeholder="Enter your email address…"
              className=" input-register "
              onChange={formControl}
            />
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
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0  inline-flex items-center text-sm f-f-b text-white  py-2.5 px-1 green-gradiant-2  text-center  focus:outline-none  mobile-btn "
                  type="button"
                >
                  +971{" "}
                  <img src="/images/mobilearrow.png" className=" ml-1 h-[13px] w-[13px] " />
                </button>
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
                    type="search"
                    id="search-dropdown"
                    className="block  input-register-mob"
                    placeholder="Enter your mobile number…"
                    name="mobileNumber"
                    onChange={formControl}
                    required
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-bla  ">
              Inquiry Type <span className="text-red">* </span>
            </h2>

                     {/* new code data started */}
                     <div className="relative" >
              <select id="cars" name="carlist" form="carform" className=" items-center text-sm f-f-b text-white  optinbg  contact-btn   lg:text-sm  pl-5 w-full rounded-[20px] h-[47px] md:h-[49px] 2xl:h-[57px]  " >
                <option value={""} className="text-black">Select an option...</option>
                <option className="text-black" >
                    1
                  </option>
                  <option className="text-black" >
                    1
                  </option>
                   <option className="text-black" >
                    1
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
            <h2 className=" text-base f-f-b text-bla  ">
              How should we contact you?<span className="text-red">* </span>
            </h2>
 {/* new code data started */}
                     <div className="relative" >
              <select id="cars" name="carlist" form="carform" className=" items-center text-sm f-f-b text-white  optinbg  contact-btn   lg:text-sm  pl-5 w-full rounded-[20px] h-[47px] md:h-[49px] 2xl:h-[57px]  "  >
                <option value={""} className="text-black">Select an option...</option>
                <option className="text-black" >
                    1
                  </option>
                  <option className="text-black" >
                    1
                  </option>
                   <option className="text-black" >
                    1
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
            <h2 className=" text-base f-f-b text-black  ">
              Message <span className="text-red">* </span>
            </h2>

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
          <button disabled={isDisabled} onClick={CallSubmitForm} className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full px-[47px] sm:px-[50px] py-[14px] sm:py-[17px] 2xl:px-[79px] 2xl:py-[25px] mt-5 2xl:mt-8">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
