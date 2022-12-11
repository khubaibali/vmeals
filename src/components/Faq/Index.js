import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Review from "./Review";
import Fotter from "../Common/Footer";
import Questions from "./Questions";

export default function Index({tradeMarkData,headerData,footerData,sliderBarData,socialMediaIcon,faqQuestions}) {
  return (
    <>
      <div className="faq-bg">
        <Navbar headerData={headerData} />
        <Hero sliderBarData={sliderBarData}/>
      </div>
      <Questions faqQuestions={faqQuestions} />
      <Review />
      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData}/>
    </>
  );
}
