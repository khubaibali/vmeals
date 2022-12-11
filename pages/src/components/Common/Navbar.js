import React, { useState } from "react";
import { vmealsHeader } from '../../../../src/lib/APICommunications';
const BaseURL = process.env.NEXT_PUBLIC_BASE_URL
import Link from "next/link";
function Navbar({ headerData = {} }) {

  const [first, setfirst] = useState(false);
  const [openCloseSubMenu,setOpenClose] = useState({})

  function controlSubMenu(subMenu){
    console.log(openCloseSubMenu,subMenu)
    if(!openCloseSubMenu.hasOwnProperty(subMenu)){
      setOpenClose({...openCloseSubMenu,[subMenu]:!Boolean(openCloseSubMenu[subMenu])})
    }else{
      setOpenClose({...openCloseSubMenu,[subMenu]:!Boolean(openCloseSubMenu[subMenu])})
    }
  }

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
              className={`${first ? "" : "hidden"
                } block w-full md:block md:w-auto`}
              id="navbar-default"
            >
              <ul className=" ml-4 flex flex-col py-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 lg:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
                <>
                  {/* <li>
                    <Link
                      href={`${BaseURL}${headerData?.VMealsHeaderMenuList[0]?.VMealsHeaderMenuItemLinkURL}`}
                      className="block py-2 pl-3 pr-4 text-white bg-green rounded md:bg-transparent md:text-black   md:p-0 f-f-b  text-smtwo xl:text-base 2xl:text-lg "
                    >
                      Home
                      {headerData?.VMealsHeaderMenuList[0]?.VMealsHeaderMenuItemTitle}
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
                      {headerData?.VMealsHeaderMenuList[1]?.VMealsHeaderMenuItemTitle}
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
                      className={`${aboutus ? "" : "hidden"
                        }  z-10  block font-normal divide-y divide-gray-100 rounded shadow  absolute bg-white left-0 top-[26px] w-full md:w-[83px] lg:w-[124px]`}
                    >
                      <ul
                        className="py-1  text-black f-f-b   "
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <Link
                            href={headerData?.VMealsHeaderMenuList[1]?.VMealsHeaderSubMenuList[0]?.VMealsHeaderSubMenuLinkURL}
                            className="block px-4  xl:py-2 hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black f-f-b  text-xsone lg:text-sm  "
                          >
                            Our Company
                            {headerData?.VMealsHeaderMenuList[1]?.VMealsHeaderSubMenuList[0]?.VMealsHeaderSubMenuTitle}

                          </Link>
                        </li>

                        <li>
                          <Link
                            href={headerData?.VMealsHeaderMenuList[1]?.VMealsHeaderSubMenuList[1]?.VMealsHeaderSubMenuLinkURL}
                            className="block px-4  xl:py-2 hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black f-f-b  text-xsone lg:text-sm "
                          >
                            FAQs
                            {headerData?.VMealsHeaderMenuList[1]?.VMealsHeaderSubMenuList[1]?.VMealsHeaderSubMenuTitle}
                          </Link>
                        </li>

                        <li>
                          <Link
                            href={headerData?.VMealsHeaderMenuList[1]?.VMealsHeaderSubMenuList[2]?.VMealsHeaderSubMenuLinkURL}
                            className="block px-4  xl:py-2 hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black f-f-b text-xsone lg:text-sm  "
                          >
                            Our Partners
                            {headerData?.VMealsHeaderMenuList[1]?.VMealsHeaderSubMenuList[2]?.VMealsHeaderSubMenuTitle}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <Link
                      href={headerData?.VMealsHeaderMenuList[2]?.VMealsHeaderMenuItemLinkURL}
                      className="block py-2 pl-3 pr-4 text-black f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black  md:border-0  md:p-0  "
                    >
                      Our Plans
                      {headerData?.VMealsHeaderMenuList[2]?.VMealsHeaderMenuItemTitle}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={headerData?.VMealsHeaderMenuList[3]?.VMealsHeaderMenuItemLinkURL}
                      className="block py-2 pl-3 pr-4 text-black f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black  md:border-0  md:p-0  "
                    >
                      Need Assistance?
                      {headerData?.VMealsHeaderMenuList[3]?.VMealsHeaderMenuItemTitle}
                    </Link>
                  </li> */}
                </>

                {headerData?.VMealsHeaderMenuList?.map((headerItem) => (
                  (headerItem.hasOwnProperty('VMealsHeaderSubMenuList') && headerItem?.VMealsHeaderSubMenuList.length > 0)
                    ?
                    <li className="relative">
                      <button
                        id="dropdownNavbarLink"
                        onClick={() => {
                          controlSubMenu(headerItem?.VMealsHeaderMenuItemTitle)
                        }}
                        data-dropdown-toggle="dropdownNavbar"
                        className="flex items-center  justify-between w-full py-2 pl-3 pr-4 font-medium text-black f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black md:border-0  md:p-0 md:w-auto  "
                      >

                        {headerItem?.VMealsHeaderMenuItemTitle}
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
                        className={`${openCloseSubMenu[headerItem?.VMealsHeaderMenuItemTitle] ? "" : "hidden"
                          }  z-10  block font-normal divide-y divide-gray-100 rounded shadow  absolute bg-white left-0 top-[26px] w-full md:w-[83px] lg:w-[124px]`}
                      >
                        <ul
                          className="py-1  text-black f-f-b   "
                          aria-labelledby="dropdownLargeButton"
                        >
                          {headerItem?.VMealsHeaderSubMenuList.map((submenu) => (
                            <Link
                              href={`/${submenu?.VMealsHeaderSubMenuLinkURL ?submenu?.VMealsHeaderSubMenuLinkURL:"" }`}
                              className="block px-4  xl:py-2 hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black f-f-b  text-xsone lg:text-sm  "
                            >
                              {/* Our Company */}
                              {submenu?.VMealsHeaderSubMenuTitle}

                            </Link>
                          ))}

                        </ul>
                      </div>
                    </li>
                    :
                    <li>
                      <Link
                        href={`/${headerItem?.VMealsHeaderMenuItemLinkURL ? headerItem?.VMealsHeaderMenuItemLinkURL : ""}`}
                        className="block py-2 pl-3 pr-4 text-white bg-green rounded md:bg-transparent md:text-black   md:p-0 f-f-b  text-smtwo xl:text-base 2xl:text-lg "
                      >
                        {headerItem?.VMealsHeaderMenuItemTitle}
                      </Link>
                    </li>
                ))}

                <li className=" md:hidden">
                  <Link
                    href={headerData?.VMealsHeaderBlogTextLinkURL ? headerData?.VMealsHeaderBlogTextLinkURL : ""}
                    className="block py-2 pl-3 pr-4 text-black f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded hover:bg-green  hover:text-white md:hover:text-black  md:border-0  md:p-0 "
                  >
                    {/* Blog */}
                    {headerData?.VMealsHeaderBlogText}
                  </Link>
                </li>
                <li className=" md:hidden">
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-black f-f-b  text-smtwo lg:text-base 2xl:text-lg rounded hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black  md:border-0  md:p-0 "
                  >
                    {/* Arabic / English */}
                    {headerData?.VMealsLanguagesList?.[0]?.VMealsLanguagesItemTitle} / {headerData?.VMealsLanguagesList?.[1]?.VMealsLanguagesItemTitle}
                  </a>
                </li>
                <li className=" md:hidden">
                  <a
                    href="#"
                    className="block py-2 sm:py-4   f-f-b  text-smtwo lg:text-base 2xl:text-lg rounded-[100px]   green-gradiant pl-4 sm:px-10  text-white  "
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
                    href={headerData?.VMealsHeaderBlogTextLinkURL ? headerData?.VMealsHeaderBlogTextLinkURL:"" }
                    className="block pb-2 py-2 mt-4 pl-3 pr-4 text-black f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black  md:border-0  md:p-0  "
                  >
                    {headerData?.VMealsHeaderBlogText}
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block pb-2 py-2 mt-4 pl-3 pr-4 text-black f-f-b  text-smtwo lg:text-base 2xl:text-lg rounded hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black  md:border-0  md:p-0  "
                  >
                    {/* Arabic / English */}
                    {headerData?.VMealsLanguagesList?.[0]?.VMealsLanguagesItemTitle} / {headerData?.VMealsLanguagesList?.[1]?.VMealsLanguagesItemTitle}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-4   f-f-b  text-smtwo lg:text-base 2xl:text-lg rounded-[100px]   green-gradiant px-10  text-white  "
                  >
                    {/* Get Started */}
                    {headerData?.VMealsHeaderButtonText}
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-white w-[70px] h-[70px] md:h-[100px] md:w-[100px] lg:h-[140px] lg:w-[140px] 2xl:h-[183px] 2xl:w-[183px] rounded-full absolute left-[44%] -top-5 md:top-4 z-0 ">
              <Link href= {headerData?.VMealsHeaderLogoImageLinkURL ? headerData?.VMealsHeaderLogoImageLinkURL : ""}>
                <img
                  src={`${BaseURL}${headerData?.VMealsHeaderLogoImage?.url}`}
                  alt={headerData?.VMealsHeaderLogoImage?.alt}
                  className=" w-[58px] h-[32px] md:w-[60px] md:h-[40px] lg:w-[100px] lg:h-[60px] 2xl:w-[154px] 2xl:h-[84px] relative top-5 left-2 md:top-14 md:left-4"
                />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar


export async function getServerSideProps() {
  try {
    console.log('header fetching')
    let vmealsHeaderData = await fetch(vmealsHeader)
    let data = await vmealsHeaderData.json()
    data = data?.docs?.find(p => p.VMealsHeaderEnableDisables == "Enable");
    return {
      props: { headerData: { ...data } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { headerData: {} }
    }
  }

}