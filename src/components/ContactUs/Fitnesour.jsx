import Link from "next/link";
import React from "react";
import { vmealsContactUs } from "../../lib/APICommunications";
import Contactusform from "../Common/Contactusform";
const images = ["/images/location.png","/images/smartphone.png","/images/email.png","/images/clock.png"]
export default function Fitnesour({ contactUsData = [{}] }) {
console.log("contactUsData",contactUsData)
  return (
    <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto mt-10 sm:my-20">
      <div className="grid grid-cols-12  gap-8 lg:gap-14 mt-10 md:mt-10 lg:my-24  ">
        <div className="   col-span-12 lg:col-span-5 xl:col-span-5  ">
          <h2 className="  text-base  sm:text-3xl 2xl:text-4xl f-f-li text-green text-left tracking-[1px] uppercase lg:tracking-[0.22em] ">
            {/* Need Assistance? */}
            {contactUsData?.[0]?.VMealsContactUsTitle}
          </h2>
          {/* code started */}
          <div className="w-11/12 ml-auto mr-auto md:w-12/12 mt-5 md:mt-10  lg:mt-20 text-left  ">

            {
              contactUsData?.[0]?.VMealsContactUsList?.map((item, ind) => (
                <div>
                  <ul className={ind == 0 ? "inline-flex" : "inline-flex mt-8 md:mt-14 "}>
                    
                    <li>
                      {" "}
                      <img
                        src={images[ind]}
                        className=" width-[34px] md:width-[40px] 2xl:width-[50px] h-[34px] md:h-auto "
                      />{" "}
                    </li>
                    <Link href={item?.VMealsContactUsLinkUrl} target={"_blank"}>
                      <li className="ml-3 md:ml-7 mt-1 md:mt-3">
                        {" "}
                        <h2 className="f-f-b text-black-dark  text-sm md:text-tiny 2xl:text-lg   ">
                          {item?.VMealsContactUsListTitle}
                        </h2>{" "}
                      </li>
                    </Link>
                  </ul>
                </div>
              ))
            }
          </div>
          {/* code ended */}

          <h2 className="f-f-b text-black-dark text-xl md:text-4xl mt-10 2xl:mt-20  text-left">
            {/* Connect with us! */}
            {contactUsData?.[0]?.VMealsContactUsText}
          </h2>
          <div className="text-left">
            
              <a href={contactUsData?.[0]?.VMealsContactUsButtonLinkUrl} target="_blank" >
                <button className="  text-sm sm:text-tiny 2xl:text-lg f-f-b text-white green-gradiant-2 rounded-full w-[152px] h-[55px] md:w-[219px] md:h-[79px]  lg:w-[154px] lg:h-[62px] xl:w-[208px] xl:h-[79px]   mt-5 2xl:mt-8">
                 <ul className="inline-flex">
                  <li>
                    <img
                      src="/images/contactwhatsapp.png"
                      className="w-[30px] sm:w-[40px]   mt-1 2xl:mt-2   "
                    />
                  </li>
                  <li className="mt-2 md:mt-3 ml-2 md:ml-4">{contactUsData?.[0]?.VMealsContactUsButtonText}</li>
                </ul> 
                </button>
                
              </a>

           
            <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white green-gradiant-2 rounded-full ml-6 md:ml-8 w-[152px] h-[55px] md:w-[219px] md:h-[79px]  lg:w-[154px] lg:h-[62px] xl:w-[208px] xl:h-[79px]   mt-5 2xl:mt-8">
              <ul className="inline-flex">
                <li>
                  <img
                    src="/images/chat.png"
                    className="  w-[30px] sm:w-[40px]   mt-1 2xl:mt-2   "
                  />
                </li>
                <li className="mt-2 md:mt-3 ml-2 md:ml-4">{contactUsData?.[0]?.VMealsContactUsButtonTextTwo}</li>
              </ul>
            </button>
          </div>
        </div>
        <div className="   col-span-12 lg:col-span-1 xl:col-span-1  "></div>
        <div className="   col-span-12 lg:col-span-6 xl:col-span-6  ">
          <div className=" bg-white-light p-5 xl:p-7 2xl:p-10 rounded-lg ">
            <h2 className=" text-green f-f-b text-center md:text-left text-xl  md:text-3xl 2xl:text-5xl ">
              Let’s have a chat
            </h2>
            <Contactusform />
          </div>
        </div>
      </div>
    </div>
  );
}


export async function getServerSideProps() {
  try {
    //console.log('header fetching')
    let data = await fetch(vmealsContactUs)
    let contactus = await data.json()

    return {
      props: { contactUsData: { ...contactus?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { contactUsData: {} }
    }
  }

}