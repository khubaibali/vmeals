import React from "react";

export default function Questions() {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="relative  ">
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto my-20">
        <h1 class="  text-base  sm:text-3xl 2xl:text-4xl f-f-li text-green text-center  tracking-[1px] lg:tracking-[0.22em] ">
          FREQUENTLY ASKED QUESTIONS
        </h1>

        {/* code testing */}
        <div className="flex flex-wrap mt-16  ">
          <div className="w-full z-10">
            <div className="no-scrollbar overflow-x-auto">
              <div className=" faqscrol ">
                <ul
                  className="flex mb-0 list-none flex-wrap   flex-row border-2 rounded-[30px] bg-white border-green "
                  role="tablist"
                >
                  <li className="  flex-auto text-center">
                    <a
                      className={
                        "f-f-b  text-sm md:text-smtwo lg:text-base 2xl:text-2xl  px-5 py-[19px] md:py-4 2xl:px-5 2xl:py-7  block leading-normal rounded-[30px] " +
                        (openTab === 1
                          ? "text-white bg-green rounded-[30px]"
                          : "text- bg-white rounded-[30px] ")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="  flex-auto text-center">
                    <a
                      className={
                        "f-f-b  text-sm md:text-smtwo lg:text-base 2xl:text-2xl  px-5 py-[19px] md:py-4 2xl:px-5 2xl:py-7  block leading-normal " +
                        (openTab === 2
                          ? "text-white bg-green rounded-[30px]"
                          : "text- bg-white rounded-[30px]")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      Get Started
                    </a>
                  </li>
                  <li className="  flex-auto text-center">
                    <a
                      className={
                        "f-f-b  text-sm md:text-smtwo lg:text-base 2xl:text-2xl  px-5 py-[19px] md:py-4 2xl:px-5 2xl:py-7  block leading-normal " +
                        (openTab === 3
                          ? "text-white bg-green rounded-[30px]"
                          : "text- bg-white rounded-[30px]")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      Nutrition Consultation
                    </a>
                  </li>
                  <li className="  flex-auto text-center">
                    <a
                      className={
                        "f-f-b  text-sm md:text-smtwo lg:text-base 2xl:text-2xl  px-5 py-[19px] md:py-4 2xl:px-5 2xl:py-7  block leading-normal " +
                        (openTab === 4
                          ? "text-white bg-green rounded-[30px]"
                          : "text- bg-white rounded-[30px]")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(4);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      Meal Plan
                    </a>
                  </li>
                  <li className="  flex-auto text-center">
                    <a
                      className={
                        "f-f-b  text-sm md:text-smtwo lg:text-base 2xl:text-2xl  px-5 py-[19px] md:py-4 2xl:px-5 2xl:py-7  block leading-normal " +
                        (openTab === 5
                          ? "text-white bg-green rounded-[30px]"
                          : "text- bg-white rounded-[30px]")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(5);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      Payment
                    </a>
                  </li>
                  <li className="  flex-auto text-center">
                    <a
                      className={
                        "f-f-b  text-sm md:text-smtwo lg:text-base 2xl:text-2xl  px-5 py-[19px] md:py-4 2xl:px-5 2xl:py-7  block leading-normal " +
                        (openTab === 6
                          ? "text-white bg-green rounded-[30px]"
                          : "text- bg-white rounded-[30px]")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(6);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      Lifestyle
                    </a>
                  </li>
                  <li className="  flex-auto text-center">
                    <a
                      className={
                        "f-f-b  text-sm md:text-smtwo lg:text-base 2xl:text-2xl  px-5 py-[19px] md:py-4 2xl:px-5 2xl:py-7  block leading-normal " +
                        (openTab === 7
                          ? "text-white bg-green rounded-[30px]"
                          : "text- bg-white rounded-[30px]")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(7);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      Assistance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative flex flex-col min-w-0 break-words  w-12/12 md:w-10/12 2xl:w-9.5/12 ml-auto mr-auto mb-6 ">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <ul className="mt-0 md:mt-14">
                      <li>
                        <button
                          className="  inline-flex  justify-center items-center  text-white  w-full green-gradiant  text-center  focus:outline-none   faq-btn  "
                          type="button"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit?
                          <img
                            src="/images/faqarrow.png"
                            className="absolute right-4 md:right-12 2xl:h-[30px] h-[8px] w-[6px] md:h-[18px] 2xl:w-[23px] md:w-[18px]  "
                          />{" "}
                        </button>
                      </li>
                      <li className=" mt-5">
                        <button
                          className="  inline-flex  justify-center items-center  text-white  w-full green-gradiant  text-center  focus:outline-none   faq-btn  "
                          type="button"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit?
                          <img
                            src="/images/faqarrow.png"
                            className="absolute right-4 md:right-12 2xl:h-[30px] h-[8px] w-[6px] md:h-[18px] 2xl:w-[23px] md:w-[18px]  "
                          />{" "}
                        </button>
                      </li>
                      <li className=" mt-5">
                        <button
                          className="  inline-flex  justify-center items-center  text-white  w-full green-gradiant  text-center  focus:outline-none   faq-btn  "
                          type="button"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit?
                          <img
                            src="/images/faqarrow.png"
                            className="absolute right-4 md:right-12 2xl:h-[30px] h-[8px] w-[6px] md:h-[18px] 2xl:w-[23px] md:w-[18px]  "
                          />{" "}
                        </button>
                      </li>
                      <li className=" mt-5">
                        <button
                          className="  inline-flex  justify-center items-center  text-white  w-full green-gradiant  text-center  focus:outline-none   faq-btn  "
                          type="button"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit?
                          <img
                            src="/images/faqarrow.png"
                            className="absolute right-4 md:right-12 2xl:h-[30px] h-[8px] w-[6px] md:h-[18px] 2xl:w-[23px] md:w-[18px]  "
                          />{" "}
                        </button>
                      </li>
                      <li className=" mt-5">
                        <button
                          className="  inline-flex  justify-center items-center  text-white  w-full green-gradiant  text-center  focus:outline-none   faq-btn  "
                          type="button"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit?
                          <img
                            src="/images/faqarrow.png"
                            className="absolute right-4 md:right-12 2xl:h-[30px] h-[8px] w-[6px] md:h-[18px] 2xl:w-[23px] md:w-[18px]  "
                          />{" "}
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <ul className="mt-0 md:mt-14">
                      <li>
                        <button
                          className="  inline-flex  justify-center items-center  text-white  w-full green-gradiant  text-center  focus:outline-none   faq-btn  "
                          type="button"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit?
                          <img
                            src="/images/faqarrow.png"
                            className="absolute right-4 md:right-12 2xl:h-[30px] h-[8px] w-[6px] md:h-[18px] 2xl:w-[23px] md:w-[18px]  "
                          />{" "}
                        </button>
                      </li>
                      <li className=" mt-5">
                        <button
                          className="  inline-flex  justify-center items-center  text-white  w-full green-gradiant  text-center  focus:outline-none   faq-btn  "
                          type="button"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit?
                          <img
                            src="/images/faqarrow.png"
                            className="absolute right-4 md:right-12 2xl:h-[30px] h-[8px] w-[6px] md:h-[18px] 2xl:w-[23px] md:w-[18px]  "
                          />{" "}
                        </button>
                      </li>
                      <li className=" mt-5">
                        <button
                          className="  inline-flex  justify-center items-center  text-white  w-full green-gradiant  text-center  focus:outline-none   faq-btn  "
                          type="button"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit?
                          <img
                            src="/images/faqarrow.png"
                            className="absolute right-4 md:right-12 2xl:h-[30px] h-[8px] w-[6px] md:h-[18px] 2xl:w-[23px] md:w-[18px]  "
                          />{" "}
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <ul className="mt-0 md:mt-14">
                      <li>
                        <button
                          className="  inline-flex  justify-center items-center  text-white  w-full green-gradiant  text-center  focus:outline-none   faq-btn  "
                          type="button"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit?
                          <img
                            src="/images/faqarrow.png"
                            className="absolute right-4 md:right-12 2xl:h-[30px] h-[8px] w-[6px] md:h-[18px] 2xl:w-[23px] md:w-[18px]  "
                          />{" "}
                        </button>
                      </li>
                      <li className=" mt-5">
                        <button
                          className="  inline-flex  justify-center items-center  text-white  w-full green-gradiant  text-center  focus:outline-none   faq-btn  "
                          type="button"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit?
                          <img
                            src="/images/faqarrow.png"
                            className="absolute right-4 md:right-12 2xl:h-[30px] h-[8px] w-[6px] md:h-[18px] 2xl:w-[23px] md:w-[18px]  "
                          />{" "}
                        </button>
                      </li>
                      <li className=" mt-5">
                        <button
                          className="  inline-flex  justify-center items-center  text-white  w-full green-gradiant  text-center  focus:outline-none   faq-btn  "
                          type="button"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit?
                          <img
                            src="/images/faqarrow.png"
                            className="absolute right-4 md:right-12 2xl:h-[30px] h-[8px] w-[6px] md:h-[18px] 2xl:w-[23px] md:w-[18px]  "
                          />{" "}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* code testing ended */}
      </div>
      <img
        src="/images/faqtabbg.png"
        className="2xl:w-[965px]  hidden md:block 2xl:h-[823px] xl:w-[662px]  xl:h-[523px] md:w-[398px] lg:w-[487px]  md:h-[497px] absolute top-[100px] z-[-1px]  "
      />
      <img
        src="/images/FAQ Mobile Shape.png"
        className="w-full md:hidden h-[372px] absolute top-[100px] z-[-1px]  "
      />
    </div>
  );
}
