import React from "react";
const BaseURL = process.env.NEXT_PUBLIC_BASE_URL 
import { vmealsCustomersChooseUs } from '../../../../src/lib/APICommunications';
// import image1 from '../../assets/images/image 1-home.png'
// import image2 from '../../assets/images/image 2-home.png'
// import image3 from '../../assets/images/image 3-home.png'

export default function Built({builtData=[{}]}) {
  return (
    <>
      <div>
        <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto">
          <div className="grid grid-cols-12  gap-8  ">
            <div className="   col-span-12 lg:col-span-4  ">
              <div className=" shadow-lg  sm:w-7/12 ml-auto mr-auto liner md:w-full w-[181px] h-[205px]  sm:h-[400px] 2xl:h-[539px] px-3 md:px-8 rounded-[20px] ">
                <h1 className="  text-center text-tiny md:text-2xl 2xl:text-4xl f-f-li text-white pt-10 sm:pt-36 2xl:pt-44">
                  {/* BUILT FOR YOU */}
                  {builtData[0]?.VMealsCustomersChooseUsTitle}
                </h1>
                <h2 className=" f-f-b text-center text-base md:text-2xl leading-[23px] md:leading-[31px] 2xl:leading-[46px] 2xl:text-6xl text-white pt-5 2xl:pt-10 ">
                  {/* Why do customers choose us?{" "} */}
                  {builtData[0]?.VMealsCustomersChooseUsDescription}
                </h2>
              </div>
              </div>
            </div>
            <div className="   col-span-12 lg:col-span-8  ">
              <div className="grid grid-cols-12  gap-5 ">
                <div className="  col-span-4 lg:col-span-4  ">
                  <div className="shadow-lg bg-white w-[119px] h-[150px] md:w-full md:h-auto sm:h-[302px] 2xl:h-[445px] pt-5 md:pt-10 sm:py-14  sm:mt-14 rounded-[20px]">
                    <img
                      alt=""
                      // src="/images/image 1-home.png"
                      src={`${BaseURL}${builtData[0]?.VMealsCustomersChooseUsList[0]?.VMealsCustomersChooseUsItemImageIcon?.url.replace("/","")}`}
                      className=" w-[59px] h-[59px] sm:w-[100px] 2xl:w-[177px] md:h-auto 2xl:h-[176px] ml-auto mr-auto"
                    />
                    <h2 className="  text-sm sm:text-xl lg:text-2xl leading-[20px] md:leading-[31px] 2xl:leading-[46px] 2xl:text-4xl text-black pt-5 sm:pt-10 f-f-b text-center ">
                      {/* Free Nutritionist Consultation */}
                      {builtData[0]?.VMealsCustomersChooseUsList[0]?.VMealsCustomersChooseUsItemTitle}
                    </h2>
                  </div>
                </div>
                <div className="  col-span-4 lg:col-span-4  ">
                  <div className="shadow-lg bg-white w-[119px] h-[150px] md:w-full md:h-auto sm:h-[302px] 2xl:h-[445px] pt-5 md:pt-10 sm:py-14  sm:mt-14 rounded-[20px]">
                    <img
                      alt=""
                      src={`${BaseURL}${builtData[0]?.VMealsCustomersChooseUsList[1]?.VMealsCustomersChooseUsItemImageIcon?.url.replace("/","")}`}
                      className=" w-[59px] h-[59px] sm:w-[100px] 2xl:w-[176px] md:h-auto 2xl:h-[176px] ml-auto mr-auto"
                    />
                    <h2 className=" text-sm sm:text-xl lg:text-2xl  leading-[20px] md:leading-[31px] 2xl:leading-[46px] 2xl:text-4xl text-black pt-5 sm:pt-10 f-f-b text-center ">
                      {/* Allergies & Intolerances */}
                      {builtData[0]?.VMealsCustomersChooseUsList[1]?.VMealsCustomersChooseUsItemTitle}
                    </h2>
                  </div>
                </div>
                <div className="  col-span-4 lg:col-span-4  ">
                  <div className="shadow-lg bg-white w-[119px] h-[150px] md:w-full md:h-auto sm:h-[302px] 2xl:h-[445px] pt-5 md:pt-10 sm:py-14  sm:mt-14 rounded-[20px]">
                    <img
                      alt=""
                      src={`${BaseURL}${builtData[0]?.VMealsCustomersChooseUsList[1]?.VMealsCustomersChooseUsItemImageIcon?.url.replace("/","")}`}
                      className=" w-[59px] h-[59px] sm:w-[100px] 2xl:w-[176px] md:h-auto 2xl:h-[176px] ml-auto mr-auto"
                    />
                    <h2 className=" text-sm sm:text-xl lg:text-2xl  leading-[20px] md:leading-[31px] 2xl:leading-[46px] 2xl:text-4xl text-black pt-5 sm:pt-10 f-f-b text-center ">
                    {builtData[0]?.VMealsCustomersChooseUsList[2]?.VMealsCustomersChooseUsItemTitle}
                    </h2>
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
   
    let builtData = await fetch(vmealsCustomersChooseUs)
    let data = await builtData.json()
    console.log("slider bar ->>",data)
   
    return {
      props: { builtData: { ...data?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { builtData: [] }
    }
  }

}