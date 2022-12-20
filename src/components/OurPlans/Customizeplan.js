import React, { useEffect, useState } from "react";

import Link from "next/link";
import Steps from "./Steps";
import { mealPlansFaqs, useCoupon, vmealsCreatePayment, vmealsOrder, vmealsPages } from "../../lib/APICommunications";
import PlanData from '../../lib/data/meal-plans/data.json'
import RTFMapping from "../Common/RTFMapping";
import { getDurationName } from "../../helpers";
import { Multiselect } from "multiselect-react-dropdown";
import CustomizeplanDeliveryInformation from '../DeliveryInformation/Customizeplan';
import CustomizeplanPersonalInformation from "../PersonalInformation/Customizeplan";
import CustomizeplanOrderSummary from "../OrderSummary/Customizeplan";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export default function Customizeplan({ heading, description, selectedPlan, setSelectedPlan, setStep, step = 1, weeklyMenu, testimonialsData }) {
  // console.log("testimonialsData>>>>",testimonialsData)
  
  //console.log("setStepsetStep", weeklyMenu);
  const [isLoading, setLoading] = useState(false);

  // const [selectedPlan, setSelectedPlan]
  const [selectedPortion, setSelectedPortion] = useState(PlanData[selectedPlan]?.portions[0])
  const [selectedDuration, setSelectedDuration] = useState(PlanData[selectedPlan]?.portions[0]?.planDuration[0]);
  const [selectedDaysPerWeek, setSelectedDaysPerWeek] = useState(PlanData[selectedPlan]?.portions[0]?.planDuration[0]?.deliveriesPerWeek[0]);
  const [options, setOptions] = useState(PlanData[selectedPlan]?.allergies?.map((a, i) => ({
    id: i,
    name: a
  })));
  const [allergies, setAllergiesData] = useState(null);
  const [addOnsArray, setAddOnsArray] = useState([]);
  const [mealType, setMealType] = useState(PlanData[selectedPlan]?.portions[0]?.planDuration[0]?.deliveriesPerWeek[0]?.mealType[0]);
  const [offDays, setOffDays] = useState("Friday - Saturday");
  const [price, setPrice] = useState(PlanData[selectedPlan]?.portions[0]?.planDuration[0]?.deliveriesPerWeek[0]?.mealType[0]?.price);
  const [totalPrice, setTotalPrice] = useState(PlanData[selectedPlan]?.portions[0]?.planDuration[0]?.deliveriesPerWeek[0]?.mealType[0]?.price - (PlanData[selectedPlan]?.portions[0]?.planDuration[0]?.deliveriesPerWeek[0]?.mealType[0]?.price * 0.05));
  const [addOnFifty, setAddOnFifty] = useState(0);
  const [addOnTwoHundred, setAddOnTwoHundred] = useState(0);
  const [personalInformation, setPersonalInformation] = useState({});
  const [deliveryInformation, setDeliveryInformation] = useState({});
  const [planInformation, setPlanInformation] = useState({});
  const [couponValue, setCouponValue] = useState(null);
  const [coupunApplied, setCoupunApplied] = useState(false);
  const [couponError, setCouponError] = useState(null);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [VAT, setVAT] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(null);
  const [couponAPIResponse, setCouponAPIResponse] = useState(null);

  // const [step, setStep] = React.useState(1);
  const [aboutus, setaboutus] = React.useState(false);
  const [maximum, setmaximum] = React.useState(false);

  const setAlerg = (data) => {
    //console.log("hhhhhhhhhhhhhhhh", data);
    // let res = data.map(a => a.allergy);
    setAllergiesData(data);
  };

  const setAllPrices = (plan, portion, duration, dpw, mealType) => {

  }

  const setPlanInformationData = () => {
    setPlanInformation({
      selectedPlan,
      selectedPortion,
      selectedDuration,
      selectedDaysPerWeek,
      allergies,
      mealType,
      price,
      offDays
    })
  }

  const applyCoupun = (e) => {
    if (couponValue == "" || !couponValue) {
      setCouponError("Please enter code first!");
    } else {
      setCouponError(null);
      //console.log("useee", couponValue);
      axios
        .post(useCoupon, { code: couponValue, email: personalInformation?.email })
        .then((res) => {
          setCouponAPIResponse(res);

          if (res?.data?.message == "Failed") {
            setCouponError(res?.data?.err);
            setCoupunApplied(false);
            setCouponValue("");
            return false;
          } else {
            setCouponError(null);
            // console.log(
            //   "yyyyy",
            //   Number(price),
            //   Number(res?.doc?.discountPercentage),
            //   typeof res?.data?.doc?.discountPercentage,
            //   res
            // );

            let onlyDiscountPrice =
              Number(price) *
              (Number(res?.data?.doc?.discountPercentage) / 100);

            setDiscountPrice(onlyDiscountPrice);
            setDiscountPercentage(Number(res?.data?.doc?.discountPercentage));
            // console.log(
            //   "typeof",
            //   typeof onlyDiscountPrice,
            //   onlyDiscountPrice,
            //   price,
            //   totalPrice,
            //   typeof price,
            //   typeof totalPrice
            // );
            let priceConverted = Number(price);
            let totalPriceConverted = Number(totalPrice);
            let priceFinal = priceConverted - onlyDiscountPrice;
            let totalPriceFinal = totalPriceConverted - onlyDiscountPrice;
            // console.log(
            //   "aaaaaaa",
            //   priceFinal,
            //   typeof priceFinal,
            //   totalPriceFinal,
            //   typeof totalPriceFinal
            // );
            // setPrice(Number(priceConverted) - Number(onlyDiscountPrice));
            // setTotalPrice(Number(totalPrice) - Number(onlyDiscountPrice));
            setCoupunApplied(true);
            return false;
          }
        })
        .catch((err) => {
          //console.log("ERROR", err);
          return false;
        });
    }
  };

  const checkout = () => {
    setLoading(true);
    let body = {
      amount: ((Number(price) + (Number(price) - Number(discountPrice)) * 0.05) - Number(discountPrice) + Number(addOnTwoHundred) + Number(addOnFifty)).toFixed(2),
      totals: {
        subtotal: ((Number(price)) - Number(discountPrice) + Number(addOnTwoHundred) + Number(addOnFifty)).toFixed(2),
        tax: 0,
        discount: Number(discountPrice).toFixed(2),
        skipTotalsValidation: true,
      },
      items: [
        {
          name: selectedPlan,
          quantity: 1,
          linetotal: ((Number(price) + (Number(price) - Number(discountPrice)) * 0.05) - Number(discountPrice) + Number(addOnTwoHundred) + Number(addOnFifty)).toFixed(2),
        },
      ],
      customer: {
        id: "123456",
        firstName: personalInformation?.firstName,
        lastName: personalInformation?.lastName,
        email: personalInformation?.email,
        phone: personalInformation?.mobileNumber,
      },
      billingAddress: {
        name: personalInformation?.firstName + " " + personalInformation?.lastName,
        address1: deliveryInformation?.address,
        address2: "",
        city: deliveryInformation?.city || "Dubai",
        state: "",
        zip: "",
        country: "AE",
      },
      deliveryAddress: {
        name: personalInformation?.firstName + " " + personalInformation?.lastName,
        address1: deliveryInformation?.address,
        address2: "",
        city: personalInformation?.city || "Dubai",
        state: "",
        zip: "",
        country: "AE",
      },
      returnUrl: process.env.NEXT_PUBLIC_PAYMENT_REDIRECT_URL,
    };
    axios
      .post(vmealsCreatePayment, body)
      .then((res) => {
        // setPaymentAPIResponse(res);

        //console.log("payment api response");
        if (res?.data?.doc?.success == false) {
          toast.success(res?.data?.doc?.error);
        }
        if (res?.data?.doc?.success == true) {
          cookies.set("paymentSuccess", true)
          //console.log("aaaaa", res?.data?.doc?.result?.redirectUrl);
          window.location = res?.data?.doc?.result?.redirectUrl;
          createOrder();
          // setLoading(false)
        }
        //console.log("RES", res);
        return false;
      })
      .catch((err) => {
        //console.log("ERROR", err);
        return false;
      });
  };

  // console.log("allergies", allergies?.map((a) => a.name)?.join(", "))
  const createOrder = () => {
// console.log("deliveryInformation", deliveryInformation)
    let body = {
      plan: {
        planName: selectedPlan,
        typeOfDiet: selectedPlan == "IndianFusionNonVegetarian" || selectedPlan == "GreenDietVegan" ? "Vegan" : "Non-Vegetarian",
        portionSize:
          selectedPortion.name + " | " + selectedPortion.caloriesRange,
        deliveriesPerWeek: selectedDaysPerWeek.days,
        offDays: offDays,
        planDuration: selectedDuration.name,
        mealType: mealType?.id?.split("_"),
        allergies: allergies?.length ? allergies?.map((a) => a.name)?.join(", ") : "N/A",
        addOns: addOnsArray,
        couponCode: {
          code: couponAPIResponse?.doc?.code,
          percentageOff: couponAPIResponse?.doc?.discountPercentage || 0 + "%",
        },
      },
      personalInfo: {
        firstName: personalInformation?.firstName,
        lastName: personalInformation?.lastName,
        email: personalInformation?.email,
        mobileNumber: personalInformation?.mobileNumber,
        nationality: personalInformation?.nationality,
        dateOfBirth: (new Date(personalInformation?.dateOfBirth)).toDateString(),
      },
      deliveryDetails: {
        startingDate: (new Date(deliveryInformation?.startingDate).toDateString()),
        city: deliveryInformation?.city,
        address: deliveryInformation?.address,
        apartmentNumber: deliveryInformation?.appartmentNumber,
        accessCode: deliveryInformation?.accessCode || "N/A",
        googleMapsLink: deliveryInformation?.googleLink || "N/A",
        deliveryInstructions: deliveryInformation?.deliveryInstructions || "N/A",
        deliverySlot: deliveryInformation?.deliverySlot,
        price: Number(price),
        totalPrice: Number(((Number(price) + (Number(price) - Number(discountPrice)) * 0.05) - Number(discountPrice) + Number(addOnTwoHundred) + Number(addOnFifty)).toFixed(2)),
        discountPrice:  Number((discountPrice).toFixed(2)),
      },
    };
    cookies.set(
      "orderDetail",
      JSON.stringify(body)
    );
    // axios
    //   .post(vmealsOrder, body)
    //   .then((res) => {
    //     setOrderAPIResponse(res);
    //   })
    //   .catch((err) => {
    //     //console.log("ERROR", err);
    //     return false;
    //   });
  };


  //console.log("Personal Information", personalInformation)

  const getCustomizeActiveClass = (selected, checked, type) => {
    //console.log("SELECTED", selected);
    if (type == "days") {
      return selected?.days == checked?.days ? "cusntn" : "";
    } else if (type == "name") {
      return selected?.name == checked?.name ? "cusntn" : "";
    } else {
      return selected?.id == checked?.id ? "cusntn" : "";
    }
  };

  useEffect(() => {
    setTotalPrice()
  })

  //console.log("optionsoptions", price, mealType, PlanData[selectedPlan]?.portions?.find(p => p.name == selectedPortion.name)?.planDuration?.find((p) => p.name == selectedDuration.name)?.deliveriesPerWeek.find((d) => d.days == selectedDaysPerWeek.days)?.mealType?.find((m) => m.id == mealType.id)?.price)
  //?.portion?.planDuration?.find((p) => p.name == selectedDuration.name)?.deliveriesPerWeek.find((d) => d.days == selectedDaysPerWeek.days)?.mealType?.find((m) => m.id == mealType.id)?.price)

  return (
    <>
      <div className=" w-11/12 2xl:max-w-[1600px] ml-auto mr-auto my-10 md:my-20">
        {/* code testing */}
        <Steps step={step} setStep={setStep} />
        {/* code testing ended */}
        {step == 1 &&

          <div className="grid grid-cols-12 gap-8  mt-10 lg:mt-20   ">
            <div className="   col-span-12  lg:col-span-6  ">
              <h1 className="  text-base  sm:text-2xl  2xl:text-4xl f-f-li  captalize text-green tracking-[1px] lg:tracking-[0.22em]  text-center lg:text-left  md:leading-[56px] uppercase ">
                {heading}
              </h1>
              <RTFMapping data={description} />
            </div>
            <div className="   col-span-12  lg:col-span-6  ">
              <div className="bg-green-light p-4 md:p-8 rounded-[20px]  ">
                <ul className="inline-flex w-full ">
                  <li>
                    <h2 className=" text-green f-f-b text-center md:text-left text-base mt-3  md:text-3xl lg:text-lg  2xl:text-5xl md:mt-5  ">
                      Customise your plan
                    </h2>
                  </li>
                  <li className="text-right ml-auto ">
                    <a href={`${process.env.NEXT_PUBLIC_BASE_URL}${weeklyMenu?.url}`} target="_blank">
                    <button className="green-gradiant-2 shadow-lg f-f-b text-sm md:text-base 2xl:text-lg text-white   w-[136px]  h-[49px] md:w-[182px]  md:h-[60px] 2xl:h-[79px]  2xl:w-[219px]  rounded-full  ">
                      <ul className="inline-flex">
                        <li>
                          <img
                            src="/images/menu 1.png"
                            className="  w-[16px] md:w-[32px] lg:w-[28px] xl:w-[27px] 2xl:w-[40px] h-auto mt-2 lg:mt-4 xl:mt-3  "
                          />
                        </li>
                        <li className="mt-1 md:mt-3 2xl:mt-4 ml-2 lg:ml-2 xl:ml-4">
                          Weekly Menu
                        </li>
                      </ul>
                    </button>
                    </a>
                  </li>
                </ul>
                {(selectedPlan == "IndianFusionNonVegetarian" ||
                  selectedPlan == "GreenDietVegan" ||
                  selectedPlan == "IndianFusionVegetarianDiet" ||
                  selectedPlan == "GreenDietVegetarian") && (
                    <>

                      <h2 className=" f-f-b text-black  text-lg 2xl:text-2xl mt-8 ">
                        Choose your type of diet
                      </h2>

                      <div className="grid grid-cols-12  my-4 border border-green shadow-xl rounded-[20px] bg-white ">
                        <div className="   col-span-6 ">

                          <button className={`${selectedPlan == "GreenDietVegetarian" || selectedPlan == "IndianFusionVegetarianDiet" ? "cusntn" : ""} w-full h-[47px] md:h-[59px] 2xl:h-[68px]  pt-1 `} onClick={() => {
                            setSelectedPlan(selectedPlan == "GreenDietVegan" ? "GreenDietVegetarian" : "IndianFusionVegetarianDiet");
                            let select = selectedPlan == "GreenDietVegan" ? "GreenDietVegetarian" : "IndianFusionVegetarianDiet"
                            setPrice(PlanData[select]?.portions?.find(p => p.name == selectedPortion.name)?.planDuration?.find((p) => p.name == selectedDuration.name)?.deliveriesPerWeek.find((d) => d.days == selectedDaysPerWeek.days)?.mealType?.find((m) => m.id == mealType.id)?.price)
                            setOptions(PlanData[selectedPlan]?.allergies?.map((a, i) => ({
                              id: i,
                              name: a
                            })))
                          }}>
                            <h2 className=" text-black f-f-b text-sm 2xl:text-base ">
                              Vegetarian Diet
                            </h2>
                          </button>
                        </div>

                        <div className="   col-span-6  ">
                          <button className={`${selectedPlan == "GreenDietVegan" || selectedPlan == "IndianFusionNonVegetarian" ? "cusntn" : ""} w-full h-[47px] md:h-[59px] 2xl:h-[68px]  pt-1 `}
                            onClick={() => {
                              let select = selectedPlan == "GreenDietVegetarian" ? "GreenDietVegan" : "IndianFusionNonVegetarian"
                              setSelectedPlan(selectedPlan == "GreenDietVegetarian" ? "GreenDietVegan" : "IndianFusionNonVegetarian");
                              setPrice(PlanData[select]?.portions?.find(p => p.name == selectedPortion.name)?.planDuration?.find((p) => p.name == selectedDuration.name)?.deliveriesPerWeek.find((d) => d.days == selectedDaysPerWeek.days)?.mealType?.find((m) => m.id == mealType.id)?.price)
                              setOptions(PlanData[selectedPlan]?.allergies?.map((a, i) => ({
                                id: i,
                                name: a
                              })))
                            }}
                          >
                            <h2 className=" text-black f-f-b text-sm 2xl:text-base ">
                              {selectedPlan == "IndianFusionNonVegetarian" || selectedPlan == "IndianFusionVegetarianDiet" ? "Non-Vegetarian" : "Vegan"} Diet
                            </h2>
                          </button>
                        </div>


                      </div>

                    </>
                  )}
                <h2 className=" f-f-b text-black  text-lg 2xl:text-2xl mt-8 ">
                  Choose your portion size
                </h2>

                <div className="grid grid-cols-12  my-4 border border-green shadow-xl rounded-[20px] bg-white ">
                  {PlanData[selectedPlan]?.portions?.map(portion => (
                    <div className="   col-span-12  md:col-span-6  ">
                      <button
                        className={`${getCustomizeActiveClass(selectedPortion, portion, "id")} w-full h-[47px] md:h-[59px] 2xl:h-[68px]  pt-1 `}
                        onClick={() => {
                          setSelectedPortion(portion)
                          setPrice(portion?.planDuration?.find((p) => p.name == selectedDuration.name)?.deliveriesPerWeek.find((d) => d.days == selectedDaysPerWeek.days)?.mealType?.find((m) => m.id == mealType.id)?.price)
                        }}>
                        <ul>
                          <li>
                            <h2 className=" text-black f-f-b text-sm 2xl:text-base ">
                              {" "}
                              {portion?.caloriesRange}
                            </h2>
                          </li>
                          <li>
                            <h2 className=" text-black f-f-r text-smtwo 2xl:text-tiny ">
                              {portion?.name}
                            </h2>
                          </li>
                        </ul>
                      </button>
                    </div>
                  ))}
                </div>

                <h2 className=" f-f-b text-black  text-lg 2xl:text-2xl mt-8 ">
                  Choose plan duration
                </h2>
                <div className="grid grid-cols-12  my-4 border border-green shadow-xl rounded-[20px] bg-white ">
                  {selectedPortion?.planDuration?.map(duration => (
                    <div className="   col-span-6  ">

                      <button
                        className={` ${getCustomizeActiveClass(selectedDuration, duration, "name")} w-full h-[47px] md:h-[59px] 2xl:h-[68px]   `}
                        onClick={() => {
                          setSelectedDuration(duration)
                          setPrice(duration?.deliveriesPerWeek.find((d) => d.days == selectedDaysPerWeek.days)?.mealType?.find((m) => m.id == mealType.id)?.price)
                        }}
                      >
                        <h2 className=" text-black f-f-b text-sm 2xl:text-base ">
                          {" "}
                          {getDurationName(duration?.name)}
                        </h2>
                      </button>
                    </div>
                  ))}
                </div>



                <h2 className=" f-f-b text-black  text-lg 2xl:text-2xl mt-8 ">
                  Choose deliveries per week{" "}
                </h2>
                <div className="grid grid-cols-12  my-4 border border-green shadow-xl rounded-[20px] bg-white ">
                  {selectedDuration?.deliveriesPerWeek?.map(dpw => (
                    <div className="   col-span-4  ">
                      <button
                        className={`${getCustomizeActiveClass(selectedDaysPerWeek, dpw, "days")} w-full h-[47px] md:h-[59px] 2xl:h-[68px]   `}
                        onClick={() => {
                          setSelectedDaysPerWeek(dpw)
                          setPrice(dpw?.mealType?.find((m) => m.id == mealType.id)?.price)
                        }}
                      >
                        <h2 className=" text-black f-f-b text-sm 2xl:text-base ">
                          {dpw.days} days/week
                        </h2>
                      </button>
                    </div>
                  ))}
                </div>
                {selectedDaysPerWeek.days != 7 &&
                  <>
                    <h2 className=" f-f-b text-black  text-lg 2xl:text-2xl mt-8 ">
                      Choose your off days(s){" "}
                    </h2>
                    <div className="grid grid-cols-12  my-4 border border-green shadow-xl rounded-[20px] bg-white ">
                      <div className="   col-span-6  ">
                        <button className={` ${offDays == "Friday" || offDays == "Friday - Saturday" ? "cusntn" : ""}  w-full h-[47px] md:h-[59px] 2xl:h-[68px]   `}
                          onClick={() => {
                            setOffDays(selectedDaysPerWeek.days == 6 ? "Friday" : "Friday - Saturday");
                          }}
                        >
                          <h2 className=" text-black f-f-b text-sm 2xl:text-base ">
                            {selectedDaysPerWeek.days == 6 ? "Friday" : "Friday - Saturday"}
                          </h2>
                        </button>
                      </div>
                      <div className="   col-span-6  ">
                        <button className={` ${offDays == "Saturday" || offDays == "Saturday - Sunday" ? "cusntn" : ""}   w-full h-[47px] md:h-[59px] 2xl:h-[68px]   `}
                          onClick={() => {
                            setOffDays(selectedDaysPerWeek.days == 6 ? "Saturday" : "Saturday - Sunday");
                          }}
                        >
                          <h2 className=" text-black f-f-b text-sm 2xl:text-base ">
                            {" "}
                            {selectedDaysPerWeek.days == 6 ? "Saturday" : "Saturday - Sunday"}
                          </h2>
                        </button>
                      </div>
                    </div>
                  </>
                }
                <h2 className=" f-f-b text-black  text-lg 2xl:text-2xl mt-8 ">
                  Choose your meal type
                </h2>
                <div className=" my-4 border border-green shadow-xl rounded-[20px] bg-white">
                  {/* new code data started */}
                  <div className="relative" >
                    <select id="cars" name="carlist" form="carform" className="text-black f-f-b text-sm 2xl:text-base   pl-5 w-full rounded-[20px] h-[47px] md:h-[59px] 2xl:h-[68px]  "
                      onChange={(e) => {
                        //console.log("eeee", selectedDaysPerWeek?.mealType?.find((m) => m.id == e.target.value?.split?.("|")?.[0])?.price);
                        setMealType({
                          id: e.target.value?.split?.("|")?.[0],
                          price: e.target.value?.split?.("|")?.[1]
                        });
                        setPrice(PlanData[selectedPlan]?.portions?.find(p => p.name == selectedPortion.name)?.planDuration?.find((p) => p.name == selectedDuration.name)?.deliveriesPerWeek.find((d) => d.days == selectedDaysPerWeek.days)?.mealType?.find((m) => m.id == e.target.value?.split?.("|")?.[0])?.price)
                        // setPrice(e.target.value?.split?.("|")?.[1]);
                      }}
                    >
                      {selectedDaysPerWeek?.mealType?.map((dpw) => (
                        <option className=" text-center hover:bg-green md:hover:bg-transparent hover:text-white md:hover:text-black f-f-b  text-xsone lg:text-sm "
                          value={`${dpw.id}|${dpw.price}`} selected={mealType == dpw.id ? true : dpw.id == "Breakfast_Lunch_Dinner_Snack_Drink" ? true : false}
                        >{dpw.name}</option>

                      ))};
                    </select>
                    <svg
                      width="36"
                      height="36"
                      className=" absolute top-[6px] md:top-[13px] right-[17px] "
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.6253 23.3015L27.9574 16.6136C28.3458 16.2033 28.5552 15.6554 28.5396 15.0907C28.5241 14.5259 28.2848 13.9904 27.8744 13.6021C27.464 13.2137 26.9162 13.0043 26.3514 13.0199C25.7867 13.0354 25.2512 13.2747 24.8629 13.6851L18.5321 20.3729C18.468 20.4408 18.3911 20.4954 18.3059 20.5336C18.2206 20.5717 18.1287 20.5927 18.0353 20.5952C17.942 20.5978 17.849 20.5819 17.7618 20.5484C17.6746 20.515 17.5948 20.4647 17.5271 20.4004L10.8406 14.0682C10.4304 13.6797 9.8827 13.47 9.31791 13.4853C8.75313 13.5006 8.21756 13.7396 7.82902 14.1498C7.44048 14.56 7.23079 15.1077 7.24609 15.6725C7.26139 16.2373 7.50042 16.7729 7.9106 17.1614L14.5985 23.4935C15.5566 24.3982 16.8344 24.886 18.1516 24.85C19.4688 24.814 20.718 24.2571 21.6253 23.3015V23.3015Z"
                        fill="#41A53D"
                      />
                    </svg>
                  </div>
                  {/* new code data end */}
                </div>
                <h2 className=" f-f-b text-black  text-lg 2xl:text-2xl mt-8 ">
                  Select your allergies (5 maximum)
                </h2>
                {/* nabeel bhai code  */}
                <div className="relative" >
                  <Multiselect
                    className="multiselectsetting"
                    placeholder={
                      !allergies || allergies.length <= 0
                        ? "Select an option"
                        : ""
                    }
                    selectionLimit="5"
                    style={{
                      chips: {
                        backgroundColor: "#A4ED9F",
                        color: "black",
                        fontSize: "20px",
                        padding: "0.8rem",
                      },
                      searchBox: {
                        border: "2px solid #41A53D",
                        borderRadius: "20px",
                        minHeight: "60px",
                        height: "fit-content",
                        backgroundColor: "white",
                        display: "flex",
                        justifyContent: "start",
                        flexWrap: "wrap",
                      },
                      input: {
                        width: "10px",
                      },
                    }}
                    onSelect={(e) => {
                      //console.log("eeeeeeeeeeee", e);
                      setAlerg(e);
                    }}
                    options={options}
                    selectedValues={allergies}
                    displayValue="name"
                  />
                  <svg
                    width="36"
                    height="36"
                    className=" absolute top-[6px] md:top-[13px] right-[17px] "
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.6253 23.3015L27.9574 16.6136C28.3458 16.2033 28.5552 15.6554 28.5396 15.0907C28.5241 14.5259 28.2848 13.9904 27.8744 13.6021C27.464 13.2137 26.9162 13.0043 26.3514 13.0199C25.7867 13.0354 25.2512 13.2747 24.8629 13.6851L18.5321 20.3729C18.468 20.4408 18.3911 20.4954 18.3059 20.5336C18.2206 20.5717 18.1287 20.5927 18.0353 20.5952C17.942 20.5978 17.849 20.5819 17.7618 20.5484C17.6746 20.515 17.5948 20.4647 17.5271 20.4004L10.8406 14.0682C10.4304 13.6797 9.8827 13.47 9.31791 13.4853C8.75313 13.5006 8.21756 13.7396 7.82902 14.1498C7.44048 14.56 7.23079 15.1077 7.24609 15.6725C7.26139 16.2373 7.50042 16.7729 7.9106 17.1614L14.5985 23.4935C15.5566 24.3982 16.8344 24.886 18.1516 24.85C19.4688 24.814 20.718 24.2571 21.6253 23.3015V23.3015Z"
                      fill="#41A53D"
                    />
                  </svg>
                </div>
                {/* nabeel bhai code ended */}
                {/* <div className=" my-4 border border-green shadow-xl rounded-[20px] bg-white">
              </div> */}
                <h2 className=" f-f-b text-black  text-lg 2xl:text-2xl mt-8 ">
                  Add Ons
                </h2>

                <div className="my-4">
                  <form action="/action_page.php">
                    <ul>
                      <li>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                          className=" checkinpu "
                          checked={addOnFifty > 0 ? true : false}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setAddOnFifty(50);
                              setAddOnsArray([...addOnsArray, "Eco-Friendly Cutlery"])
                              // setPrice(
                              //   Number(price) + 50
                              // );
                            } else {
                              setAddOnFifty(0);
                              let index = array.indexOf("Eco-Friendly Cutlery");
                              if (index > -1) { 
                                array.splice(index, 1); 
                              }
                              // setPrice(
                              //   Number(price) - 50
                              // );
                            }
                          }}
                        />
                        <label
                          for="vehicle1"
                          className="text-black f-f-b text-sm 2xl:text-base ml-4 relative top-[-8px]   "
                        >
                          {" "}
                          Eco-Friendly Cutlery + AED50.00{" "}
                        </label>
                      </li>
                      <li className=" mt-4">
                        <input
                          type="checkbox"
                          id="vehicle2"
                          name="vehicle2"
                          value="Car"
                          className=" checkinpu "
                          checked={
                            addOnTwoHundred > 0 ? true : false
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              setAddOnTwoHundred(200);
                              setAddOnsArray([...addOnsArray, "Thermal Bags (x2)"])
                              // setPrice(
                              //   Number(price) + 200
                              // );
                            } else {
                              setAddOnTwoHundred(0);
                              let index = array.indexOf("Thermal Bags (x2)");
                              if (index > -1) { 
                                array.splice(index, 1); 
                              }
                              // setPrice(
                              //   Number(price) - 200
                              // );
                            }
                          }}
                        />
                        <label
                          for="vehicle2"
                          className="text-black f-f-b text-sm 2xl:text-base ml-4 relative top-[-8px]"
                        >
                          Thermal Bags (x2) + AED200.00 (Refundable Deposit)
                        </label>
                      </li>
                    </ul>

                    <ul></ul>
                  </form>
                </div>
                <div className="grid grid-cols-12 gap-8  md:mt-8   ">
                  <div className="   col-span-6 xl:col-span-6 ">
                    <ul className=" inline-flex mt-7  ">
                      <li><h2 className=" text-black text-2xl f-f-b ">Total:</h2></li>
                      <li className=" ml-4 text-right ">
                        <h2 className=" text-black text-base md:text-2xl f-f-b ">AED{(Number(price) + Number(addOnFifty) + Number(addOnTwoHundred)).toFixed(2)}</h2>
                        <h3 className="text-green f-f-r text-xsone md:text-sm 2xl:text-tiny -mt-2 ">Price Exclusive of VAT</h3>
                      </li>
                    </ul>
                  </div>
                  <div className="   col-span-6 xl:col-span-6 ">
                    <div className="text-center">
                      <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full px-[47px] sm:px-[50px] py-[15px] sm:py-[17px] 2xl:w-[219px] 2xl:h-[79px] mt-5 2xl:mt-8" onClick={() => {
                        setPlanInformationData()
                        scrollTo(0, 500);
                        setStep(2)
                      }}>
                        Next
                      </button>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        }
      </div>
      {step == 2 &&
        <CustomizeplanPersonalInformation step={step} setStep={setStep} setPersonalInformation={setPersonalInformation} personalInformation={personalInformation} testimonialsData={testimonialsData} />
      }
      {step == 3 &&
        <CustomizeplanDeliveryInformation step={step} setStep={setStep} setDeliveryInformation={setDeliveryInformation} planInformation={planInformation} price={price} deliveryInformation={deliveryInformation} addOnFifty={addOnFifty} addOnTwoHundred={addOnTwoHundred} testimonialsData={testimonialsData} />
      }
      {step == 4 &&
        <CustomizeplanOrderSummary step={step} setStep={setStep} deliveryInformation={deliveryInformation} personalInformation={personalInformation} planInformation={planInformation} price={price} applyCoupun={applyCoupun} setCouponValue={setCouponValue} couponError={couponError} checkout={checkout} discountPercentage={discountPercentage} discountPrice={discountPrice} addOnTwoHundred={addOnTwoHundred} addOnFifty={addOnFifty} />
      }
    </>
  );
}

export async function getServerSideProps() {
  try {

    let contentData = await fetch(vmealsPages)
    let data = await contentData.json();

    let mealPlansFaqsData = await fetch(mealPlansFaqs)
    let faqData = await mealPlansFaqsData.json()
    //console.log("slider bar ->>", data)

    return {
      props: { contentData: { ...data?.docs }, mealPlansFaqsData: { ...faqData?.docs} }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { contentData: [] }
    }
  }

}