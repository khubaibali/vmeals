import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Fotter from "../Common/Footer";
import Customizeplan from "./Customizeplan";

export default function Index({ headerData, socialMediaIcon, footerData, tradeMarkData}) {
  return (
    <>
      <div className="paymentbg">
        <Navbar headerData={headerData} />
        <Hero />
      </div>
      <Customizeplan />
      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData}  />
    </>
  );
}
