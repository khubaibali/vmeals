import React from "react";
import dynamic from "next/dynamic";
import JournyMissionWrapper from "./JournyMissionWrapper";
const Navbar = dynamic(() => import( "../Common/Navbar"))
const Hero=  dynamic(() => import( "./Hero"))
import Review from '../Common/Review';
const Fotter  = dynamic(()=>import ("../Common/Footer"))





export default function Index({tradeMarkData,headerData,footerData,socialMediaIcon,ourCompanyData,googleReviews}) {
  return (
    <>
      <div className="about-bg">
        <Navbar headerData={headerData} />
        <Hero />
      </div>
      <JournyMissionWrapper ourCompanyData={ourCompanyData}/>
      <div className="  " >
      <Review googleReviews={googleReviews} />
      </div>
      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData}/>
    </>
  );
}
