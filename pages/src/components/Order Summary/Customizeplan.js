import React from "react";
import Link from "next/link";
export default function Customizeplan() {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto mt-10 md:my-20">
        {/* code testing */}
        <div className="no-scrollbar overflow-x-auto">
          <div className=" planscrol hidescrol ">
            <div className="grid grid-cols-10  lg:gap-4  border-2 border-green   rounded-full bg-white shadow-lg ">
              <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                <div className="relative">
                  <Link href="/ourplans">
                    <button class="  text-smtwo md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-black  rounded-full    px-[32px] md:px-[25px] addwidth pb-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:h-[74px]">
                      <ul className="inline-flex">
                        <li>
                          <img
                            src="/images/choose-plan-inactive-diet.png"
                            className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                          />
                        </li>
                        <li className="mt-2 md:mt-3 ml-2 lg:ml-4">
                          Select Plan
                        </li>
                      </ul>
                    </button>
                  </Link>
                  <img
                    src="/images/arrowplans.png"
                    className="  w-[36px] xl:w-[60px] absolute top-[50%] right-[31px] md:right-[21px]  lg:right-6 "
                  />
                </div>
              </div>
              {/*  */}
              <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                <Link href="/classicdiet">
                  <div className="relative">
                    <button class=" text-smtwo md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-black  rounded-full    px-[32px] md:px-[25px] addwidth py-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:h-[74px]">
                      <ul className="inline-flex">
                        <li>
                          <img
                            src="/images/customize-inactive.png"
                            className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-1 lg:mt-2 2xl:mt-3  "
                          />
                        </li>
                        <li className="mt-1 md:mt-2 lg:mt-3 ml-2 lg:ml-4">
                          Customise Plan
                        </li>
                      </ul>
                    </button>
                    <img
                      src="/images/arrowplans.png"
                      className="  w-[36px] xl:w-[60px] absolute top-[50%] right-3 lg:right-0 "
                    />
                  </div>
                </Link>
              </div>
              <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                <div className="relative">
                  <Link href="/personalInformation">
                    <button class=" text-smtwo md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-black  rounded-full    px-[32px] md:px-[12px] addwidth py-[3px] lg:py-[6px] 2xl:px-[20px] 2xl:h-[74px]">
                      <ul className="inline-flex">
                        <li>
                          <img
                            src="/images/Sign-Up-Login-inactive.png"
                            className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-1 lg:mt-2 2xl:mt-3  "
                          />
                        </li>
                        <li className="mt-1 md:mt-2 lg:mt-3 ml-2 lg:ml-4">
                          Personal Information
                        </li>
                      </ul>
                    </button>
                  </Link>
                  <img
                    src="/images/arrowplans.png"
                    className="  w-[36px] xl:w-[60px] absolute top-[50%] right-0 md:right-[10px]  lg:right-[14px] xl:right-[1px] 2xl:right-[5px] "
                  />
                </div>
              </div>
              <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                <div className="relative">
                  <Link href="/deliveryInformation">
                    <button class=" text-smtwo md:text-xstwo   lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-black  rounded-full    px-[32px] md:px-[12px] addwidth pb-[3px] lg:py-[6px] 2xl:px-[25px] 2xl:h-[74px]">
                      <ul className="inline-flex">
                        <li>
                          <img
                            src="/images/delivery-icon-inactive.png"
                            className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                          />
                        </li>
                        <li className="mt-2 md:mt-3 ml-2 lg:ml-4">
                          Delivery Information
                        </li>
                      </ul>
                    </button>
                  </Link>
                  <img
                    src="/images/arrowplans.png"
                    className="  w-[36px] xl:w-[60px] absolute top-[50%] right-[7px] md:right-[-6px]  lg:right-0 xl:-right-4  2xl:right-[9px]  "
                  />
                </div>
              </div>
              <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                <Link href="/ordersummary">
                  <div className="text-right">
                    <button class=" text-smtwo md:text-xstwo sub lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-white  rounded-full    px-[37px]  md:px-[29px] lg:px-[47px] xl:px-[38px] addwidth pb-[3px] lg:py-[6px] 2xl:px-[71px] 2xl:h-[74px]">
                      <ul className="inline-flex">
                        <li>
                          <img
                            src="/images/summary-active 1.png"
                            className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                          />
                        </li>
                        <li className="mt-2 md:mt-3 ml-2 lg:ml-4">
                          Order Summary
                        </li>
                      </ul>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* code testing ended */}
        <div className=" md:w-8/12 ml-auto mr-auto lg:w-full ">
          <div className="grid grid-cols-12 gap-8 my-10 2xl:my-20    ">
            <div className="   col-span-12 lg:col-span-6   xl:col-span-4  ">
              <div className=" bg-white-light h-[631px] 2xl:h-[759px] rounded-[100px] w-full p-6">
                <h1 className=" text-green f-f-b text-2xl 2xl:text-6xl text-center">
                  Plan Information
                </h1>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Plan Name:{" "}
                  <span className=" float-right  f-f-r ">Classic Diet</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Diet Type:<span className=" float-right  f-f-r ">N/A</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Portion Size:
                  <span className=" float-right  f-f-r ">
                    2400kCal - 3000kCal | Athlete
                  </span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Deliveries per week:
                  <span className=" float-right  f-f-r ">5 Days</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Off-Day(s):
                  <span className=" float-right  f-f-r ">
                    Saturday - Sunday
                  </span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Plan Duration:
                  <span className=" float-right  f-f-r ">8 weeks</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Meal Type:
                  <span className=" float-right  f-f-r ">
                    Breakfast + Lunch + Dinner + Snack + Drink
                  </span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Allergies:
                  <span className=" float-right  f-f-r ">
                    Seafood, Red Meat, Green Beans, White Potato{" "}
                  </span>{" "}
                </h2>

                <div className="grid grid-cols-12 mt-6 ">
                  <div className="   col-span-3  ">
                    <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                      Add On:{" "}
                    </h2>
                  </div>
                  <div className="   col-span-5  ">
                    <h2 className=" text-black text-sm 2xl:text-base text-center  f-f-r ">
                      Eco-Friendly Cutlery
                    </h2>
                    <h2 className=" text-black text-sm 2xl:text-base text-center  f-f-r mt-4 ">
                      Thermal Bags (x2)
                    </h2>
                  </div>
                  <div className="   col-span-4  ">
                    <h2 className=" text-black text-sm 2xl:text-base text-center  f-f-r ">
                      + AED50.00
                    </h2>
                    <h2 className=" text-black text-sm 2xl:text-base text-center  f-f-r mt-4 ">
                      + AED200.00 (Refundable Deposit)
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="   col-span-12 lg:col-span-6  hidden xl:block xl:col-span-4  ">
              <div className=" bg-white-light h-[400px] 2xl:h-[467px] rounded-[100px] w-full p-6">
                <h1 className=" text-green f-f-b text-2xl 2xl:text-6xl text-center">
                  Personal Information
                </h1>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Last Name: <span className=" float-right  f-f-r ">John</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Diet Type:<span className=" float-right  f-f-r ">Doe</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Email Address:
                  <span className=" float-right  f-f-r ">
                    johndoe@gmail.com
                  </span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Mobile Number:
                  <span className=" float-right  f-f-r ">+971 XX XXX XXXX</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Date of Birth:
                  <span className=" float-right  f-f-r ">01/01/1990</span>{" "}
                </h2>
              </div>

              {/* input filed  */}
              <div className="mt-10 relative ">
                <input
                  placeholder="Enter Coupon Code..."
                  class=" input-register 2xl:h-[70px] "
                />
                <button class=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub  px-[47px] sm:px-[50px] py-[13px] sm:py-[11px]  2xl:w-[219px]  lg:py-[11px] xl:h-[49px] 2xl:h-[70px] mt-5 2xl:mt-8  absolute right-[-11px] top-[-20px] 2xl:top-[-32px] rounded-[100px] ">
                  Apply Code
                </button>
              </div>
              {/* input filed ended */}
              <div className="grid grid-cols-12 mt-6 gap-4 ">
                <div className="   col-span-6  ">
                  <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                    Discount:<span className=" f-f-r float-right ">15%</span>{" "}
                  </h2>
                </div>
                <div className="   col-span-6  ">
                  <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                    Sub-Total:
                    <span className=" f-f-r float-right ">AED2550.00</span>{" "}
                  </h2>
                </div>
                <div className="   col-span-6  ">
                  <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                    Discount Amount:
                    <span className=" f-f-r float-right ">AED450.00</span>{" "}
                  </h2>
                </div>
                <div className="   col-span-6  ">
                  <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                    VAT:<span className=" f-f-r float-right ">AED127.50</span>{" "}
                  </h2>
                </div>
              </div>

              <div
                class=" ml-auto mr-auto w-8/12  md:w-5/12 lg:w-4/12 xl:w-6/12  "
                bis_skin_checked="1"
              >
                <ul class=" inline-flex mt-7  ">
                  <li>
                    <h2 class=" text-black text-2xl f-f-b ">Total:</h2>
                  </li>
                  <li class=" ml-4 text-right ">
                    <h2 class=" text-black text-2xl f-f-b ">AED3050.00</h2>
                    <h3 class="text-green f-f-r text-sm 2xl:text-tiny -mt-2 ">
                      Price inclusive of VAT
                    </h3>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-12 gap-8  md:mt-10   ">
                <div className="   col-span-6 xl:col-span-6 ">
                  <div className="text-center">
                    <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-green shadow-lg border border-green bg-white rounded-full px-[47px] sm:px-[50px] py-[15px] sm:py-[17px] 2xl:px-[79px] 2xl:py-[25px] mt-5 2xl:mt-8">
                      Back
                    </button>
                  </div>
                </div>
                <div className="   col-span-6 xl:col-span-6 ">
                  <div className="text-center">
                    <Link href="/confirmation">
                      <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full px-[47px] sm:px-[50px] py-[15px] sm:py-[17px] 2xl:px-[79px] 2xl:py-[25px] mt-5 2xl:mt-8">
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="   col-span-12  lg:col-span-6   xl:col-span-4 ">
              <div className=" bg-white-light h-[525px]  md:h-[631px] 2xl:h-[759px] rounded-[100px] w-full p-6">
                <h1 className=" text-green f-f-b text-2xl 2xl:text-6xl text-center">
                  Delivery Information
                </h1>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Starting Date:{" "}
                  <span className=" float-right  f-f-r ">04/10/2022</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  City:<span className=" float-right  f-f-r ">Dubai</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Address:
                  <span className=" float-right  f-f-r ">
                    Business Bay, Oxford Tower
                  </span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Apartment/Villa Number:
                  <span className=" float-right  f-f-r ">506</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Access Code:<span className=" float-right  f-f-r ">N/A</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Delivery Slot:
                  <span className=" float-right  f-f-r ">12:00am - 4:00am</span>{" "}
                </h2>

                <div className="grid grid-cols-12 mt-6 w-full ">
                  <div className="   col-span-12  xl:col-span-4  ">
                    <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                      Google Maps Link:{" "}
                    </h2>
                  </div>
                  <div className="   col-span-12  xl:col-span-8  ">
                    <h2 className=" text-black text-sm 2xl:text-base  text-right f-f-r ">
                      https://goo.gl/maps wvkgM2pBi8518zTa9
                    </h2>
                  </div>
                </div>

                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Delivery Instructions:
                  <span className=" float-right  f-f-r ">
                    Please call before delivering!
                  </span>{" "}
                </h2>
              </div>
            </div>

            <div className="   col-span-12 lg:col-start-4 lg:col-end-10  xl:hidden xl:col-span-4  ">
              <div className=" bg-white-light h-[400px] 2xl:h-[467px] rounded-[100px] w-full p-6">
                <h1 className=" text-green f-f-b text-2xl 2xl:text-6xl text-center">
                  Personal Information
                </h1>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Last Name: <span className=" float-right  f-f-r ">John</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Diet Type:<span className=" float-right  f-f-r ">Doe</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Email Address:
                  <span className=" float-right  f-f-r ">
                    johndoe@gmail.com
                  </span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Mobile Number:
                  <span className=" float-right  f-f-r ">+971 XX XXX XXXX</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Date of Birth:
                  <span className=" float-right  f-f-r ">01/01/1990</span>{" "}
                </h2>
              </div>

              {/* input filed  */}
              <div className="mt-10 relative ">
                <input
                  placeholder="Enter Coupon Code..."
                  class=" input-register 2xl:h-[70px] "
                />
                <button class=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub  px-[47px] sm:px-[50px] py-[13px] sm:py-[11px]  2xl:w-[219px]  lg:py-[11px] xl:h-[49px] 2xl:h-[70px] mt-5 2xl:mt-8  absolute right-[-11px] top-[-20px] 2xl:top-[-32px] rounded-[100px] ">
                  Apply Code
                </button>
              </div>
              {/* input filed ended */}
              <div className="grid grid-cols-12 mt-6 gap-4 ">
                <div className="   col-span-6  ">
                  <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                    Discount:<span className=" f-f-r float-right ">15%</span>{" "}
                  </h2>
                </div>
                <div className="   col-span-6  ">
                  <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                    Sub-Total:
                    <span className=" f-f-r float-right ">AED2550.00</span>{" "}
                  </h2>
                </div>
                <div className="   col-span-6  ">
                  <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                    Discount Amount:
                    <span className=" f-f-r float-right ">AED450.00</span>{" "}
                  </h2>
                </div>
                <div className="   col-span-6  ">
                  <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                    VAT:<span className=" f-f-r float-right ">AED127.50</span>{" "}
                  </h2>
                </div>
              </div>

              <div
                class=" ml-auto mr-auto w-8/12  md:w-5/12 lg:w-4/12 xl:w-6/12  "
                bis_skin_checked="1"
              >
                <ul class=" inline-flex mt-7  ">
                  <li>
                    <h2 class=" text-black text-2xl f-f-b ">Total:</h2>
                  </li>
                  <li class=" ml-4 text-right ">
                    <h2 class=" text-black text-2xl f-f-b ">AED3050.00</h2>
                    <h3 class="text-green f-f-r text-sm 2xl:text-tiny -mt-2 ">
                      Price inclusive of VAT
                    </h3>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-12 gap-8  md:mt-10   ">
                <div className="   col-span-6 xl:col-span-6 ">
                  <div className="text-center">
                    <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-green shadow-lg border border-green bg-white rounded-full px-[47px] sm:px-[50px] py-[15px] sm:py-[17px] 2xl:px-[79px] 2xl:py-[25px] mt-5 2xl:mt-8">
                      Back
                    </button>
                  </div>
                </div>
                <div className="   col-span-6 xl:col-span-6 ">
                  <div className="text-center">
                    <Link href="/confirmation">
                      <button className="text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full px-[47px] sm:px-[50px] py-[15px] sm:py-[17px] 2xl:px-[79px] 2xl:py-[25px] mt-5 2xl:mt-8">
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
