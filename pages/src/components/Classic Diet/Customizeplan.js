import React from "react";

import Link from "next/link";

export default function Customizeplan() {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto my-20">
        {/* code testing */}
        <div className="no-scrollbar overflow-x-auto">
          <div className=" planscrol ">
            <div className="grid grid-cols-10  lg:gap-4  border-2 border-green   rounded-full bg-white shadow-lg ">
              <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                <div className="relative">
                  <Link href="/ourplans">
                    <button class="  text-smtwo md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-b text-black  rounded-full    px-[32px] md:px-[25px] addwidth pb-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:py-[20px]">
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
              <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                <div className="relative">
                  <Link href="/classicdiet">
                    <button class=" text-smtwo md:text-xstwo  sub lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-white  rounded-full    px-[32px] md:px-[25px] addwidth pb-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:py-[20px]">
                      <ul className="inline-flex">
                        <li>
                          <img
                            src="/images/customize-active 1clasic.png"
                            className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                          />
                        </li>
                        <li className="mt-2 md:mt-3 ml-2 lg:ml-4">
                          Customise Plan
                        </li>
                      </ul>
                    </button>
                  </Link>
                  <img
                    src="/images/arrowplans.png"
                    className="  w-[36px] xl:w-[60px] absolute top-[50%] right-[-6px]  lg:right-0 xl:-right-4  2xl:-right-7  "
                  />
                </div>
              </div>

              <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                <div className="relative">
                  <Link href="/personalInformation">
                    <button class=" text-smtwo md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-black  rounded-full    px-[32px] md:px-[25px] addwidth pb-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:py-[20px]">
                      <ul className="inline-flex">
                        <li>
                          <img
                            src="/images/Sign-Up-Login-inactive.png"
                            className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                          />
                        </li>
                        <li className="mt-2 md:mt-3 ml-2 lg:ml-4">
                          Personal Information
                        </li>
                      </ul>
                    </button>
                  </Link>
                  <img
                    src="/images/arrowplans.png"
                    className="  w-[36px] xl:w-[60px] absolute top-[50%] right-0  lg:-right-4 2xl:-right-6 "
                  />
                </div>
              </div>
              <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                <div className="relative">
                  <button class=" text-smtwo md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-black  rounded-full    px-[32px] md:px-[25px] addwidth pb-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:py-[20px]">
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
                  <img
                    src="/images/arrowplans.png"
                    className="  w-[36px] xl:w-[60px] absolute top-[50%] right-0  lg:-right-4 2xl:-right-6 "
                  />
                </div>
              </div>
              <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                <button class=" text-smtwo md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-black  rounded-full    px-[32px] md:px-[25px] addwidth pb-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:py-[20px]">
                  <ul className="inline-flex">
                    <li>
                      <img
                        src="/images/summary-inactive.png"
                        className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                      />
                    </li>
                    <li className="mt-2 md:mt-3 ml-2 lg:ml-4">Order Summary</li>
                  </ul>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* code testing ended */}

        <div className="grid grid-cols-12 gap-8   mt-20   ">
          <div className="   col-span-12  xl:col-span-6  ">
            <h1 class="  text-base  sm:text-2xl  2xl:text-4xl f-f-li  captalize text-green tracking-[1px] lg:tracking-[0.22em]  text-center xl:text-left  leading-[56px] uppercase ">
              (H2) Lorem ipsum dolor sit amet consectetur adipiscing
            </h1>
            <h2 class="   f-f-r text-black text-tiny  2xl:text-lg mt-2 md:mt-7  text-center xl:text-left leading-[25px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              tellus cras adipiscing enim eu turpis egestas. Semper eget duis at
              tellus at urna condimentum mattis. Maecenas accumsan lacus vel
              facilisis. Elementum nibh tellus molestie nunc non blandit.
              Dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in. Venenatis tellus in metus vulputate eu scelerisque
              felis. Ut pharetra sit amet aliquam id diam maecenas. Metus
              vulputate eu scelerisque felis imperdiet proin fermentum leo vel.
              Eu non diam phasellus vestibulum lorem sed risus ultricies
              tristique. Quis commodo odio aenean sed adipiscing diam donec
              adipiscing. Placerat vestibulum lectus mauris ultrices eros in
              cursus turpis massa. Scelerisque felis imperdiet proin fermentum
              leo vel orci porta non. Tellus in hac habitasse platea dictumst
              vestibulum rhoncus est pellentesque.
            </h2>
            <h2 class="   f-f-r text-black text-tiny  2xl:text-lg mt-2 md:mt-7 leading-[25px] text-center xl:text-left ">
              Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc
              consequat. Vulputate sapien nec sagittis aliquam malesuada
              bibendum arcu vitae. Lorem ipsum dolor sit amet consectetur
              adipiscing elit. Malesuada proin libero nunc consequat interdum
              varius. Auctor urna nunc id cursus metus aliquam. Egestas pretium
              aenean pharetra magna. Consequat mauris nunc congue nisi vitae
              suscipit tellus mauris. Elementum sagittis vitae et leo. Ipsum
              dolor sit amet consectetur. Amet dictum sit amet justo donec enim.
              Bibendum arcu vitae elementum curabitur. Aliquet risus feugiat in
              ante metus. Ullamcorper a lacus vestibulum sed arcu. Sed blandit
              libero volutpat sed cras. Euismod nisi porta lorem mollis aliquam
              ut porttitor. Vel elit scelerisque mauris pellentesque. Velit
              egestas dui id ornare arcu odio ut sem. Phasellus egestas tellus
              rutrum tellus pellentesque.
            </h2>
            <h2 class="   f-f-r text-black text-tiny  2xl:text-lg mt-2 md:mt-7 leading-[25px] text-center xl:text-left ">
              Porta nibh venenatis cras sed felis eget velit aliquet. Mauris
              pharetra et ultrices neque ornare aenean euismod. Ut diam quam
              nulla porttitor. Quis blandit turpis cursus in hac habitasse
              platea dictumst. Velit euismod in pellentesque massa placerat duis
              ultricies lacus sed. Faucibus a pellentesque sit amet. Vulputate
              mi sit amet mauris commodo quis imperdiet massa tincidunt.
              Adipiscing enim eu turpis egestas pretium aenean pharetra magna
              ac. Diam sit amet nisl suscipit adipiscing bibendum est ultricies
              integer. Nulla facilisi etiam dignissim diam quis enim lobortis
              scelerisque fermentum.
            </h2>
            <h2 class="   f-f-r text-black text-tiny  2xl:text-lg mt-2 md:mt-7 leading-[25px] text-center xl:text-left ">
              Lacinia quis vel eros donec. Diam phasellus vestibulum lorem sed
              risus ultricies tristique nulla aliquet. Massa sapien faucibus et
              molestie ac feugiat sed. Mattis nunc sed blandit libero volutpat
              sed. Donec enim diam vulputate ut pharetra sit amet aliquam. Ac
              tortor vitae purus faucibus ornare suspendisse sed nisi lacus.
              Mattis nunc sed blandit libero volutpat sed. Ultrices gravida
              dictum fusce ut placerat orci nulla pellentesque. Ornare lectus
              sit amet est placerat in. Est lorem ipsum dolor sit amet
              consectetur adipiscing. Aliquet enim tortor at auctor urna nunc id
              cursus metus. Rhoncus mattis rhoncus urna neque viverra. Quis
              varius quam quisque id diam vel quam elementum. Sit amet massa
              vitae tortor condimentum lacinia quis. Nulla facilisi morbi tempus
              iaculis urna id volutpat lacus.
            </h2>
            <h2 class="   f-f-r text-black text-tiny  2xl:text-lg mt-2 md:mt-7 leading-[25px] text-center xl:text-left ">
              Urna cursus eget nunc scelerisque viverra mauris in. Lacus luctus
              accumsan tortor posuere. Velit aliquet sagittis id consectetur
              purus. Amet tellus cras adipiscing enim. Id diam vel quam
              elementum pulvinar etiam non quam lacus. Libero justo laoreet sit
              amet. Commodo viverra maecenas accumsan lacus. Mattis enim ut
              tellus elementum sagittis vitae. Sem nulla pharetra diam sit amet
              nisl suscipit adipiscing bibendum. At elementum eu facilisis sed
              odio. Et pharetra pharetra massa massa ultricies. Potenti nullam
              ac tortor vitae purus faucibus. Sed viverra tellus in hac
              habitasse. At tellus at urna condimentum mattis pellentesque id
              nibh tortor.
            </h2>
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
                <div className="   col-span-12  md:col-span-6  ">
                  <button className=" cusntn w-full h-[47px] md:h-[59px] 2xl:h-[68px]  pt-1 ">
                    <ul>
                      <li>
                        <h1 className=" text-black f-f-b text-sm 2xl:text-base ">
                          {" "}
                          2400kCal - 3000kCal
                        </h1>
                      </li>
                      <li>
                        <h1 className=" text-black f-f-b text-smtwo 2xl:text-tiny ">
                          Athlete
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
                </div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
