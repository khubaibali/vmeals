import React, { useState } from "react";
import Link from "next/link";
import Steps from "../OurPlans/Steps";
export default function CustomizeplanOrderSummary({ step, setStep, deliveryInformation, personalInformation, planInformation, price, applyCoupun, setCouponValue, couponError, checkout, discountPrice, discountPercentage, addOnTwoHundred, addOnFifty }) {
  const [openTab, setOpenTab] = React.useState(1);
  const [finalPrice, setFinalPrice] = useState(planInformation?.price)
  const mapPlanName = (plan) => {
    if (plan == "ClassicDiet") return "Classic Diet"
    else return plan
  }



  return (
    <>
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto mt-10 md:my-20">
        {/* code testing */}
        <Steps step={step} />
        {/* code testing ended */}
        <div className=" md:w-8/12 ml-auto mr-auto lg:w-full ">
          <div className="grid grid-cols-12 gap-8 my-10 2xl:my-20    ">
            <div className="   col-span-12 lg:col-span-6   xl:col-span-4  ">
              <div className=" bg-white-light h-[631px] 2xl:h-[759px] rounded-[100px] w-full p-6">
                <h2 className=" text-green f-f-b text-2xl 2xl:text-6xl text-center">
                  Plan Information
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Plan Name:{" "}
                  <span className=" float-right  f-f-r ">{mapPlanName(planInformation?.selectedPlan)}</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Diet Type:<span className=" float-right  f-f-r ">N/A</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Portion Size:
                  <span className=" float-right  f-f-r ">
                    {planInformation?.selectedPortion?.caloriesRange + " | " + planInformation?.selectedPortion?.name}
                  </span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Deliveries per week:
                  <span className=" float-right  f-f-r ">{planInformation?.selectedDaysPerWeek?.days} Days</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Off-Day(s):
                  <span className=" float-right  f-f-r ">
                    {planInformation?.offDays}
                  </span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Plan Duration:
                  <span className=" float-right  f-f-r ">{planInformation?.selectedDuration?.name}</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Meal Type:
                  <span className=" float-right  f-f-r ">
                    {planInformation?.mealType?.name}
                  </span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Allergies:
                  <span className=" float-right  f-f-r ">
                    {planInformation?.allergies?.map(alg => alg.name)?.join(",")}{" "}
                  </span>{" "}
                </h2>

                <div className="grid grid-cols-12 mt-6 ">
                  <div className="   col-span-3  ">
                    <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                      Add On:{" "}
                    </h2>
                  </div>
                  {addOnFifty || addOnTwoHundred > 0 ?
                    <>
                      
                      {addOnFifty > 0 &&
                        <>
                          <div className="   col-span-5  ">
                            <h2 className=" text-black text-sm 2xl:text-base text-center  f-f-r ">
                              Eco-Friendly Cutlery
                            </h2>
                          </div>
                          <div className="   col-span-4  ">
                            <h2 className=" text-black text-sm 2xl:text-base text-center  f-f-r ">
                              + AED50.00
                            </h2>
                          </div>
                        </>
                      }
                      {addOnTwoHundred &&
                        <>
                          <div className="   col-span-5  ">
                            <h2 className=" text-black text-sm 2xl:text-base text-center  f-f-r mt-4 ">
                              Thermal Bags (x2)
                            </h2>
                            <div className="   col-span-4  ">
                              <h2 className=" text-black text-sm 2xl:text-base text-center  f-f-r mt-4 ">
                                + AED200.00 (Refundable Deposit)
                              </h2>
                            </div>
                          </div>
                        </>
                      }
                    </> : 
                    <div className="   col-span-9 text-black-dark  text-sm 2xl:text-base f-f-b  text-right">
                      <span className=" float-right  f-f-r">{"N/A"}</span></div>}
                </div>
              </div>
            </div>

            <div className="   col-span-12 lg:col-span-6  hidden xl:block xl:col-span-4  ">
              <div className=" bg-white-light h-[400px] 2xl:h-[467px] rounded-[100px] w-full p-6">
                <h2 className=" text-green f-f-b text-2xl 2xl:text-6xl text-center">
                  Personal Information
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  First Name: <span className=" float-right  f-f-r ">{personalInformation?.firstName}</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Last Name: <span className=" float-right  f-f-r ">{personalInformation?.lastName}</span>{" "}
                </h2>
                {/* <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Diet Type:<span className=" float-right  f-f-r ">Doe</span>{" "}
                </h2> */}
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Email Address:
                  <span className=" float-right  f-f-r ">
                    {personalInformation?.email}
                  </span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Mobile Number:
                  <span className=" float-right  f-f-r ">+971 {personalInformation?.mobileNumber}</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Date of Birth:
                  <span className=" float-right  f-f-r ">{(new Date(personalInformation?.dateOfBirth)).toDateString()}</span>{" "}
                </h2>
              </div>

              {/* input filed  */}
              <div className="mt-10 relative ">
                <input
                  placeholder="Enter Coupon Code..."
                  class=" input-register 2xl:h-[70px] "
                  onChange={(e) => setCouponValue(e.target.value)}
                />
                <button onClick={() => applyCoupun()} class=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub  px-[47px] sm:px-[50px] py-[13px] sm:py-[11px]  2xl:w-[219px]  lg:py-[11px] xl:h-[49px] 2xl:h-[70px] mt-5 2xl:mt-8  absolute right-[-11px] top-[-20px] 2xl:top-[-32px] rounded-[100px] ">
                  Apply Code
                </button>
                {couponError && <p className="text-red text-center mt-1 text-sm 2xl:text-base ">{couponError}</p>}
              </div>
              {/* input filed ended */}
              <div className="grid grid-cols-12 mt-6 gap-4 ">
                <div className="   col-span-6  ">
                  <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                    Discount:<span className=" f-f-r float-right ">{discountPercentage || 0}%</span>{" "}
                  </h2>
                </div>
                <div className="   col-span-6  ">
                  <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                    Sub-Total:
                    <span className=" f-f-r float-right ">AED{(Number(price)  - Number(discountPrice || 0)).toFixed(2)}</span>{" "}
                  </h2>
                </div>
                <div className="   col-span-6  ">
                  <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                    Discount Amount:
                    <span className=" f-f-r float-right ">AED{Number(discountPrice || 0).toFixed(2)}</span>{" "}
                  </h2>
                </div>
                <div className="   col-span-6  ">
                  <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                    VAT:<span className=" f-f-r float-right ">AED{((Number(price) - Number(discountPrice || 0) ) * 0.05).toFixed(2)}</span>{" "}
                  </h2>
                </div>
              </div>

              <div
                class=" ml-auto mr-auto w-8/12  md:w-5/12 lg:w-4/12 xl:w-6/12  "
                bis_skin_checked="1"
              >
                <ul class=" inline-flex mt-7  ">
                  <li>
                    <h2 class=" text-black text-2xl f-f-b ">Total:</h2>
                  </li>
                  <li class=" ml-4 text-right ">
                    <h2 class=" text-black text-2xl f-f-b ">AED{(Number(price + (Number(price) - Number(discountPrice)) * 0.05) - Number(discountPrice) + Number(addOnTwoHundred) + Number(addOnFifty)).toFixed(2)}</h2>
                    <h3 class="text-green f-f-r text-sm 2xl:text-tiny -mt-2 ">
                      Price inclusive of VAT
                    </h3>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-12 gap-8  md:mt-10   ">
                <div className="   col-span-6 xl:col-span-6 ">
                  <div className="text-center">
                    <button onClick={() => setStep(3)} className=" buttonstyle  text-sm sm:text-tiny 2xl:text-lg f-f-b text-green shadow-lg border border-green bg-white rounded-full px-[47px] sm:px-[50px] py-[15px] sm:py-[17px] 2xl:w-[219px] 2xl:h-[79px] mt-5 2xl:mt-8">
                      Back
                    </button>
                  </div>
                </div>
                <div className="   col-span-6 xl:col-span-6 ">
                  <div className="text-center">
                    {/* <Link href="/confirmation"> */}
                    <button onClick={() => checkout()} className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full px-[47px] sm:px-[50px] py-[15px] sm:py-[17px] 2xl:w-[219px] 2xl:h-[79px] mt-5 2xl:mt-8">
                      Checkout
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="   col-span-12  lg:col-span-6   xl:col-span-4 ">
              <div className=" bg-white-light h-[525px]  md:h-[631px] 2xl:h-[759px] rounded-[100px] w-full p-6">
                <h2 className=" text-green f-f-b text-2xl 2xl:text-6xl text-center">
                  Delivery Information
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Starting Date:{" "}
                  <span className=" float-right  f-f-r ">{(new Date(deliveryInformation?.startingDate)).toDateString()}</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  City:<span className=" float-right  f-f-r ">{deliveryInformation?.city}</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Address:
                  <span className=" float-right  f-f-r ">
                    {deliveryInformation?.address}
                  </span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Apartment/Villa Number:
                  <span className=" float-right  f-f-r ">{deliveryInformation?.appartmentNumber}</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Access Code:<span className=" float-right  f-f-r ">{deliveryInformation?.accessCode || "N/A"}</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Delivery Slot:
                  <span className=" float-right  f-f-r ">{deliveryInformation?.deliverySlot}</span>{" "}
                </h2>

                <div className="grid grid-cols-12 mt-6 w-full ">
                  <div className="   col-span-12  xl:col-span-4  ">
                    <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                      Google Maps Link:{" "}
                    </h2>
                  </div>
                  <div className="   col-span-12  xl:col-span-8  ">
                    <h2 className=" text-black text-sm 2xl:text-base  text-right f-f-r ">
                      {deliveryInformation?.googleLink}
                    </h2>
                  </div>
                </div>

                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Delivery Instructions:
                  <span className=" float-right  f-f-r ">
                    {deliveryInformation?.deliveryInstructions || "N/A"}
                  </span>{" "}
                </h2>
              </div>
            </div>

            <div className="   col-span-12 lg:col-start-4 lg:col-end-10  xl:hidden xl:col-span-4  ">
              <div className=" bg-white-light h-[400px] 2xl:h-[467px] rounded-[100px] w-full p-6">
                <h2 className=" text-green f-f-b text-2xl 2xl:text-6xl text-center">
                  Personal Information
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Last Name: <span className=" float-right  f-f-r ">John</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Diet Type:<span className=" float-right  f-f-r ">Doe</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Email Address:
                  <span className=" float-right  f-f-r ">
                    johndoe@gmail.com
                  </span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Mobile Number:
                  <span className=" float-right  f-f-r ">+971 XX XXX XXXX</span>{" "}
                </h2>
                <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b mt-6 ">
                  Date of Birth:
                  <span className=" float-right  f-f-r ">01/01/1990</span>{" "}
                </h2>
              </div>

              {/* input filed  */}
              <div className="mt-10 relative ">
                <input
                  placeholder="Enter Coupon Code..."
                  class=" input-register 2xl:h-[70px] "
                  onChange={(e) => setCouponValue(e.target.value)}
                />
                <button onClick={() => applyCoupun()} class=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub  px-[47px] sm:px-[50px] py-[13px] sm:py-[11px]  2xl:w-[219px]  lg:py-[11px] xl:h-[49px] 2xl:h-[70px] mt-5 2xl:mt-8  absolute right-[-11px] top-[-20px] 2xl:top-[-32px] rounded-[100px] ">
                  Apply Code
                </button>
              </div>
              {/* input filed ended */}
              <div className="grid grid-cols-12 mt-6 gap-4 ">
                <div className="   col-span-6  ">
                  <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                    Discount:<span className=" f-f-r float-right ">{discountPercentage}%</span>{" "}
                  </h2>
                </div>
                <div className="   col-span-6  ">
                  <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                    Sub-Total:
                    <span className=" f-f-r float-right ">AED{(Number(price)  - Number(discountPrice || 0)).toFixed(2)}</span>{" "}
                  </h2>
                </div>
                <div className="   col-span-6  ">
                  <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                    Discount Amount:
                    <span className=" f-f-r float-right ">AED{Number(discountPrice || 0).toFixed(2)}</span>{" "}
                  </h2>
                </div>
                <div className="   col-span-6  ">
                  <h2 className=" text-black-dark  text-sm 2xl:text-base f-f-b  ">
                    VAT:<span className=" f-f-r float-right ">AED{((Number(price) - Number(discountPrice || 0) ) * 0.05).toFixed(2)}</span>{" "}
                  </h2>
                </div>
              </div>

              <div
                class=" ml-auto mr-auto w-8/12  md:w-5/12 lg:w-4/12 xl:w-6/12  "
                bis_skin_checked="1"
              >
                <ul class=" inline-flex mt-7  ">
                  <li>
                    <h2 class=" text-black text-2xl f-f-b ">Total:</h2>
                  </li>
                  <li class=" ml-4 text-right ">
                    <h2 class=" text-black text-2xl f-f-b ">AED{(Number(price + (Number(price) - Number(discountPrice)) * 0.05) - Number(discountPrice) + Number(addOnTwoHundred) + Number(addOnFifty)).toFixed(2)}</h2>
                    <h3 class="text-green f-f-r text-sm 2xl:text-tiny -mt-2 ">
                      Price inclusive of VAT
                    </h3>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-12 gap-8  md:mt-10   ">
                <div className="   col-span-6 xl:col-span-6 ">
                  <div className="text-center">
                    {/* <button onClick={() => {
                      console.log("battttt")
                      setStep(3)
                    }} type="button" className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-green shadow-lg border border-green bg-white rounded-full px-[47px] sm:px-[50px] py-[15px] sm:py-[17px] 2xl:px-[79px] 2xl:py-[25px] mt-5 2xl:mt-8">
                      Back
                    </button> */}
                  </div>
                </div>
                <div className="   col-span-6 xl:col-span-6 ">
                  <div className="text-center">
                    {/* <Link href="/confirmation"> */}
                    <button onClick={() => checkout()} className="text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full px-[47px] sm:px-[50px] py-[15px] sm:py-[17px] 2xl:w-[219px] 2xl:h-[79px] mt-5 2xl:mt-8">
                      Checkout
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
