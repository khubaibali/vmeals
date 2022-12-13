import React from "react";

import Categorylist from "./Categorylist";
import Link from "next/link";
export default function Category({ categoriesAll, blogs }) {
  console.log("Blogs",blogs)
  return (
    <>
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto mt-10 sm:my-20">
        <div className="grid grid-cols-12  gap-8  ">
          <div className="   col-span-12 lg:col-span-8 xl:col-span-8  ">
            {/* inner started */}
            <div className="grid grid-cols-12  gap-8  ">
              <div className="   col-span-12 md:col-span-6 xl:col-span-6  ">
                <Link href="/ourblogdetails">
                  <div className="cardblog  h-[338px] md:h-[390px] 2xl:h-[500px] w-full 2xl:w-[500px]   ">
                    <div className="relative">
                      <img
                        src="/images/blog-food.png"
                        className="w-full  h-[226px] md:h-[274px] 2xl:h-[350px]"
                      />
                      <button class=" text-sm sm:text-tiny 2xl:text-tiny f-f-b text-white sub rounded-full px-[38px] sm:px-[29px] py-[11px] sm:py-[14px] 2xl:px-[55px] 2xl:py-[11px] mt-5 2xl:mt-8  absolute top-2 left-8  ">
                        Food
                      </button>
                      <div className="w-10/12 ml-auto mr-auto">
                        <h1 className=" f-f-b  text-black text-xl 2xl:text-2xl text-center mt-4 2xl:mt-10 ">
                          10 Foods that Speed Up Your Metabolism | VMeals
                        </h1>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              {
                blogs?.docs?.map((blog) => (
                  <div className="   col-span-12 md:col-span-6 xl:col-span-6  ">
                    <Link href="/ourblogdetails">
                      <div className="cardblog  h-[338px] md:h-[390px] 2xl:h-[500px] w-full 2xl:w-[500px]   ">
                        <div className="relative">
                          <img
                            src="/images/blog-food.png"
                            className="w-full  h-[226px] md:h-[274px] 2xl:h-[350px]"
                          />
                          <button class=" text-sm sm:text-tiny 2xl:text-tiny f-f-b text-white sub rounded-full px-[38px] sm:px-[29px] py-[11px] sm:py-[14px] 2xl:px-[55px] 2xl:py-[11px] mt-5 2xl:mt-8  absolute top-2 left-8  ">
                            {/* Food */}
                            {blog?.VmealsBlogCategory?.VmealsBlogsCategoryName}
                          </button>
                          <div className="w-10/12 ml-auto mr-auto">
                            <h1 className=" f-f-b  text-black text-xl 2xl:text-2xl text-center mt-4 2xl:mt-10 ">
                              {/* 10 Foods that Speed Up Your Metabolism | VMeals */}
                              {blog?.VmealsBlogTitle}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              }


            </div>

            {/* inner ended */}
          </div>
          <div className="   col-span-12 lg:col-span-4 xl:col-span-4  ">
            <h1 class="  text-base  sm:text-2xl xl:text-3xl 2xl:text-4xl f-f-li  uppercase text-green tracking-[1px] lg:tracking-[0.22em] ">
              Categories
            </h1>
            <Categorylist categoriesAll={categoriesAll} />
          </div>
        </div>
      </div>
    </>
  );
}
