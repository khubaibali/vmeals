import React from "react";
import Categorylist from "./Categorylist";
import RTFMapping from '../Common/RTFMapping'
export default function Category({selectedBlog,categoriesAll}) {
  //console.log("selected --",selectedBlog)
  return (
    <>
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto mt-10 sm:my-20">
        <div className="grid grid-cols-12  gap-8  ">
          <div className="   col-span-12 lg:col-span-8 xl:col-span-8  ">
            <h2 class="  text-base  sm:text-2xl  2xl:text-4xl f-f-li  captalize text-green tracking-[1px] lg:tracking-[0.22em]  text-center xl:text-left">
              {selectedBlog?.VmealsBlogTitle}
            </h2>
              <RTFMapping data={selectedBlog?.VmealsBlogText} />
          </div>
          <div className="   col-span-12 lg:col-span-4 xl:col-span-4  ">
            <h2 class="  text-base  sm:text-2xl xl:text-2xl 2xl:text-4xl f-f-li  uppercase text-green tracking-[1px] lg:tracking-[0.22em] ">
              Categories
            </h2>
            <Categorylist categoriesAll={categoriesAll} />
          </div>
        </div>
      </div>
    </>
  );
}
