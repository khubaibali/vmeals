import React, { useEffect } from "react";
import Informationslick from "./Informationslick";
import Link from "next/link";
import Cookies from "universal-cookie";
import axios from "axios";
import { vmealsOrder } from "../../lib/APICommunications";
const cookies = new Cookies();
export default function Customizeplan() {
  const [openTab, setOpenTab] = React.useState(1);

  const createOrder = (body) => {
   
    axios
      .post(vmealsOrder, body)
      .then((res) => {
        // setOrderAPIResponse(res);
        
      })
      .catch((err) => {
        //console.log("ERROR", err);
        return false;
      });
  };

  useEffect(()=> {
    const success = cookies.get("paymentSuccess")
    const data = cookies.get("orderDetail")
    //console.log("suuuuuu", success, data)
    if(success) {
      createOrder(data)
      cookies.remove("paymentSuccess")
      cookies.remove("orderDetail")
    }
  },[cookies.get("orderDetail")])
  return (
    <>
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto mt-5 md:my-10 lg:my-20">
   
        <div className="grid grid-cols-12 gap-8 my-10 2xl:my-20   bg-green-light rounded-[100px] ">
          <div className="   col-span-12  lg:col-span-6  ">
            <div className=" p-6 md:p-16 xl:p-7 2xl:p-[50px]">
              <img src="/images/success.png" className="ml-auto mr-auto w-[126px] md:w-[164px] 2xl:w-[213px] h-auto  mt-5 lg:mt-20  " />
              <h2 className=" f-f-li text-green text-base md:text-xl 2xl:text-4xl text-center tracking-[0.2em]  mt-8 " >PAYMENT SUCCESSFUL!</h2>
              <h2 className=" text-green 2xl:leading-[70px]  f-f-b text-center  text-xl mt-8 md:text-5xl xl:text-4xl 2xl:text-9xl  ">
              Thank you for making us a 
part of your fitness journey!
              </h2>
              <h2 className=" text-dark f-f-r text-sm text-center  mt-8  2xl:text-2xl ">
              Please check your email for the invoice & starter kit.
              </h2>     
            </div>
          </div>
          <div className="   col-span-12  lg:col-span-6  ">
            <div className=" relative ">
              <img
                src="/images/paymentmeal.png"
                className="w-full h-[588px] md:h-[891px] xl:h-[680px]  2xl:h-[796px] rounded-[100px]  "
              />
              <div className=" 2xl:w-[518px] w-[356px] h-[319px] md:w-[441px] md:h-[272px] 2xl:h-[318px] personscrd p-6 md:p-8 left-[4%] md:left-[19%] lg:left-[13%] xl:left-[19%] bottom-[49px] md:bottom-[110px] xl:bottom-[49px] absolute">
                <Informationslick />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
