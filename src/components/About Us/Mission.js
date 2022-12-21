import React from "react";
import RTFMapping from "../Common/RTFMapping";

export default function Mission({ourCompanyData}) {
  return (
    <div className="about-goal-bg  " >
    <div className="relative  ">
      <div className=" z-10 w-11/12 md:w-10/12 lg:w-7/12 xl:w-11/12 2xl:max-w-[1600px] ml-auto mr-auto my-10 sm:my-20">
        <div className="grid grid-cols-12 gap-4 md:gap-8  z-10  "> 
          {ourCompanyData?.[0]?.VMealsAboutUsCardsList.map((item,index)=>(
            <div className=" col-span-12 md:col-span-6 xl:col-span-3 text-center " key={item?.id}>
            <div className="relative ml-auto mr-auto ">
              <img
                src="/images/Goal.png"
                className="w-full h-[759px] md:h-[640px] 2xl:h-[759px]  "
              />
              <div className="absolute top-[35%] md:top-[30%] w-[95%] right-0 left-0">
                <div className="text-center w-11/12 ml-auto mr-auto    ">
                  <h2 className="f-f-b text-black text-base md:text-xl 2xl:text-4xl">
                    {item?.VMealsAboutUsCardTitle}
                  </h2>
                    <RTFMapping data={item?.VMealsAboutUsCardDescription}/>
                </div>
              </div>
              <div className="absolute bottom-[10%] left-[40%] md:left-[31%] lg:left-[33%] xl:left-[29%] 2xl:left-[34%] ">
                <svg
                  width="101"
                  height="3"
                  className="w-[50px] h-[1px] md:w-[101px] md:h-[3px]"
                  viewBox="0 0 101 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.360107"
                    width="100"
                    height="2"
                    fill="#3E3E3E"
                  />
                </svg>
                <h2 className="f-f-b text-black text-base md:text-xl 2xl:text-4xl mt-1 text-center ">
                  {index+1}
                </h2>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>

      <img
        src="/images/faqtabbg.png"
        className="2xl:w-[965px]  2xl:h-[823px] xl:w-[662px]  xl:h-[523px] md:w-[100%] lg:w-[50%]  md:h-[631px] absolute top-[30%] xl:top-0 -z-10  "
      />
    </div>
    </div>
  );
}
