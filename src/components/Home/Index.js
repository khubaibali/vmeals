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
      <Script id="chatwidget">
        {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5f678da3f0e7167d001209eb/1eim8qk44';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}
      </Script>
    </>
  );
}
