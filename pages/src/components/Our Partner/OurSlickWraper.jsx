import Ourslick from "./ourslick";
import {useState} from 'react'
function OurSlickWraper({data}){
    
    return(
        <div className=" rounded-2xl  mt-5 md:mt-20  border border-green fitnessbg ">
            <div className="w-[100%] h-[221px] md:h-[331px] 2xl:h-[407px] bg-white rounded-2xl">
              <Ourslick data={data} />
            </div>
            <div className="  p-5 px-8 sm:p-6 2xl:p-12  ">
              <p className="   f-f-it text-white  text-xs sm:text-tiny  2xl:text-base leading-[12px] sm:leading-[23px] text-center  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum orci arcu, dapibus et finibus sit amet, efficitur et
                nunc. Aenean et pharetra orci. Aenean eget sem eget ex accumsan
                aliquet. Etiam at velit mattis nibh cursus ultrices ut non
                ipsum. Etiam volutpat risus vitae odio egestas, suscipit egestas
                lacus pharetra.{" "}
              </p>
            </div>
          </div>
    )
}


export default OurSlickWraper