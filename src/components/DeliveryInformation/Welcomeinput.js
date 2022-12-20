import moment from "moment/moment";
import React, { useState } from "react";
import citiesData from "../../lib/data/city-with-slots/data.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { validateGoogleMapURL } from "../../helpers";


export default function Welcomeinput({ step, setStep, setDeliveryInformation, planInformation, price, deliveryInformation, addOnTwoHundred, addOnFifty }) {
  const [startingDate, setStartingDate] = useState(deliveryInformation?.startingDate)
  const [city, setCity] = useState(deliveryInformation?.city)
  const [address, setAddress] = useState(deliveryInformation?.address)
  const [appartmentNumber, setAppartmentNumber] = useState(deliveryInformation?.appartmentNumber)
  const [accessCode, setAccessCode] = useState(deliveryInformation?.accessCode)
  const [googleLink, setGoogleLink] = useState(deliveryInformation?.googleLink)
  const [deliveryInstructions, setDeliveryInstructions] = useState(deliveryInformation?.deliveryInstructions)
  const [deliverySlot, setDeliverySlot] = useState(deliveryInformation?.deliverySlot);
  const [deliverySlotList, setDeliverySlotList] = useState(null);
  const [errors, setErrors] = useState(null);

  const startingPlanDateFormat = () => {
    //console.log("planInformation", planInformation)
    // if()
    let offDaysArray = planInformation?.selectedDaysPerWeek?.days != 7 && planInformation?.offDays?.toLowerCase()?.split(" - ") || [];
    // // let offDaysArray = ["wednesday", "tuesday"];

    const days = [];

    for (let i = 0; i < 3; i++) {
      days.push(moment().add(i, "days"));
    }

    // // let today = moment();
    // // let tomorrow = moment().add(1, 'days');
    let minDate = moment().add(3, "days");

    // // const daysss = [today.format("dddd"), tomorrow.format("dddd"), afterTomorrow.format("dddd")]

    // let exludedDates_ = [];
    // for (let day of days) {
    //   if (offDaysArray.includes(day.format("dddd").toLowerCase())) {
    //     // exludedDates_.push(new Date(day.format("YYYY-MM-DD")));
    //     minDate.add(1, "days");
    //   }
    // }
    let res = {
      // minDate: new Date(moment().add(3, 'days').format("YYYY-MM-DD")),
      minDate: new Date(minDate.format("YYYY-MM-DD")),
      filterDate: (date) => {
        let d = moment(date).format("dddd");
        return !offDaysArray.includes(d.toLowerCase());
      },
    };

    //console.log("resss >>>>>>>>>>>>>", res);
    return res;
  };


  const Validation = async () => {
    let err = [];
    if(googleLink?.length > 0) {
      let checkGoggleLink = await validateGoogleMapURL(googleLink);
      if(checkGoggleLink == "Invalid Google Link!"){
        err.push({
          field: "googleLink",
          msg: checkGoggleLink,
        });
      }
    }
    if (!startingDate) {
      err.push({
        field: "startingDate",
        msg: "Starting Date is required!",
      });
    }
    if (!city) {
      err.push({
        field: "city",
        msg: "City is required!",
      });
    }
    if (!address) {
      err.push({
        field: "address",
        msg: "Address is required!",
      });
    }
    if (!appartmentNumber) {
      err.push({
        field: "appartmentNumber",
        msg: "Appartment Number is required!",
      });
    }
    if (!googleLink) {
      err.push({
        field: "googleLink",
        msg: "Google Link is required!",
      });
    }
    if (!deliverySlot) {
      err.push({
        field: "deliverySlot",
        msg: "Delivery Slot is required!",
      });
    }
    setErrors(err);
    if (err.length <= 0) {
      setDeliveryInformation({
        startingDate,
        city,
        address,
        appartmentNumber,
        accessCode,
        googleLink,
        deliveryInstructions,
        deliverySlot,
        deliverySlotList
      })
      scrollTo(0, 500);
      setStep(4)
    } else {
      //console.log("")
    }
  }

  return (
    <div>
      {" "}
      <div className="w-11/12 sm:w-full ml-auto mr-auto ">
        <div className="grid grid-cols-12 gap-5   2xl:gap-4  ">
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-black   mb-1 ">
              Starting Date <span className="text-red">* </span>
            </h2>
                <div className="relative" >
            <DatePicker
              //   selected={new Date()}
              selected={startingDate}
              onChange={(date) => setStartingDate(date)}
              dateFormat="dd/MM/yyyy"
              // placeholderText={'Please select a date'}
              showYearDropdown
              scrollableYearDropdown
              placeholderText={"Select starting date"}
              className=" items-center text-sm f-f-b text-white optinbg contact-btn lg:text-sm pl-5 w-full rounded-[20px] h-[47px] md:h-[49px] 2xl:h-[57px]   "
              {...startingPlanDateFormat()}
            />
              <img alt=""
                src="/images/mobilearrow.png"
                className=" absolute top-[16px] 2xl:top-[20px] right-[17px]"
              />
            </div>
            {errors?.length > 0 ? (
              <p style={{ color: "red" }}>
                {errors?.find((e) => e.field == "startingDate")
                  ?.msg || ""}
              </p>
            ) : (
              ""
            )}
            <img src="/images/mobilearrow.png" className="absolute right-4" />{" "}
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-black  mb-1 ">
              City <span className="text-red">* </span>
            </h2>

            <div className="relative" >
              <select id="cars" name="carlist" form="carform" className=" items-center text-sm f-f-b text-white  optinbg  contact-btn   lg:text-sm  pl-5 w-full rounded-[20px] h-[47px] md:h-[49px] 2xl:h-[57px]  " onChange={(e) => {
                setDeliverySlotList(
                  citiesData?.cities.find(
                    (c) => c.name === e.target.value
                  )
                );
                setCity(e.target.value)
              }} >
                <option value="" className="text-black">Select an option</option>
                {citiesData &&
                  citiesData?.cities?.map((c) => (
                    <option
                      className="text-black"
                      value={c.name}
                      selected={c.name == city ? true : false}
                    >
                      {c.name}
                    </option>
                  ))}
              </select>
              <img alt=""
                src="/images/mobilearrow.png"
                className=" absolute top-[16px] 2xl:top-[20px] right-[17px]"
              />
            </div>
            {errors?.length > 0 ? (
              <p style={{ color: "red" }}>
                {errors?.find((e) => e.field == "city")
                  ?.msg || ""}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="   col-span-12 ">
            <h2 className=" text-base f-f-b text-black   ">
              Address <span className="text-red">* </span>
            </h2>
            <input
              placeholder="Enter your area, street & building name..."
              className=" input-register "
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors?.length > 0 ? (
              <p style={{ color: "red" }}>
                {errors?.find((e) => e.field == "address")
                  ?.msg || ""}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-black   ">
              Apartment/Villa Number <span className="text-red">* </span>
            </h2>
            <input
              placeholder="Enter your apartment/villa number..."
              className=" input-register "
              value={appartmentNumber}
              onChange={(e) => setAppartmentNumber(e.target.value)}
            />
            {errors?.length > 0 ? (
              <p style={{ color: "red" }}>
                {errors?.find((e) => e.field == "appartmentNumber")
                  ?.msg || ""}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="   col-span-12 md:col-span-6 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-black  ">
              Access Code (Optional)
            </h2>
            <input
              placeholder="Enter your building’s access code..."
              className=" input-register "
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
            />
          </div>
          <div className="   col-span-12  ">
            <h2 className=" text-base f-f-b text-bla  ">
              Google Maps Link <span className="text-red">* </span>
            </h2>
            <input
              placeholder="Enter the Google maps link..."
              className=" input-register "
              value={googleLink}
              onChange={(e) => {
                setGoogleLink(e.target.value)
              }}
            />
            {errors?.length > 0 ? (
              <p style={{ color: "red" }}>
                {errors?.find((e) => e.field == "googleLink")
                  ?.msg || ""}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="   col-span-12  ">
            <h2 className=" text-base f-f-b text-bla  ">
              Delivery Instructions (Optional)
            </h2>
            <input
              placeholder="Enter delivery specific instructions..."
              className=" input-register "
              value={deliveryInstructions}
              onChange={(e) => setDeliveryInstructions(e.target.value)}
            />
          </div>
          <div className="   col-span-12 xl:col-span-6 ">
            <h2 className=" text-base f-f-b text-black  ">
              Delivery Slot <span className="text-red">* </span>
            </h2>
                <div className="relative" >
              
            <select id="city" name="city" onChange={(e) =>
              setDeliverySlot(e.target.value)
            } className=" items-center text-sm f-f-b text-white optinbg contact-btn lg:text-sm pl-5 w-full rounded-[20px] h-[47px] md:h-[49px] 2xl:h-[57px]  "
            >
              <option value="" className="text-black">Select an option</option>
              {deliverySlotList &&
                deliverySlotList?.timeSlots?.map((slot) => (
                  <option
                    className="text-black"
                    value={slot}
                    selected={
                      slot == deliverySlot ? true : false
                    }
                  >
                    {slot}
                  </option>
                ))}
            </select>
            <img alt=""
                src="/images/mobilearrow.png"
                className=" absolute top-[16px] 2xl:top-[20px] right-[17px]"
              />
                </div>
            {errors?.length > 0 ? (
              <p style={{ color: "red" }}>
                {errors?.find((e) => e.field == "deliverySlot")
                  ?.msg || ""}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="   col-span-12 xl:col-span-6 ">
            <div className=" ml-auto mr-auto md:w-5/12 lg:w-4/12  xl:w-full ">
              <ul className=" inline-flex mt-7 w-full ">
                <li>
                  <h2 className=" text-black text-2xl f-f-b ">Total:</h2>
                </li>
                <li className=" ml-4 text-right ">
                  <h2 className=" text-black text-2xl f-f-b   ">AED{Number(price + Number(addOnFifty) + Number(addOnTwoHundred)).toFixed(2)}</h2>
                  <h3 className="text-green f-f-r text-sm 2xl:text-tiny -mt-2 ">
                    Price exclusive of VAT
                  </h3>
                </li>
              </ul>
            </div>
          </div>
          <div className="   col-span-6 xl:col-span-6 ">
            <div className="text-center">
              <button className=" buttonstyle text-sm sm:text-tiny 2xl:text-lg f-f-b text-green shadow-lg border border-green bg-white rounded-full px-[47px] sm:px-[50px] py-[15px] sm:py-[17px] 2xl:px-[79px] 2xl:py-[25px] mt-5 2xl:mt-8" onClick={() => {
                scrollTo(0,500)
                setStep(2)
              }}>
                Back
              </button>
            </div>
          </div>
          <div className="   col-span-6 xl:col-span-6 ">
            <div className="text-center">
              <button className=" text-sm sm:text-tiny 2xl:text-lg f-f-b text-white sub rounded-full px-[47px] sm:px-[50px] py-[15px] sm:py-[17px] 2xl:px-[79px] 2xl:py-[25px] mt-5 2xl:mt-8" onClick={() => {
                Validation()
              }}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
