import dynamic from 'next/dynamic'
import React from "react";
const Navbar = dynamic(() => import("../Common/Navbar"))
const Hero = dynamic(() => import("./Hero"))
const Built = dynamic(() => import("./Built"))
const Genius = dynamic(() => import("./Genius"))
const Fitness = dynamic(() => import("./Fitness"))
const Ourblog = dynamic(() => import("./Ourblog"))
const Fotter = dynamic(() => import("../Common/Footer"))
import Review from '../Common/Review';
import Script from 'next/script'


export default function Index({ headerData, sliderBarData, builtData, ourGeniusData, homeFitnessData, ourHomeBlogData, socialMediaIcon, footerData, tradeMarkData,googleReviews }) {
  // //console.log("homeFitnessData",homeFitnessData)
  return (
    <>
      <div className="hero-bg  relative">
        <Navbar headerData={headerData} />
        <Hero sliderBarData={sliderBarData} />
      </div>
      <div className="mt-[344px] md:mt-32 lg:mt-0 sm:mt-40">
        <Built builtData={builtData} />
      </div>
      <Genius ourGeniusData={ourGeniusData} />
      <Fitness homeFitnessData={homeFitnessData} />
      <Review googleReviews={googleReviews}/>
      <Ourblog ourHomeBlogData={ourHomeBlogData} />
      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData} />
      <Script id="zsiqchat">
        {`var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "c677e4ad620bcfc5288eb1605c582ec8668acc2aef6f63fa97c729aba3a8885efe15e56f2a17eaa7599b3f1be9b0ed22", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t)`}
      </Script>
    </>
  );
}
