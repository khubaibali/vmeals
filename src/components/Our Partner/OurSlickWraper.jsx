import Ourslick from "./ourslick";
import {useState} from 'react'
import RTFMapping from '../Common/RTFMapping'
import RTFMappingTestimonials from "../Common/RTFMappingTestimonials";
function OurSlickWraper({data,description}){
    console.log("description in rtf",description)
    return(
        <div className=" rounded-2xl  mt-5 md:mt-20  border border-green fitnessbg ">
            <div className="w-[100%]   rounded-2xl">
              <Ourslick data={data}  />
            </div>
            <div className="  p-5 px-8 sm:p-6 2xl:p-12  ">
              <p className="   f-f-it text-white  text-xs sm:text-tiny  2xl:text-base leading-[12px] sm:leading-[23px] text-center  ">
               {/* {description}{" "} */}
               {/* <RTFMapping data={description}/> */}
               <RTFMappingTestimonials data={description} />
              </p>
            </div>
          </div>
    )
}


export default OurSlickWraper