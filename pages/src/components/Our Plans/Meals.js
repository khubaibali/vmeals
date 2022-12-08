import React from "react";

import Link from "next/link";

export default function Meals() {
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
                    <button class="  text-smtwo md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-b text-white sub rounded-full    px-[32px] md:px-[25px] addwidth py-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:py-[20px]">
                      <ul className="inline-flex">
                        <li>
                          <img
                            src="/images/choose-plan-active 1.png"
                            className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                          />
                        </li>
                        <li className="mt-1 md:mt-3 ml-2 lg:ml-4">
                          Select Plan
                        </li>
                      </ul>
                    </button>
                  </Link>
                  <img
                    src="/images/arrowplans.png"
                    className="  w-[36px] xl:w-[60px] absolute top-[50%] right-0 lg:-right-2 xl:right-0 "
                  />
                </div>
              </div>
              <div className="   col-span-2 md:col-span-2 xl:col-span-2  ">
                <Link href="/classicdiet" >
                <div className="relative">
                  <button class=" text-smtwo md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-black  rounded-full    px-[32px] md:px-[25px] addwidth py-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:py-[20px]">
                    <ul className="inline-flex">
                      <li>
                        <img
                          src="/images/customize-inactive.png"
                          className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                        />
                      </li>
                      <li className="mt-1 md:mt-3 ml-2 lg:ml-4">
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
                <Link href="/personalInformation" >
                  <button class=" text-smtwo md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-black  rounded-full    px-[32px] md:px-[25px] addwidth py-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:py-[20px]">
                    <ul className="inline-flex">
                      <li>
                        <img
                          src="/images/Sign-Up-Login-inactive.png"
                          className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                        />
                      </li>
                      <li className="mt-1 md:mt-3 ml-2 lg:ml-4">
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
                  <button class=" text-smtwo md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-black  rounded-full    px-[32px] md:px-[25px] addwidth py-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:py-[20px]">
                    <ul className="inline-flex">
                      <li>
                        <img
                          src="/images/delivery-icon-inactive.png"
                          className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                        />
                      </li>
                      <li className="mt-1 md:mt-3 ml-2 lg:ml-4">
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
                <button class=" text-smtwo md:text-xstwo lg:text-xsone xl:text-smtwo 2xl:text-base f-f-r text-black  rounded-full    px-[32px] md:px-[25px] addwidth py-[3px] lg:py-[6px] 2xl:px-[49px] 2xl:py-[20px]">
                  <ul className="inline-flex">
                    <li>
                      <img
                        src="/images/summary-inactive.png"
                        className="  w-[16px] md:w-[14px] lg:w-[16px] xl:w-[25px] h-auto mt-2 2xl:mt-3  "
                      />
                    </li>
                    <li className="mt-1 md:mt-3 ml-2 lg:ml-4">Order Summary</li>
                  </ul>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* code testing ended */}

        {/* meal card started */}

        <div className="grid grid-cols-12 gap-4  mt-20   ">
          <div className="   col-span-12  xl:col-span-4 hidden xl:block ">
            <div className="cardurdu w-[374px] h-[257px] 2xl:w-[450px] 2xl:h-[300px] relative ">
              <div className="text-right w-6/12 ml-auto pr-4 pt-8 ">
                <h1 className="f-f-b text-green text-base 2xl:text-2xl   ">
                  بحاجة الى مساعدة في اختيار خطة؟
                </h1>
                <h2 className=" f-f-li text-black text-tiny 2xl:text-base   ">
                  تواصل مع خبير التغذية لدينا ودع الخبراء يقررون ما هو الأفضل
                  لك!
                </h2>
                <button class=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full px-[38px] sm:px-[29px] py-[20px] sm:py-[14px] 2xl:px-[63px] 2xl:py-[20px] mt-5 2xl:mt-8  absolute right-[17px] bottom-[21px] ">
                  احجز موعدك
                </button>
                <img
                  src="/images/femaleplans.png"
                  className="  w-auto 2xl:w-[201px] h-[216px] 2xl:h-[263px]  absolute left-0 bottom-0"
                />
              </div>
            </div>
          
            <div className="cardurdu w-[374px] h-[257px] 2xl:w-[450px] 2xl:h-[300px] relative mt-10 ">
              <div className="text-left w-8/12 mr-auto pl-4 pt-8 ">
                <h1 className="f-f-b text-green text-base 2xl:text-2xl   ">
                  Need help in choosing a plan?
                </h1>
                <h2 className=" f-f-r text-black-light text-tiny 2xl:text-base  mt-4 ">
                  Get in touch with our nutritionist and let the experts decide
                  what is best for you!
                </h2>
                <button class=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full px-[38px] sm:px-[29px] py-[20px] sm:py-[14px] 2xl:px-[29px] 2xl:py-[20px] mt-5 2xl:mt-8  absolute left-[17px] bottom-[21px] ">
                  Book Appointment
                </button>
                <img
                  src="/images/femaleplnas.png"
                  className="  w-auto 2xl:w-[175px] h-[216px] 2xl:h-[282px]  absolute right-0 bottom-0"
                />
              </div>
            </div>
           
          </div>
          <div className="   col-span-12  xl:col-span-8  ">
            <div className="grid grid-cols-12 gap-4 md:gap-10   ">
              {/* one  */}
              <div className="  col-span-12  md:col-span-6  lg:col-span-4  ">
              <Link href="/classicdiet">
                <div className="cardurdu testtingcard classic  relative p-6 ">
                  <h1 className="f-f-b text-2xl 2xl:text-4xl text-sky  ">
                    {" "}
                    Classic Diet
                  </h1>
                  <button class=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full px-[38px] sm:px-[29px] py-[20px] sm:py-[14px] 2xl:px-[37px] 2xl:py-[20px] mt-5 2xl:mt-8  absolute left-[17px] bottom-[21px] z-10 ">
                    Select Plan
                  </button>
                </div>
                </Link>
              </div>
              <div className="  col-span-12  md:col-span-6  lg:col-span-4  ">
              <Link href="/greendiet">
                <div className="cardurdu testtingcard  Green relative p-6 ">
                  <h1 className="f-f-b text-2xl 2xl:text-4xl text-sky  ">
                    {" "}
                    Green Diet
                  </h1>
                  <button class=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white bg-sky  rounded-full px-[38px] sm:px-[29px] py-[20px] sm:py-[14px] 2xl:px-[37px] 2xl:py-[20px] mt-5 2xl:mt-8  absolute left-[17px] bottom-[21px] z-10 ">
                    Select Plan
                  </button>
                </div>
                </Link>
              </div>
              <div className="  col-span-12  md:col-span-6  lg:col-span-4  ">
              <Link href="/gluent">
                <div className="cardurdu testtingcard Gluten  relative p-6 ">
                  <h1 className="f-f-b text-2xl 2xl:text-4xl text-pink 2xl:leading-[47px] ">
                    {" "}
                    Gluten & Dairy <br />
                    Free Diet
                  </h1>
                  <button class=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white bg-pink rounded-full px-[38px] sm:px-[29px] py-[20px] sm:py-[14px] 2xl:px-[37px] 2xl:py-[20px] mt-5 2xl:mt-8  absolute left-[14px] bottom-[21px] z-10 ">
                    Select Plan
                  </button>
                </div>
                </Link>
              </div>
              <div className="  col-span-12  md:col-span-6  lg:col-span-4  ">
              <Link href="/indianfusion">
                <div className="cardurdu testtingcard  Indian relative p-6 ">
                  <h1 className="f-f-b text-2xl 2xl:text-4xl text-brownn 2xl:leading-[47px] ">
                    {" "}
                    Indian Fusion <br />
                    Diet
                  </h1>
                  <button class=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white bg-brownn rounded-full px-[38px] sm:px-[29px] py-[20px] sm:py-[14px] 2xl:px-[37px] 2xl:py-[20px] mt-5 2xl:mt-8  absolute left-[14px] bottom-[21px] z-10 ">
                    Select Plan
                  </button>
                </div>
                </Link>
              </div>
              <div className="  col-span-12  md:col-span-6  lg:col-span-4  ">
              <Link href="/pescatarian">
                <div className="cardurdu testtingcard Pescatarian  relative p-6 ">
                  <h1 className="f-f-b text-2xl 2xl:text-4xl text-pink-dark 2xl:leading-[47px] ">
                    {" "}
                    Pescatarian
                    <br />
                    Diet
                  </h1>
                  <button class=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white bg-pink-dark rounded-full px-[38px] sm:px-[29px] py-[20px] sm:py-[14px] 2xl:px-[37px] 2xl:py-[20px] mt-5 2xl:mt-8  absolute left-[14px] bottom-[21px] z-10 ">
                    Select Plan
                  </button>
                </div>
                </Link>
              </div>
              <div className="  col-span-12  md:col-span-6  lg:col-span-4  ">
              <Link href="/ketodiet">
                <div className="cardurdu testtingcard Keto  relative p-6 ">
                  <h1 className="f-f-b text-2xl 2xl:text-4xl text-red-dark 2xl:leading-[47px] ">
                    {" "}
                    Keto Diet
                  </h1>
                  <button class=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white bg-red-dark rounded-full px-[38px] sm:px-[29px] py-[20px] sm:py-[14px] 2xl:px-[37px] 2xl:py-[20px] mt-5 2xl:mt-8  absolute left-[14px] bottom-[21px] z-10 ">
                    Select Plan
                  </button>
                </div>
                </Link>
              </div>
              {/*  one end */}
            </div>
          </div>
        </div>

        {/* meal card ended */}
      </div>
    </>
  );
}
