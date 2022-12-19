import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Fotter from "../Common/Footer";
import Customizeplan from "./Customizeplan";

export default function Index({ headerData, socialMediaIcon, footerData, tradeMarkData, testimonialsData}) {
  console.log("testimonialsData?.docs[0]?.testimonials",testimonialsData?.docs[0]?.testimonials)
  return (
    <>
      <div className="paymentbg">
        <Navbar headerData={headerData} />
        <Hero />
      </div>
      <Customizeplan testimonialsData={testimonialsData?.docs[0]?.testimonials} />
      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData}  />
    </>
  );
}
