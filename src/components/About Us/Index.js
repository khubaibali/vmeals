import React from "react";
import dynamic from "next/dynamic";
import JournyMissionWrapper from "./JournyMissionWrapper";
const Navbar = dynamic(() => import( "../Common/Navbar"))
const Hero=  dynamic(() => import( "./Hero"))
const Review  = dynamic(()=>import ("./Review"))
const Fotter  = dynamic(()=>import ("../Common/Footer"))





export default function Index({tradeMarkData,headerData,footerData,sliderBarData,socialMediaIcon,ourCompanyData}) {
  return (
    <>
      <div className="about-bg">
        <Navbar headerData={headerData} />
        <Hero sliderBarData={sliderBarData} />
      </div>
      <JournyMissionWrapper ourCompanyData={ourCompanyData}/>
      <Review />
      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData}/>
    </>
  );
}
