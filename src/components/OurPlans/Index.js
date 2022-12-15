import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Meals from "./Meals";
import Review from "../About Us/Review";
import Fotter from "../Common/Footer";
import Fitness from "../Home/Fitness";
import Built from "../Home/Built";
import Question from "../Faq/Questions";

export default function Index({headerData,sliderBarData,builtData,homeFitnessData,socialMediaIcon,footerData,tradeMarkData,faqQuestions}) {
  return (
    <>
      <div className="ourplansbg">
        <Navbar headerData={headerData} />
        <Hero sliderBarData={sliderBarData} />
      </div>
      <Meals />
      <Fitness homeFitnessData={homeFitnessData} />
      <Built builtData={builtData} />
      <div className="bg-green-light  pt-[235px] -mt-[241px] sm:pt-[131px] sm:-mt-[98px] lg:pt-[290px] lg:-mt-[160px] ">
        <Question faqQuestions={faqQuestions} />
      </div>
      <Review />
      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData} />
    </>
  );
}
