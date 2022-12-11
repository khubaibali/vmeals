import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Journy from "./journy";
import Review from "./Review";
import Fotter from "../Common/Footer";
import Mission from "./Mission";

export default function Index({tradeMarkData,headerData,footerData,sliderBarData,socialMediaIcon,ourCompanyData}) {
  return (
    <>
      <div className="about-bg">
        <Navbar headerData={headerData} />
        <Hero sliderBarData={sliderBarData} />
      </div>
      <Journy ourCompanyData={ourCompanyData} />
      <Mission ourCompanyData={ourCompanyData}/>
      <Review />
      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData}/>
    </>
  );
}
