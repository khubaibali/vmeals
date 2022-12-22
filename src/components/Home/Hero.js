import React from "react";
const BaseURL = process.env.NEXT_PUBLIC_BASE_URL
import { vmealsSliderBar } from '../../../src/lib/APICommunications';
export default function Hero({ sliderBarData = [{}] }) {
  //console.log("slider bar data", sliderBarData)
  return (
    <>
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto ">
        <div className="grid grid-cols-12    ">
          <div className="   col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4 2xl:col-span-6  ">
            <div className=" mt-[353px] helthy-top   ">
              <h2 className=" tracking-[1px] lg:tracking-[0.22em] text-center md:text-left text-xl sm:text-lg 2xl:text-3xl text-green f-f-li  ">
                {/* HEALTHY BODY | HEALTHY MIND */}
                {sliderBarData[0]?.VMealsSilderBarHeading}
              </h2>
              <h2 className="text-black f-f-b text-xl text-center md:text-left sm:text-3xl 2xl:text-7xl mt-9  2xl:leading-[64px]">
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
                {sliderBarData[0]?.VMealsSilderBarTitle}
              </h2>
              <div className=" text-center md:text-left  ">
                <ul className="inline-flex  2xl:mb-0 md:mt-10  text-center md:text">
                  <li>
                    <a href="/meal-plans">
                      <button className="green-gradiant shadow-lg f-f-b text-sm md:text-base 2xl:text-lg text-white   w-[136px]  h-[49px] md:w-[182px]  md:h-[60px] 2xl:h-[79px]  2xl:w-[219px] mt-5 rounded-full  ">
                        {/* View Plans */}
                        {sliderBarData[0]?.VMealsSilderBarButtonViewPlan}
                      </button>
                    </a>
                  </li>
                  <li>
                    <a href="/faq">
                      <button className="border buttonstyle border-green f-f-b text-sm md:text-base 2xl:text-lg text-black ml-4   w-[136px]  h-[49px] md:w-[182px]  md:h-[60px] 2xl:h-[79px] 2xl:w-[219px] mt-5 rounded-full  ">
                        {/* Learn More */}
                        {sliderBarData[0]?.VMealsSilderBarUploadButtonLearnMore}
                      </button>
                    </a>
                  </li>
                </ul>
                <div>
                  <svg
                    className=" w-[21px] h-[28px] md:w-[40px] md:h-[52px] ml-auto mr-auto  my-10 md:hidden "
                    viewBox="0 0 40 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5608 51.1407L39.361 30.8338C39.773 30.3642 40 29.7372 40 29.0687C40 28.4001 39.773 27.7732 39.361 27.3035L38.0504 25.808C37.1964 24.8349 35.8085 24.8349 34.9558 25.808L20.0083 42.8602L5.04419 25.7891C4.63216 25.3194 4.08289 25.0601 3.49721 25.0601C2.91087 25.0601 2.3616 25.3194 1.94925 25.7891L0.639017 27.2846C0.226988 27.7546 -9.51526e-07 28.3812 -9.51526e-07 29.0498C-9.51526e-07 29.7183 0.226988 30.3453 0.639017 30.8149L18.4555 51.1407C18.8688 51.6115 19.4207 51.8701 20.0073 51.8686C20.5963 51.8701 21.1478 51.6115 21.5608 51.1407Z"
                      fill="#41A53D"
                    />
                    <path
                      d="M21.5608 26.2473L39.361 5.94035C39.773 5.47068 40 4.8437 40 4.17518C40 3.50665 39.773 2.87968 39.361 2.41001L38.0504 0.914543C37.1964 -0.0585649 35.8085 -0.0585649 34.9558 0.914543L20.0083 17.9667L5.04419 0.895622C4.63216 0.425948 4.08289 0.166626 3.49721 0.166626C2.91087 0.166626 2.3616 0.425948 1.94925 0.895622L0.639017 2.39108C0.226988 2.86113 -9.51526e-07 3.48773 -9.51526e-07 4.15626C-9.51526e-07 4.82478 0.226988 5.45176 0.639017 5.92143L18.4555 26.2473C18.8688 26.718 19.4207 26.9766 20.0073 26.9751C20.5963 26.9766 21.1478 26.718 21.5608 26.2473Z"
                      fill="#41A53D"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[2%] md:bottom-[11%] 2xl:bottom-[10%]  h-auto 3xl:bottom-[3%] left-[45%] xl:left-[49%] hidden md:block ">
          {/* <svg
            className=" w-[21px] h-[28px] md:w-[40px] md:h-[52px] "
            viewBox="0 0 40 52"
            fill="none"
          >
            <path
              d="M21.5608 51.1407L39.361 30.8338C39.773 30.3642 40 29.7372 40 29.0687C40 28.4001 39.773 27.7732 39.361 27.3035L38.0504 25.808C37.1964 24.8349 35.8085 24.8349 34.9558 25.808L20.0083 42.8602L5.04419 25.7891C4.63216 25.3194 4.08289 25.0601 3.49721 25.0601C2.91087 25.0601 2.3616 25.3194 1.94925 25.7891L0.639017 27.2846C0.226988 27.7546 -9.51526e-07 28.3812 -9.51526e-07 29.0498C-9.51526e-07 29.7183 0.226988 30.3453 0.639017 30.8149L18.4555 51.1407C18.8688 51.6115 19.4207 51.8701 20.0073 51.8686C20.5963 51.8701 21.1478 51.6115 21.5608 51.1407Z"
              fill="#41A53D"
            />
            <path
              d="M21.5608 26.2473L39.361 5.94035C39.773 5.47068 40 4.8437 40 4.17518C40 3.50665 39.773 2.87968 39.361 2.41001L38.0504 0.914543C37.1964 -0.0585649 35.8085 -0.0585649 34.9558 0.914543L20.0083 17.9667L5.04419 0.895622C4.63216 0.425948 4.08289 0.166626 3.49721 0.166626C2.91087 0.166626 2.3616 0.425948 1.94925 0.895622L0.639017 2.39108C0.226988 2.86113 -9.51526e-07 3.48773 -9.51526e-07 4.15626C-9.51526e-07 4.82478 0.226988 5.45176 0.639017 5.92143L18.4555 26.2473C18.8688 26.718 19.4207 26.9766 20.0073 26.9751C20.5963 26.9766 21.1478 26.718 21.5608 26.2473Z"
              fill="#41A53D"
            /> 
              <use xlinkHref={`${BaseURL}${sliderBarData[0]?.VMealsArrowsDownUploadImage?.url.replace("/","")}`} />
             
          </svg> */}
            <img src={`${BaseURL}${sliderBarData[0]?.VMealsArrowsDownUploadImage?.url.replace("/","")}`}  className=" width-[31px] h-auto " />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    //console.log('Hero here')
    let vmealsSliderBarData = await fetch(vmealsSliderBar)
    let data = await vmealsSliderBarData.json()
    //console.log("slider bar ->>", data)

    return {
      props: { sliderBarData: { ...data?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { sliderBarData: [] }
    }
  }

}
