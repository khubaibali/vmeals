import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Built from "./Built";
import Genius from "./Genius";
import Fitness from "./Fitness";
import Ourblog from "./Ourblog";
import Fotter from "../Common/Footer";
import Review from "../About Us/Review";
export default function Index({headerData,sliderBarData,builtData,ourGeniusData,homeFitnessData,ourHomeBlogData,socialMediaIcon,footerData,tradeMarkData}) {
  return (
    <>
      <div className="hero-bg  relative">
        <Navbar headerData={headerData}/>
        <Hero sliderBarData={sliderBarData}/>
      </div>
      <div className="mt-[309px] md:mt-20 lg:mt-0 sm:mt-40">
        <Built builtData={builtData}/>
      </div>
      <Genius ourGeniusData={ourGeniusData}/>
      <Fitness homeFitnessData={homeFitnessData}/>
      <Review />
      <Ourblog ourHomeBlogData={ourHomeBlogData}/>
      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData} />
    </>
  );
}
