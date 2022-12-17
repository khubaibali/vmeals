import React, { useState } from "react";
import Ourslick from "./ourslick";
import Registerform from "../Common/Registerform";
import { vmealsOurPartners } from "../../../src/lib/APICommunications";
import OurSlickWraper from "./OurSlickWraper";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Fitnesour({ ourParnersData }) {
  const [selectPartnerList, setPartnerListIndex] = useState(0)
  console.log('our parner data', ourParnersData)
  return (
    <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto mb-3 mt-10 sm:my-20">
      <div className="grid grid-cols-12  gap-8 lg:gap-14  ">
        <div className="   col-span-12 lg:col-span-5 xl:col-span-5  ">
          <div className=" md:w-10/12 lg:w-full ml-auto mr-auto" >
          <h2 class="  text-base  sm:text-3xl 2xl:text-4xl f-f-li text-green text-center xl:text-left tracking-[1px] lg:tracking-[0.22em] ">
            {/* OUR PARTNERS */}
            {ourParnersData?.[0]?.VMealsOurPartnersTitle}
          </h2>
          {<OurSlickWraper data={ourParnersData[0]?.VMealsOurPartnersList} setPartnerListIndex={setPartnerListIndex}/>}
          </div>
        </div>
        <div className="   col-span-12 lg:col-span-1 xl:col-span-1  "></div>
        <div className="   col-span-12 lg:col-span-6 xl:col-span-6  ">
          <div className=" bg-white-light p-5 xl:p-7 2xl:p-10 rounded-[20px] -mt-4 md:mt-0 ">
            <h2 className=" text-green f-f-b text-center md:text-left text-xl  md:text-3xl 2xl:text-5xl ">
              Register your Company
            </h2>
            <Registerform />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
              theme="light"
            >
            </ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
}


export async function getServerSideProps() {
  try {
    let data = await fetch(vmealsOurPartners)
    data = await data.json()

    return {
      props: { ourParnersData: { ...data?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { ourParnersData: {} }
    }
  }

}