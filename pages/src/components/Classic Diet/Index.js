import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Review from "../About Us/Review";
import Fotter from "../Common/Footer";
import Built from "../Home/Built";
import Question from "../Faq/Questions";
import Customizeplan from "./Customizeplan";
import Simplemenu from "./Simplemenu";

export default function Index({ headerData, builtData, socialMediaIcon,footerData,tradeMarkData }) {
  console.log("headerDara in nnnnn", headerData)
  return (
    <>
      <div className="classicbg">
        <Navbar headerData={headerData} />
        <Hero />
      </div>
      <Customizeplan />
      <Simplemenu />
      <Built builtData={builtData} />
      <div className="bg-green-light  pt-[235px] -mt-[241px] sm:pt-[131px] sm:-mt-[98px] lg:pt-[290px] lg:-mt-[160px] ">
        <Question />
      </div>
      <Review />
      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData} />
    </>
  );
}
