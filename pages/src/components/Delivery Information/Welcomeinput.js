import React from "react";

export default function Welcomeinput() {
  return (
    <div>
      {" "}
      <div className="w-11/12 sm:w-full ml-auto mr-auto ">
        <div className="grid grid-cols-12 gap-5   2xl:gap-4  ">
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h1 className=" text-base f-f-b text-black   mb-1 ">
              Starting Date <span className="text-red">* </span>
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
            <h1 className=" text-base f-f-b text-black  mb-1 ">
              City <span className="text-red">* </span>
            </h1>

            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0  inline-flex items-center text-sm f-f-b text-white   green-gradiant  text-center  focus:outline-none  contact-btn "
              type="button"
            >
              {" "}
              <h1 className="relative md:left-[80%] left-[70%]"> Dubai</h1>{" "}
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
          <div className="   col-span-12 ">
            <h1 className=" text-base f-f-b text-black   ">
              Address <span className="text-red">* </span>
            </h1>
            <input
              placeholder="Enter your area, street & building name..."
              className=" input-register "
            />
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h1 className=" text-base f-f-b text-black   ">
              Apartment/Villa Number <span className="text-red">* </span>
            </h1>
            <input
              placeholder="Enter your apartment/villa number..."
              className=" input-register "
            />
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h1 className=" text-base f-f-b text-black  ">
              Access Code (Optional)<span className="text-red">* </span>
            </h1>
            <input
              placeholder="Enter your building’s access code..."
              className=" input-register "
            />
          </div>
          <div className="   col-span-12  ">
            <h1 className=" text-base f-f-b text-bla  ">
              Google Maps Link <span className="text-red">* </span>
            </h1>
            <input
              placeholder="Enter the Google maps link..."
              className=" input-register "
            />
          </div>
          <div className="   col-span-12  ">
            <h1 className=" text-base f-f-b text-bla  ">
              Delivery Instructions (Optional)
              <span className="text-red">* </span>
            </h1>
            <input
              placeholder="Enter delivery specific instructions..."
              className=" input-register "
            />
          </div>
          <div className="   col-span-12 xl:col-span-6 ">
            <h1 className=" text-base f-f-b text-black  ">
              Delivery Slot <span className="text-red">* </span>
            </h1>

            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0  inline-flex items-center text-sm f-f-b text-white   green-gradiant  text-center  focus:outline-none  contact-btn "
              type="button"
            >
              {" "}
              <h1 className="relative left-[40%] xl:left-[50%]">
                {" "}
                12:00am - 4:00am
              </h1>{" "}
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
          <div className="   col-span-12 xl:col-span-6 ">
            <div className=" ml-auto mr-auto md:w-5/12 lg:w-4/12  xl:w-full ">
              <ul className=" inline-flex mt-7 w-full ">
                <li>
                  <h2 className=" text-black text-2xl f-f-b ">Total:</h2>
                </li>
                <li className=" ml-4 text-right ">
                  <h2 className=" text-black text-2xl f-f-b   ">AED3050.00</h2>
                  <h3 className="text-green f-f-r text-sm 2xl:text-tiny -mt-2 ">
                    Price inclusive of VAT
                  </h3>
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
              Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
