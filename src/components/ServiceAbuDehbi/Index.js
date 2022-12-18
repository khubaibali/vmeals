import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Fotter from "../Common/Footer";
import Abudebhisrv from "./Abudebhisrv";
import Mealabudehbhi from "./Mealabudehbhi";

export default function Index({headerData, socialMediaIcon,footerData, tradeMarkData}) {
  return (
    <>
      <div className="servicedubaibg">
        <Navbar  headerData={headerData}/>
        <Hero />
      </div>
      <Abudebhisrv/>
      <Mealabudehbhi/>
      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData}/>
    </>
  );
}
