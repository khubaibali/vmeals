import Link from "next/link";
import React from "react";
const BaseURL = process.env.NEXT_PUBLIC_BASE_URL
import { vmealsOurBlogs } from '../../../src/lib/APICommunications';
export default function Ourblog({ ourHomeBlogData }) {
  console.log("ourHomeData", ourHomeBlogData)
  return (
    <div className="bg-green-light">
      <div className="py-10 2xl:py-20">
        <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto">
          <h2 class="  text-base text-center  sm:text-3xl 2xl:text-4xl f-f-li  md:mt-10 text-green tracking-[1px] lg:tracking-[0.22em] ">
            OUR BLOG
          </h2>
          <div className="grid grid-cols-12  gap-8  mt-10 2xl:mt-20 ">
            {/* <div className="   col-span-6 lg:col-span-4  ">
              <div className="relative ">
                <img
                  src="/images/blog1.png"
                  className="w-full h-auto "
                  alt=""
                />
                <button className="bg-green f-f-b text-xs md:text-base 2xl:text-xl text-white py-2 px-3 md:px-9 md:py-4 rounded-full absolute top-2 md:top-10 left-2 md:left-5  ">
                  Lorem Ipsum
                </button>
                <div className="blog-liner p-2 md:py-5 md:p-5  absolute bottom-0">
                  <h2 className=" text-white f-f-r text-xs md:text-base 2xl:text-xl md:py-4 2xl:py-8 ">
                    28th September, 2022
                  </h2>
                  <p className=" f-f-b text-sm md:text-lg 2xl:text-2xl text-white md:pb-7 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </div>
            <div className="   col-span-6 lg:col-span-4  ">
              <div className="relative">
                <img
                  src="/images/blog1.png"
                  className="w-full h-auto "
                  alt=""
                />
                <button className="bg-green f-f-b text-xs md:text-base 2xl:text-xl text-white py-2 px-3 md:px-9 md:py-4 rounded-full absolute top-2 md:top-10 left-2 md:left-5  ">
                  Lorem Ipsum
                </button>
                <div className="blog-liner p-2 md:py-5 md:p-5  absolute bottom-0">
                  <h2 className=" text-white f-f-r text-xs md:text-base 2xl:text-xl md:py-4 2xl:py-8 ">
                    28th September, 2022
                  </h2>
                  <p className=" f-f-b text-sm md:text-lg 2xl:text-2xl text-white md:pb-7 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </div>
            <div className="   col-span-6 lg:col-span-4 hidden lg:block  ">
              <div className="relative">
                <img
                  src="/images/blog2.png"
                  className="w-full h-[180px] md:h-auto "
                  alt=""
                />
                <button className="bg-green f-f-b text-xs md:text-base 2xl:text-xl text-white py-2 px-3 md:px-9 md:py-4 rounded-full absolute top-2 md:top-10 left-2 md:left-5  ">
                  Lorem Ipsum
                </button>
                <div className="blog-liner p-2 md:py-5 md:p-5  absolute bottom-0">
                  <h2 className=" text-white f-f-r text-xs md:text-base 2xl:text-xl md:py-4 2xl:py-8 ">
                    28th September, 2022
                  </h2>
                  <p className=" f-f-b text-sm md:text-lg 2xl:text-2xl text-white md:pb-7 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </div> */}


            {
              ourHomeBlogData?.docs?.map((blog, index) => {
                
                return  <>
                {index <3 ? <div className="col-span-6 lg:col-span-4  ">
                  <div className="relative ">
                    <Link href={`${encodeURIComponent(blog?.VmealsBlogURL)}`}>
                    
                    <img
                      //  src="/images/blog1.png"
                      src={`${BaseURL}${blog?.VMealsBlogBreadcrumbImage?.url}`}
                      className="w-full h-[206px] md:h-[453px] 2xl:h-[512px] rounded-[30px] "
                      alt=""
                    />
                    <button className="bg-green f-f-b text-xs md:text-base 2xl:text-xl text-white py-2 px-3 md:px-9 md:py-4 rounded-full absolute top-2 md:top-10 left-2 md:left-5  ">
                      {blog?.VmealsBlogCategory?.VmealsBlogsCategoryName}
                    </button>
                    <div className="blog-liner p-2 md:py-5 md:p-5  absolute bottom-0 orcrd w-full ">
                      <h2 className=" text-white f-f-r text-xs md:text-base 2xl:text-xl md:py-4 2xl:py-8 ">
                        28th September, 2022
                      </h2>
                      <p className=" f-f-b text-sm md:text-lg 2xl:text-2xl text-white md:pb-7 ">
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit */}
                        {blog.VmealsBlogTitle}
                      </p>
                    </div>
                    </Link>
                  </div>
                </div>:null}
                </>
                
              })
            }

          </div>
        </div>
      </div>
    </div>
  );
}


export async function getServerSideProps() {
  try {
    let data = await fetch(vmealsOurBlogs)
    data = await data.json()
    console.log("our blog gerserver ->>", data)

    return {
      props: { ourHomeBlogData: { ...data } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { ourHomeBlogData: [] }
    }
  }

}