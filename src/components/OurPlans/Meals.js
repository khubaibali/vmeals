import React from "react";

import Link from "next/link";
import Steps from "./Steps";

export default function Meals() {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto my-10 md:my-20">
        {/* code testing */}
        <Steps step={0} />
        {/* code testing ended */}

        {/* meal card started */}

        <div className="grid grid-cols-12 gap-4  mt-10 md:mt-20   ">
          <div className="   col-span-12  xl:col-span-4 hidden xl:block ">

            <div className="cardurdu w-[374px] h-[257px] 2xl:w-[450px] 2xl:h-[300px] relative ml-auto mr-auto ">
              <div className="text-right w-6/12 ml-auto pr-4 pt-8 ">
                <h2 className="f-f-b text-green text-base 2xl:text-2xl   ">
                  بحاجة الى مساعدة في اختيار خطة؟
                </h2>
                <h2 className=" f-f-li text-black text-tiny 2xl:text-base   ">
                  تواصل مع خبير التغذية لدينا ودع الخبراء يقررون ما هو الأفضل
                  لك!
                </h2>
                <a href="/contact-us" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className=" text-center text-sm sm:text-tiny 2xl:text-lg f-f-b text-white green-gradiant-2 rounded-full w-[180px] 2xl:w-[221px] sm:px-[29px] h-[60px] sm:py-[14px] 2xl:px-[63px] 2xl:h-[61px] mt-5 2xl:mt-8  absolute right-[17px] bottom-[21px] ">
                  احجز موعدك
                </a>
                <img
                  src="/images/femaleplans.png"
                  className="  w-auto 2xl:w-[201px] h-[216px] 2xl:h-[263px]  absolute left-0 bottom-0"
                />
              </div>
            </div>

            <div className="cardurdu w-[374px] h-[257px] 2xl:w-[450px] 2xl:h-[300px] relative mt-10 ml-auto mr-auto ">
              <div className="text-left w-8/12 mr-auto pl-4 pt-4 ">
                <h2 className="f-f-b text-green text-base 2xl:text-3xl 2xl:leading-[41px]   ">
                  Need help in choosing a plan?
                </h2>
                <h2 className=" f-f-r text-black-light text-tiny 2xl:text-base  mt-4 ">
                  Get in touch with our nutritionist and let the experts decide
                  what is best for you!
                </h2>
                <a href="/contact-us" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white green-gradiant-2 rounded-full  2xl:w-[219px] w-[173px] h-[60px] 2xl:h-[61px] mt-5 2xl:mt-8  absolute left-[17px] bottom-[21px] 2xl:bottom-[21px] text-center align-middle  ">
                  Book Appointment
                </a>
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
                <Link href="/classic-diet">
                  <div className="cardurdu testtingcard classic  relative p-6 ">
                    <h2 className="f-f-b text-2xl 2xl:text-4xl text-sky  ">
                      {" "}
                      Classic Diet
                    </h2>
                    <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white bg-sky shadow-lg rounded-full w-[145px] 2xl:w-[219px] sm:px-[29px] h-[60px] sm:py-[14px] 2xl:px-[37px] 2xl:h-[61px] mt-5 2xl:mt-8  absolute left-[17px] bottom-[21px] z-10 ">
                      Select Plan
                    </button>
                  </div>
                </Link>
              </div>
              <div className="  col-span-12  md:col-span-6  lg:col-span-4  ">
                <Link href="/green-diet">
                  <div className="greencard testtingcard  Green relative p-6 ">
                    <h2 className="f-f-b text-2xl 2xl:text-4xl text-green  ">
                      {" "}
                      Green Diet
                    </h2>
                    <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white green-gradiant-2 rounded-full w-[145px] 2xl:w-[219px] sm:px-[29px] h-[60px] sm:py-[14px] 2xl:px-[37px] 2xl:h-[61px] mt-5 2xl:mt-8  absolute left-[17px] bottom-[21px] z-10 ">
                      Select Plan
                    </button>
                  </div>
                </Link>
              </div>
              <div className="  col-span-12  md:col-span-6  lg:col-span-4  ">
                <Link href="/gluten-dairy-free-diet-plan">
                  <div className="cardgluent testtingcard Gluten  relative p-6 ">
                    <h2 className="f-f-b text-2xl 2xl:text-4xl text-pink 2xl:leading-[47px] ">
                      {" "}
                      Gluten & Dairy <br />
                      Free Diet
                    </h2>
                    <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white bg-pink rounded-full w-[145px] 2xl:w-[219px] sm:px-[29px] h-[60px] sm:py-[14px] 2xl:px-[37px] 2xl:h-[61px] mt-5 2xl:mt-8  absolute left-[14px] bottom-[21px] z-10 ">
                      Select Plan
                    </button>
                  </div>
                </Link>
              </div>
              <div className="  col-span-12  md:col-span-6  lg:col-span-4  ">
                <Link href="/indian-fusion-meal-plan">
                  <div className="indiancard testtingcard  Indian relative p-6 ">
                    <h2 className="f-f-b text-2xl 2xl:text-4xl text-brownn 2xl:leading-[47px] ">
                      {" "}
                      Indian Fusion <br />
                      Diet
                    </h2>
                    <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white bg-brownn rounded-full w-[145px] 2xl:w-[219px] sm:px-[29px] h-[60px] sm:py-[14px] 2xl:px-[37px] 2xl:h-[61px] mt-5 2xl:mt-8  absolute left-[14px] bottom-[21px] z-10 ">
                      Select Plan
                    </button>
                  </div>
                </Link>
              </div>
              <div className="  col-span-12  md:col-span-6  lg:col-span-4  ">
                <Link href="/pescatarian-diet-plan">
                  <div className="cardpestarn testtingcard Pescatarian  relative p-6 ">
                    <h2 className="f-f-b text-2xl 2xl:text-4xl text-pink-dark 2xl:leading-[47px] ">
                      {" "}
                      Pescatarian
                      <br />
                      Diet
                    </h2>
                    <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white bg-pink-dark rounded-full w-[145px] 2xl:w-[219px] sm:px-[29px] h-[60px] sm:py-[14px] 2xl:px-[37px] 2xl:h-[61px] mt-5 2xl:mt-8  absolute left-[14px] bottom-[21px] z-10 ">
                      Select Plan
                    </button>
                  </div>
                </Link>
              </div>
              <div className="  col-span-12  md:col-span-6  lg:col-span-4  ">
                <Link href="/keto-diet-plan">
                  <div className="ketotarn testtingcard Keto  relative p-6 ">
                    <h2 className="f-f-b text-2xl 2xl:text-4xl text-red-dark 2xl:leading-[47px] ">
                      {" "}
                      Keto Diet
                    </h2>
                    <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white bg-red-dark rounded-full w-[145px] 2xl:w-[219px] sm:px-[29px] h-[60px] sm:py-[14px] 2xl:px-[37px] 2xl:h-[61px] mt-5 2xl:mt-8  absolute left-[14px] bottom-[21px] z-10 ">
                      Select Plan
                    </button>
                  </div>
                </Link>
              </div>
              {/*  one end */}
            </div>
          </div>
          {/* new code card started  */}
          <div className=" col-span-12  md:col-span-6 gap-4 md:gap-10  xl:hidden  ">

            <div className="cardurdu w-[374px] md:w-[352px] lg:w-[374px]  h-[257px] 2xl:w-[450px] 2xl:h-[300px] relative mt-2 md:mt-10 ml-auto mr-auto ">
              <div className="text-right w-6/12 ml-auto pr-4 pt-8 ">
                <h2 className="f-f-b text-green text-base 2xl:text-2xl   ">
                  بحاجة الى مساعدة في اختيار خطة؟
                </h2>
                <h2 className=" f-f-li text-black text-tiny 2xl:text-base   ">
                  تواصل مع خبير التغذية لدينا ودع الخبراء يقررون ما هو الأفضل
                  لك!
                </h2>
                <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full w-[180px] sm:px-[29px] h-[50px] sm:py-[14px] 2xl:px-[63px] 2xl:h-[69px] mt-5 2xl:mt-8  absolute right-[17px] bottom-[21px] ">
                  احجز موعدك
                </button>
                <img
                  src="/images/femaleplans.png"
                  className="  w-auto 2xl:w-[201px] h-[216px] 2xl:h-[263px]  absolute left-0 bottom-0"
                />
              </div>
            </div>

          </div>
          <div className=" col-span-12  md:col-span-6   xl:hidden  ">

            <div className="cardurdu w-[374px] md:w-[352px] lg:w-[374px]  h-[257px] 2xl:w-[450px] 2xl:h-[300px] relative mt-2 md:mt-10 ml-auto mr-auto ">
              <div className="text-left w-8/12 mr-auto pl-4 pt-4 ">
                <h2 className="f-f-b text-green text-xl md:text-base leading-[29px] 2xl:text-3xl 2xl:leading-[41px]   ">
                  Need help in choosing a plan?
                </h2>
                <h2 className=" f-f-r text-black-light text-tiny 2xl:text-base  mt-4 ">
                  Get in touch with our nutritionist and let the experts decide
                  what is best for you!
                </h2>
                <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full  2xl:w-[219px] md:w-[173px] w-[180px] h-[50px] md:h-[60px] 2xl:h-[61px] mt-5 2xl:mt-8  absolute left-[17px] bottom-[21px] 2xl:bottom-[21px] ">
                  Book Appointment
                </button>
                <img
                  src="/images/femaleplnas.png"
                  className="  w-auto 2xl:w-[175px] h-[216px] 2xl:h-[282px]  absolute right-0 bottom-0"
                />
              </div>
            </div>

          </div>
          {/* new card ended */}
        </div>

        {/* meal card ended */}
      </div>
    </>
  );
}
