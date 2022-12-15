import React from "react";
import Welcomeinput from "./Welcomeinput";
import Informationslick from "./Informationslick";
import Link from "next/link";
import Steps from "../OurPlans/Steps";
export default function CustomizeplanDeliveryInformation({ step, setStep, setDeliveryInformation, planInformation, price, deliveryInformation, addOnFifty, addOnTwoHundred }) {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto mt-10 mb-5 md:my-20">
        {/* code testing */}
        <Steps step={step} />
        {/* code testing ended */}

        <div className="grid grid-cols-12 gap-8 mt-10 md:my-10 2xl:my-20   bg-green-light rounded-[100px] ">
          <div className="   col-span-12  xl:col-span-6  ">
            <div className=" p-6 md:p-16 xl:p-7 2xl:p-[50px]">
              <h2 className=" text-green f-f-b text-center md:text-left text-xl  md:text-5xl xl:text-4xl 2xl:text-9xl  ">
                Delivery Information
              </h2>
              <h2 className=" text-dark f-f-li text-sm text-center md:text-left md:text-base 2xl:text-4xl ">
                We bring joy at your doorstep!
              </h2>

              <Welcomeinput setStep={setStep} step={step} setDeliveryInformation={setDeliveryInformation} planInformation={planInformation} price={price} deliveryInformation={deliveryInformation} addOnFifty={addOnFifty} addOnTwoHundred={addOnTwoHundred} />
            </div>
          </div>
          <div className="   col-span-12  xl:col-span-6  ">
            <div className=" relative ">
              <img
                src="/images/Deliverydemale.png"
                className="w-full h-[588px] md:h-[891px] xl:h-[680px]  2xl:h-[1000px] rounded-[100px] object-cover  "
              />
              <div className=" 2xl:w-[518px] w-[356px] h-[319px] md:w-[441px] md:h-[272px] 2xl:h-[318px] personscrd p-6 md:p-8 left-[4%] md:left-[19%] lg:left-[32%] xl:left-[19%] bottom-[49px] md:bottom-[110px] xl:bottom-[76px] 2xl:bottom-[198px] absolute">
                <Informationslick />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
