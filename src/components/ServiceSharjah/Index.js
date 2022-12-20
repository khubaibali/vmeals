import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Fotter from "../Common/Footer";
import Abudebhisrv from "./Abudebhisrv";
import Mealabudehbhi from "./Mealabudehbhi";

export default function Index({headerData, socialMediaIcon,footerData, tradeMarkData,seoPagesData}) {
  return (
    <>
      <div className="servicesharjah">
        <Navbar headerData={headerData} />
        <Hero />
      </div>
      <Abudebhisrv seoPagesData={seoPagesData}/>
      <Mealabudehbhi />
      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData}/>
    </>
  );
}
