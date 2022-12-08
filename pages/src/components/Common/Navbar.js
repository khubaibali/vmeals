import React, { useState } from "react";

import Link from "next/link";
export default function Navbar() {
  const [first, setfirst] = useState(false);
  const [aboutus, setaboutus] = useState(false);
  const [ourplans, setourplans] = useState(false);
  return (
    <>
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto fixed  top-16 md:top-6 left-0 right-0 z-20  ">
        <nav className="md:bg-white  border-gray-200 px-2 sm:px-4 2xl:py-2.5 rounded-[100px] md:shadow-lg  ">
          <div className="container flex flex-wrap items-center justify-between mx-auto relative ">
            <button
              onClick={() => {
                setfirst(!first);
              }}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center bg-green p-2 ml-3 text-sm text-gray-500 rounded-full md:hidden  focus:outline-none shadow-2xl  "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="#FFFFFF"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className={`${
                first ? "" : "hidden"
              } block w-full md:block md:w-auto`}
              id="navbar-default"
            >
              <ul className=" ml-4 flex flex-col py-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 lg:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
                <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4 text-white bg-green rounded md:bg-transparent md:text-black   md:p-0 f-f-b  text-smtwo xl:text-base 2xl:text-lg "
                  >
                    Home
                  </Link>
                </li>
                <li className="relative">
                  <button
                    id="dropdownNavbarLink"
                    onClick={() => {
                      setaboutus(!aboutus);
                    }}
                    data-dropdown-toggle="dropdownNavbar"
                    className="flex items-center  justify-between w-full py-2 pl-3 pr-4 font-medium text-black f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black md:border-0  md:p-0 md:w-auto  "
                  >
                    About Us{" "}
                    <svg
                      className="w-5 h-5 ml-1"
                      aria-hidden="true"
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
                    id="dropdownNavbar"
                    className={`${
                      aboutus ? "" : "hidden"
                    }  z-10  block font-normal divide-y divide-gray-100 rounded shadow  absolute bg-white left-0 top-[26px] w-full md:w-[83px] lg:w-[124px]`}
                  >
                    <ul
                      className="py-1  text-black f-f-b   "
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <Link
                          href="/about"
                          className="block px-4  xl:py-2 hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black f-f-b  text-xsone lg:text-sm  "
                        >
                          Our Company
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/faq"
                          className="block px-4  xl:py-2 hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black f-f-b  text-xsone lg:text-sm "
                        >
                          FAQs
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/ourpartner"
                          className="block px-4  xl:py-2 hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black f-f-b text-xsone lg:text-sm  "
                        >
                          Our Partners
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link
                    href="/ourplans"
                    className="block py-2 pl-3 pr-4 text-black f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black  md:border-0  md:p-0  "
                  >
                    Our Plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contactus"
                    className="block py-2 pl-3 pr-4 text-black f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black  md:border-0  md:p-0  "
                  >
                    Need Assistance?
                  </Link>
                </li>

                <li className=" md:hidden">
                  <Link
                    href="/ourblog"
                    className="block py-2 pl-3 pr-4 text-black f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded hover:bg-green  hover:text-white md:hover:text-black  md:border-0  md:p-0 "
                  >
                    Blog
                  </Link>
                </li>
                <li className=" md:hidden">
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-black f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black  md:border-0  md:p-0 "
                  >
                    Arabic / English
                  </a>
                </li>
                <li className=" md:hidden">
                  <a
                    href="#"
                    className="block py-2 sm:py-4   f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded-[100px]   green-gradiant pl-4 sm:px-10  text-white  "
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
            <div
              className=" hidden  w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="flex flex-col p-4  border border-gray-100    md:flex-row md:space-x-4 lg:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-transparent ">
                <li>
                  <Link
                    href="/ourblog"
                    className="block pb-2 py-2 mt-4 pl-3 pr-4 text-black f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black  md:border-0  md:p-0  "
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block pb-2 py-2 mt-4 pl-3 pr-4 text-black f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black  md:border-0  md:p-0  "
                  >
                    Arabic / English
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-4   f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded-[100px]   green-gradiant px-10  text-white  "
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-white w-[70px] h-[70px] md:h-[100px] md:w-[100px] lg:h-[140px] lg:w-[140px] 2xl:h-[183px] 2xl:w-[183px] rounded-full absolute left-[44%] -top-5 md:top-4 z-0 ">
              <img
                src="/images/VMeals-Logo-Original 1.png"
                alt=""
                className=" w-[58px] h-[32px] md:w-[60px] md:h-[40px] lg:w-[100px] lg:h-[60px] 2xl:w-[154px] 2xl:h-[84px] relative top-5 left-2 md:top-14 md:left-4"
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
