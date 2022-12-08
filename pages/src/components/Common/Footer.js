import React from "react";

export default function Fotter() {
  return (
    <div className=" md:pt-10 2xl:pt-20">
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto">
        <div className=" text-center">
          <ul className=" inline-flex ">
            <li>
              <button>
                <img
                  src="/images/facebook.png"
                  className=" h-[34px] w-[34px]  md:h-[50px] md:w-[50px] 2xl:h-[75px] 2xl:w-[75px]"
                />
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/images/instagram.png"
                  className=" ml-2 md:ml-4 h-[34px] w-[34px]  md:h-[50px] md:w-[50px] 2xl:h-[75px] 2xl:w-[75px]"
                />
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/images/whatsapp.png"
                  className=" ml-2 md:ml-4 h-[34px] w-[34px]  md:h-[50px] md:w-[50px] 2xl:h-[75px] 2xl:w-[75px]"
                />
              </button>
            </li>
          </ul>
        </div>
        <div className="bg-white shadow-2xl mb-5 mt-4 md:my-10 pb-3 lg:py-5 w-12/12 lg:w-10/12 xl:w-9/12 ml-auto mr-auto rounded-full ">
          <div className="grid grid-cols-12     ">
            <div className="col-span-3 md:col-span-3  ">
              <img
                src="/images/Tablet-Pro-Mockup 1.png"
                className="w-full h-auto mt-4 lg:mt-0 "
                alt=""
              />
            </div>
            <div className="col-span-8 md:col-span-9  ">
              <h2 className=" text-black f-f-b  text-smtwo  md:text-2xl lg:text-3xl 2xl:text-5xl pt-3 md:pt-8 uppercase ">
                Get your free <span className="text-green">weight loss</span>{" "}
                guide today!
              </h2>

              <div className="grid grid-cols-12 ">
                <div className="col-span-8 md:col-span-7 lg:col-span-7  ">
                  <input
                    type="text"
                    className="w-full  input-footer  mt-3 md:mt-4 lg:mt-4 2xl:mt-4 md:py-3 2xl:py-5  border-2 border-green pb-1 pt-0 "
                    placeholder="Please enter your email address..."
                  />
                </div>
                <div className="  col-span-4 md:col-span-4 lg:col-span-3 text-center">
                  <button class="bg-green f-f-b text-xs md:text-base 2xl:text-lg  md:mt-4 text-white lg:mt-4   2xl:mt-5  px-3 md:px-9 py-2 md:py-5 2xl:py-5 mt-3 rounded-full  sub ">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-dark py-2 md:py-5 ">
        <div className="w-11/12 2xl:max-w-[1600px] ml-auto mr-auto">
          <div className="grid grid-cols-12  gap-2   ">
            <div className="col-span-6 md:col-span-6 lg:col-span-7 xl:col-span-8  ">
              <a
                href="#"
                className=" text-white text-xstwo  md:text-sm lg:text-sm xl:text-tiny cursor-pointer   2xl:text-lg f-f-b "
              >
                VMeals - © All Rights Reserved - 2022
              </a>
            </div>
            <div className=" col-span-6 md:col-span-6 lg:col-span-5 xl:col-span-4 text-center  ">
              <ul className="inline-flex">
                <li>
                  <a
                    href="#"
                    className=" text-white text-xstwo  md:text-sm lg:text-sm xl:text-tiny cursor-pointer   2xl:text-lg f-f-b ml-4 md:ml-8  text-center"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-white text-xstwo  md:text-sm lg:text-sm xl:text-tiny cursor-pointer   2xl:text-lg f-f-b ml-4 md:ml-8 text-center"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-white text-xstwo  md:text-sm lg:text-sm xl:text-tiny cursor-pointer   2xl:text-lg f-f-b ml-4 md:ml-8 text-center"
                  >
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
