import React from "react";

export default function Welcomeinput() {
  return (
    <div>
      {" "}
      <div className="w-9/12 sm:w-full ml-auto mr-auto ">
        <div className="grid grid-cols-12 gap-5  md:gap-8 2xl::gap-14  ">
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h1 className=" text-base f-f-b text-black mt-5 md:mt-10 mb-1  ">
              First Name <span className="text-red">* </span>
            </h1>
            <input
              placeholder="Enter your first name…"
              className=" input-register "
            />
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h1 className=" text-base f-f-b text-black md:mt-10 mb-1 ">
              Last Name <span className="text-red">* </span>
            </h1>
            <input
              placeholder="Enter your last name…"
              className=" input-register "
            />
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h1 className=" text-base f-f-b text-bla  ">
              Email Address <span className="text-red">* </span>
            </h1>
            <input
              placeholder="Enter your email address…"
              className=" input-register "
            />
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h1 className=" text-base f-f-b text-black  ">
              Mobile Number <span className="text-red">* </span>
            </h1>
            {/* <input placeholder='Enter your first name…' className=' input-register '  /> */}
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
                  className="flex-shrink-0  inline-flex items-center text-sm f-f-b text-white  py-2.5 px-1 green-gradiant  text-center  focus:outline-none  mobile-btn "
                  type="button"
                >
                  +971{" "}
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
                    required
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h1 className=" text-base f-f-b text-bla  ">
              Date of Birth <span className="text-red">* </span>
            </h1>

            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0  inline-flex items-center text-sm f-f-b text-white   green-gradiant  text-center  focus:outline-none  contact-btn "
              type="button"
            >
              {" "}
              <h1 className="relative left-[60%]"> 04/10/2022 </h1>{" "}
              <img src="/images/mobilearrow.png" className="absolute right-4" />{" "}
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
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h1 className=" text-base f-f-b text-bla  ">
              Nationality<span className="text-red">* </span>
            </h1>

            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0  inline-flex items-center text-sm f-f-b text-white   green-gradiant  text-center  focus:outline-none  contact-btn relative "
              type="button"
            >
              <h1 className="relative left-[40%]"> Select an option... </h1>
              <img
                src="/images/mobilearrow.png"
                className="absolute right-4"
              />{" "}
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
          </div>
          <div className="   col-span-6 xl:col-span-6 ">
            <div className="text-center">
              <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-green shadow-lg border border-green bg-white rounded-full px-[47px] sm:px-[50px] py-[15px] sm:py-[17px] 2xl:px-[79px] 2xl:py-[25px] mt-5 2xl:mt-8">
                Back
              </button>
            </div>
          </div>
          <div className="   col-span-6 xl:col-span-6 ">
            <div className="text-center">
              <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full px-[47px] sm:px-[50px] py-[15px] sm:py-[17px] 2xl:px-[79px] 2xl:py-[25px] mt-5 2xl:mt-8">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
