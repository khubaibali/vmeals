import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Fotter from "../Common/Footer";
import Fitnesour from "./Fitnesour";

export default function Index({tradeMarkData,headerData,footerData,socialMediaIcon ,contactUsData} ) {
  return (
    <>
      <div className="contactus-bg">
        <Navbar headerData={headerData}/>
        <Hero />
      </div>
      <Fitnesour contactUsData={contactUsData} />
      <Fotter tradeMarkData={tradeMarkData} footerData={footerData} socialMediaIcon={socialMediaIcon}/>
    </>
  );
}
