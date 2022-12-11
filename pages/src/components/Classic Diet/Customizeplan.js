import React, { useEffect, useState } from "react";

import Link from "next/link";
import Steps from "../Our Plans/Steps";
import { vmealsPages } from "../../../../src/lib/APICommunications";
import PlanData from '../../../../src/lib/data/meal-plans/data.json'
import RTFMapping from "../Common/RTFMapping";

export default function Customizeplan({ heading, description, selectedPlan }) {
  const [selectedPortion, setSelectedPortion] = useState(PlanData[selectedPlan]?.portions[0])
  const [openTab, setOpenTab] = React.useState(1);



  console.log("selected Portion 2", selectedPortion)
  const getCustomizeActiveClass = (selected, checked, type) => {
    console.log("SELECTED", selected);
    if (type == "days") {
      return selected?.days == checked?.days ? "cusntn" : "";
    } else if (type == "name") {
      return selected?.name == checked?.name ? "cusntn" : "";
    } else {
      return selected?.id == checked?.id ? "cusntn" : "";
    }
  };

  return (
    <>
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto my-10 md:my-20">
        {/* code testing */}
        <Steps step={2} />
        {/* code testing ended */}

        <div className="grid grid-cols-12 gap-8  mt-10 lg:mt-20   ">
          <div className="   col-span-12  xl:col-span-6  ">
            <h1 class="  text-base  sm:text-2xl  2xl:text-4xl f-f-li  captalize text-green tracking-[1px] lg:tracking-[0.22em]  text-center xl:text-left  md:leading-[56px] uppercase ">
              {heading}
            </h1>
            <RTFMapping data={description} />
          </div>
          <div className="   col-span-12  xl:col-span-6  ">
            <div className="bg-green-light p-4 md:p-8 rounded-[20px]  ">
              <ul className="inline-flex w-full ">
                <li>
                  <h2 class=" text-green f-f-b text-center md:text-left text-base mt-3  md:text-3xl 2xl:text-5xl md:mt-5  ">
                    Customise your plan
                  </h2>
                </li>
                <li className="text-right ml-auto ">
                  <button class="green-gradiant shadow-lg f-f-b text-sm md:text-base 2xl:text-lg text-white   w-[136px]  h-[49px] md:w-[182px]  md:h-[60px] 2xl:h-[79px]  2xl:w-[219px]  rounded-full  ">
                    <ul className="inline-flex">
                      <li>
                        <img
                          src="/images/menu 1.png"
                          className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[27px] 2xl:w-[40px] h-auto mt-2 2xl:mt-2  "
                        />
                      </li>
                      <li className="mt-1 md:mt-3 2xl:mt-4 ml-2 lg:ml-4">
                        Weekly Menu
                      </li>
                    </ul>
                  </button>
                </li>
              </ul>

              <h1 className=" f-f-b text-black  text-lg 2xl:text-2xl mt-8 ">
                Choose your portion size
              </h1>

              <div className="grid grid-cols-12  my-4 border border-green shadow-xl rounded-[20px] bg-white ">
                {PlanData[selectedPlan]?.portions?.map(p => (
                  <div className="   col-span-12  md:col-span-6  ">
                    <button
                      className={`${getCustomizeActiveClass(selectedPortion, p, "id")} w-full h-[47px] md:h-[59px] 2xl:h-[68px]  pt-1 `}
                      onClick={() => {
                        setSelectedPortion(p)
                      }}>
                      <ul>
                        <li>
                          <h1 className=" text-black f-f-b text-sm 2xl:text-base ">
                            {" "}
                            {p?.caloriesRange}
                          </h1>
                        </li>
                        <li>
                          <h1 className=" text-black f-f-b text-smtwo 2xl:text-tiny ">
                            {p?.name}
                          </h1>
                        </li>
                      </ul>
                    </button>
                  </div>
                ))}
                {/* <div className="   col-span-12  md:col-span-6  ">
                  <button className="  w-full h-[47px] md:h-[59px] 2xl:h-[68px]  pt-1 ">
                    <ul>
                      <li>
                        <h1 className=" text-black f-f-b text-sm 2xl:text-base ">
                          {" "}
                          2000kCal - 2400kCal
                        </h1>
                      </li>
                      <li>
                        <h1 className=" text-black f-f-b text-smtwo 2xl:text-tiny ">
                          Muscle Gain
                        </h1>
                      </li>
                    </ul>
                  </button>
                </div>
                <div className="   col-span-12  md:col-span-6  ">
                  <button className="  w-full h-[47px] md:h-[59px] 2xl:h-[68px]  pt-1 ">
                    <ul>
                      <li>
                        <h1 className=" text-black f-f-b text-sm 2xl:text-base ">
                          1600kCal - 2000kCal
                        </h1>
                      </li>
                      <li>
                        <h1 className=" text-black f-f-b text-smtwo 2xl:text-tiny ">
                          Wellness
                        </h1>
                      </li>
                    </ul>
                  </button>
                </div>
                <div className="   col-span-12  md:col-span-6  ">
                  <button className="  w-full h-[47px] md:h-[59px] 2xl:h-[68px]  pt-1 ">
                    <ul>
                      <li>
                        <h1 className=" text-black f-f-b text-sm 2xl:text-base ">
                          {" "}
                          1200kCal - 1600kCal
                        </h1>
                      </li>
                      <li>
                        <h1 className=" text-black f-f-b text-smtwo 2xl:text-tiny ">
                          Weight Loss
                        </h1>
                      </li>
                    </ul>
                  </button>
                </div> */}
              </div>
              <h1 className=" f-f-b text-black  text-lg 2xl:text-2xl mt-8 ">
                Choose deliveries per week{" "}
              </h1>

              <div className="grid grid-cols-12  my-4 border border-green shadow-xl rounded-[20px] bg-white ">
                <div className="   col-span-4  ">
                  <button className=" cusntn w-full h-[47px] md:h-[59px] 2xl:h-[68px]   ">
                    <h1 className=" text-black f-f-b text-sm 2xl:text-base ">
                      {" "}
                      5 days/week
                    </h1>
                  </button>
                </div>
                <div className="   col-span-4  ">
                  <button className="  w-full h-[47px] md:h-[59px] 2xl:h-[68px]   ">
                    <h1 className=" text-black f-f-b text-sm 2xl:text-base ">
                      {" "}
                      6 days/week
                    </h1>
                  </button>
                </div>
                <div className="   col-span-4  ">
                  <button className="  w-full h-[47px] md:h-[59px] 2xl:h-[68px]   ">
                    <h1 className=" text-black f-f-b text-sm 2xl:text-base ">
                      {" "}
                      7 days/week
                    </h1>
                  </button>
                </div>
              </div>
              <h1 className=" f-f-b text-black  text-lg 2xl:text-2xl mt-8 ">
                Choose your off days(s){" "}
              </h1>

              <div className="grid grid-cols-12  my-4 border border-green shadow-xl rounded-[20px] bg-white ">
                <div className="   col-span-6  ">
                  <button className=" cusntn w-full h-[47px] md:h-[59px] 2xl:h-[68px]   ">
                    <h1 className=" text-black f-f-b text-sm 2xl:text-base ">
                      Friday - Saturday
                    </h1>
                  </button>
                </div>
                <div className="   col-span-6  ">
                  <button className="  w-full h-[47px] md:h-[59px] 2xl:h-[68px]   ">
                    <h1 className=" text-black f-f-b text-sm 2xl:text-base ">
                      {" "}
                      Saturday - Sunday
                    </h1>
                  </button>
                </div>
              </div>

              <h1 className=" f-f-b text-black  text-lg 2xl:text-2xl mt-8 ">
                Choose plan duration
              </h1>

              <div className="grid grid-cols-12  my-4 border border-green shadow-xl rounded-[20px] bg-white ">
                <div className="   col-span-6  ">
                  <button className="  w-full h-[47px] md:h-[59px] 2xl:h-[68px]   ">
                    <h1 className=" text-black f-f-b text-sm 2xl:text-base ">
                      {" "}
                      1 week
                    </h1>
                  </button>
                </div>
                <div className="   col-span-6  ">
                  <button className=" cusntn w-full h-[47px] md:h-[59px] 2xl:h-[68px]   ">
                    <h1 className=" text-black f-f-b text-sm 2xl:text-base ">
                      4 week
                    </h1>
                  </button>
                </div>
                <div className="   col-span-6  ">
                  <button className="  w-full h-[47px] md:h-[59px] 2xl:h-[68px]   ">
                    <h1 className=" text-black f-f-b text-sm 2xl:text-base ">
                      {" "}
                      8 weeks
                    </h1>
                  </button>
                </div>
                <div className="   col-span-6  ">
                  <button className="  w-full h-[47px] md:h-[59px] 2xl:h-[68px]   ">
                    <h1 className=" text-black f-f-b text-sm 2xl:text-base ">
                      {" "}
                      12 weeks
                    </h1>
                  </button>
                </div>
              </div>
              <h1 className=" f-f-b text-black  text-lg 2xl:text-2xl mt-8 ">
                Choose plan duration
              </h1>
              <div className=" my-4 border border-green shadow-xl rounded-[20px] bg-white">
                <button className="  w-full h-[47px] md:h-[59px] 2xl:h-[68px] relative  ">
                  <h1 className=" text-black f-f-b text-sm 2xl:text-base hidden md:block ">
                    Breakfast + Lunch + Dinner + Snack + Drink{" "}
                  </h1>
                  <h1 className=" text-black f-f-b text-sm 2xl:text-base  md:hidden">
                    Breakfast + Lunch + Dinner{" "}
                  </h1>
                  <svg
                    width="36"
                    height="36"
                    className=" absolute top-[6px] md:top-[15px] right-[17px] "
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.6253 23.3015L27.9574 16.6136C28.3458 16.2033 28.5552 15.6554 28.5396 15.0907C28.5241 14.5259 28.2848 13.9904 27.8744 13.6021C27.464 13.2137 26.9162 13.0043 26.3514 13.0199C25.7867 13.0354 25.2512 13.2747 24.8629 13.6851L18.5321 20.3729C18.468 20.4408 18.3911 20.4954 18.3059 20.5336C18.2206 20.5717 18.1287 20.5927 18.0353 20.5952C17.942 20.5978 17.849 20.5819 17.7618 20.5484C17.6746 20.515 17.5948 20.4647 17.5271 20.4004L10.8406 14.0682C10.4304 13.6797 9.8827 13.47 9.31791 13.4853C8.75313 13.5006 8.21756 13.7396 7.82902 14.1498C7.44048 14.56 7.23079 15.1077 7.24609 15.6725C7.26139 16.2373 7.50042 16.7729 7.9106 17.1614L14.5985 23.4935C15.5566 24.3982 16.8344 24.886 18.1516 24.85C19.4688 24.814 20.718 24.2571 21.6253 23.3015V23.3015Z"
                      fill="#41A53D"
                    />
                  </svg>
                </button>
              </div>
              <h1 className=" f-f-b text-black  text-lg 2xl:text-2xl mt-8 ">
                Select your allergies (5 maximum)
              </h1>
              <div className=" my-4 border border-green shadow-xl rounded-[20px] bg-white">
                <button className="  w-full h-[47px] md:h-[59px] 2xl:h-[68px] relative  ">
                  <h1 className=" text-black f-f-b text-sm 2xl:text-base ">
                    Breakfast{" "}
                  </h1>

                  <svg
                    width="36"
                    height="36"
                    className=" absolute top-[6px] md:top-[15px] right-[17px] "
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.6253 23.3015L27.9574 16.6136C28.3458 16.2033 28.5552 15.6554 28.5396 15.0907C28.5241 14.5259 28.2848 13.9904 27.8744 13.6021C27.464 13.2137 26.9162 13.0043 26.3514 13.0199C25.7867 13.0354 25.2512 13.2747 24.8629 13.6851L18.5321 20.3729C18.468 20.4408 18.3911 20.4954 18.3059 20.5336C18.2206 20.5717 18.1287 20.5927 18.0353 20.5952C17.942 20.5978 17.849 20.5819 17.7618 20.5484C17.6746 20.515 17.5948 20.4647 17.5271 20.4004L10.8406 14.0682C10.4304 13.6797 9.8827 13.47 9.31791 13.4853C8.75313 13.5006 8.21756 13.7396 7.82902 14.1498C7.44048 14.56 7.23079 15.1077 7.24609 15.6725C7.26139 16.2373 7.50042 16.7729 7.9106 17.1614L14.5985 23.4935C15.5566 24.3982 16.8344 24.886 18.1516 24.85C19.4688 24.814 20.718 24.2571 21.6253 23.3015V23.3015Z"
                      fill="#41A53D"
                    />
                  </svg>
                </button>
              </div>
              <h1 className=" f-f-b text-black  text-lg 2xl:text-2xl mt-8 ">
                Add Ons
              </h1>

              <div className="my-4">
                <form action="/action_page.php">
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                        className=" checkinpu "
                      />
                      <label
                        for="vehicle1"
                        className="text-black f-f-b text-sm 2xl:text-base ml-4"
                      >
                        {" "}
                        Eco-Friendly Cutlery + AED50.00{" "}
                      </label>
                    </li>
                    <li className=" mt-4">
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                        className=" checkinpu "
                      />
                      <label
                        for="vehicle2"
                        className="text-black f-f-b text-sm 2xl:text-base ml-4"
                      >
                        Thermal Bags (x2) + AED200.00 (Refundable Deposit)
                      </label>
                    </li>
                  </ul>

                  <ul></ul>
                </form>
              </div>
              <div className="grid grid-cols-12 gap-8  md:mt-8   ">
                <div className="   col-span-6 xl:col-span-6 ">
                  <ul class=" inline-flex mt-7  ">
                    <li><h2 class=" text-black text-2xl f-f-b ">Total:</h2></li>
                    <li class=" ml-4 text-right ">
                      <h2 class=" text-black text-base md:text-2xl f-f-b ">AED3050.00</h2>
                      <h3 class="text-green f-f-r text-xsone md:text-sm 2xl:text-tiny -mt-2 ">Price inclusive of VAT</h3>
                    </li>
                  </ul>
                </div>
                <div className="   col-span-6 xl:col-span-6 ">
                  <div className="text-center">
                    <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full px-[47px] sm:px-[50px] py-[15px] sm:py-[17px] 2xl:w-[219px] 2xl:h-[79px] mt-5 2xl:mt-8">
                      Next
                    </button>
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

export async function getServerSideProps() {
  try {

    let contentData = await fetch(vmealsPages)
    let data = await contentData.json()
    console.log("slider bar ->>", data)

    return {
      props: { contentData: { ...data?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { contentData: [] }
    }
  }

}