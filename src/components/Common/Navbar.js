import React, { useState, useRef } from "react";
import { vmealsHeader } from '../../lib/APICommunications';
const BaseURL = process.env.NEXT_PUBLIC_BASE_URL
const ImageBaseURL = process.env.NEXT_PUBLIC_BASE_URL_IMAGE
import Link from "next/link";
import useOutsideClick from '../../hooks/use-outside-click'
function Navbar({ headerData = {} }) {
  const ref = useRef()
  const [first, setfirst] = useState(false);
  const [openCloseSubMenu, setOpenClose] = useState({})
  useOutsideClick(ref, controlSubMenu)
  function controlSubMenu(subMenu) {
    //console.log(openCloseSubMenu, subMenu)
    if (subMenu === "closeAll") {
      Object.keys(openCloseSubMenu).forEach((x) => {
        openCloseSubMenu[x] = false
      })
      setOpenClose({ ...openCloseSubMenu })
    }
    if (!openCloseSubMenu.hasOwnProperty(subMenu)) {
      Object.keys(openCloseSubMenu).forEach((x) => {
        openCloseSubMenu[x] = false
      })
      setOpenClose({ ...openCloseSubMenu, [subMenu]: !Boolean(openCloseSubMenu[subMenu]) })
    } else {
      Object.keys(openCloseSubMenu).forEach((x) => {
        openCloseSubMenu[x] = false
      })
      setOpenClose({ ...openCloseSubMenu, [subMenu]: !Boolean(openCloseSubMenu[subMenu]) })
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
              className="inline-flex items-center  md:hidden  focus:outline-none shadow-2xl  "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <img src="/images/Nav-Bar-menu.png" className=" w-[36px] h-[36px] " />
            </button>
            <div ref={ref}
              className={`${first ? "" : "hidden"
                } block w-full md:block md:w-auto`}
              id="navbar-default"
            >
              <ul className=" ml-4 flex flex-col py-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 lg:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
                {headerData?.VMealsHeaderMenuList?.map((headerItem) => (
                  (headerItem.hasOwnProperty('VMealsHeaderSubMenuList') && headerItem?.VMealsHeaderSubMenuList.length > 0)
                    ?
                    <li className="relative">
                      <div
                        id="dropdownNavbarLink"
                        onClick={() => { controlSubMenu(headerItem?.VMealsHeaderMenuItemTitle) }}
                        data-dropdown-toggle="dropdownNavbar"
                        className="flex items-center  justify-between w-full py-2 pl-3 pr-4 font-medium text-black f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black md:border-0  md:p-0 md:w-auto  cursor-pointer  "
                      >
                        {headerItem?.VMealsHeaderMenuItemLinkURL !== "our-company" && <Link href={headerItem?.VMealsHeaderMenuItemLinkURL}>
                          {headerItem?.VMealsHeaderMenuItemTitle}
                        </Link>}
                        {headerItem?.VMealsHeaderMenuItemLinkURL == "our-company" && headerItem?.VMealsHeaderMenuItemTitle}
                        <svg
                          onClick={() => { controlSubMenu(headerItem?.VMealsHeaderMenuItemTitle) }}
                          className=" h-4 w-5 xl:w-5 xl:h-5 xl:mt-1"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div
                        id="dropdownNavbar"
                        className={`${openCloseSubMenu[headerItem?.VMealsHeaderMenuItemTitle] ? "" : "hidden"
                          }  z-10  block font-normal divide-y divide-gray-100 rounded shadow  md:absolute bg-white left-0 top-[40px] w-full md:w-[83px] lg:w-[124px]`
                        }

                      >
                        <ul
                          className="py-1  text-black f-f-b   "
                          aria-labelledby="dropdownLargeButton"
                        >
                          {headerItem?.VMealsHeaderSubMenuList.map((submenu) => (
                            <Link
                              href={`/${submenu?.VMealsHeaderSubMenuLinkURL ? submenu?.VMealsHeaderSubMenuLinkURL : ""}`}
                              className="block px-4 py-2 md:py-1 xl:py-2 hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-green f-f-b text-smtwo md:text-xsone lg:text-sm  "
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
                    href={headerData?.VMealsHeaderBlogTextLinkURL ? `${headerData?.VMealsHeaderBlogTextLinkURL}` : ""}
                    className="block py-2 pl-3 pr-4 text-black f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded hover:bg-green  hover:text-white md:hover:text-black  md:border-0  md:p-0 "
                  >
                    {/* Blog */}
                    {headerData?.VMealsHeaderBlogText}
                  </Link>
                </li>
                {/* <li className=" md:hidden">
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-black f-f-b  text-smtwo lg:text-base 2xl:text-lg rounded hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black  md:border-0  md:p-0 "
                  >
                    Arabic / English
                    {headerData?.VMealsLanguagesList?.[0]?.VMealsLanguagesItemTitle} / {headerData?.VMealsLanguagesList?.[1]?.VMealsLanguagesItemTitle}
                  </a>
                </li> */}

                <li className=" md:hidden">
                  <Link
                    href="/contact-us"
                    className="block py-2 pl-3 pr-4 text-black f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded hover:bg-green  hover:text-white md:hover:text-black  md:border-0  md:p-0 ">
                    Need Assistance?
                  </Link>

                </li>
                <li className=" md:hidden">
                  <a
                    href="/meal-plans"
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
                    href={headerData?.VMealsHeaderBlogTextLinkURL ? `${headerData?.VMealsHeaderBlogTextLinkURL}` : ""}
                    className="block pb-2 py-2 mt-4 pl-3 pr-4 text-black f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black  md:border-0  md:p-0  "
                  >
                    {headerData?.VMealsHeaderBlogText}
                  </Link>
                </li>
                <li className=" ">
                  <Link
                    href="/contact-us"
                    className="block pb-2 py-2 mt-4 pl-3 pr-4 text-black f-f-b  text-smtwo xl:text-base 2xl:text-lg rounded hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black  md:border-0  md:p-0  "
                  >
                    Need Assistance?
                  </Link>
                </li>

                <li>
                  <a
                    href="#"
                    className="block pb-2 py-2 mt-4 pl-3 pr-4 text-black f-f-b  text-smtwo lg:text-base 2xl:text-lg rounded hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black  md:border-0  md:p-0  "
                  >
                    {/* Arabic / English */}
                    {/* {headerData?.VMealsLanguagesList?.[0]?.VMealsLanguagesItemTitle} / {headerData?.VMealsLanguagesList?.[1]?.VMealsLanguagesItemTitle} */}
                  </a>
                </li>
                <li>
                  <a
                    href="/meal-plans"
                    className="block py-4   f-f-b  text-smtwo lg:text-sm xl:text-base 2xl:text-lg rounded-[100px]   green-gradiant-2 px-6 lg:px-10  text-white  "
                  >
                    {/* Get Started */}
                    {headerData?.VMealsHeaderButtonText}
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-white  shadow-lg w-[70px] h-[70px] md:h-[74px] md:w-[74px]  lg:h-[120px] lg:w-[120px] xl:h-[140px] xl:w-[140px] 2xl:h-[183px] 2xl:w-[183px] rounded-full absolute left-[40%] md:left-[44%] top-[-9px] md:top-[40px] lg:top-4 z-0 ">
              <Link  href={headerData?.VMealsHeaderLogoImageLinkURL ? headerData?.VMealsHeaderLogoImageLinkURL : ""}>
                <img
                  src={`${ImageBaseURL}${headerData?.VMealsHeaderLogoImage?.url}`}
                  alt={headerData?.VMealsHeaderLogoImage?.alt}
                  className=" w-[58px] h-[32px] md:w-[60px] md:h-auto lg:w-[85px]  2xl:w-[154px] 2xl:h-[84px] relative top-[17px]  md:top-[24px] left-2 lg:top-[39px] xl:top-[50px] 2xl:top-14 lg:left-4"
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
    //console.log('header fetching')
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