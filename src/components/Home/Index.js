import dynamic from 'next/dynamic'
import React from "react";
const Navbar = dynamic(() => import( "../Common/Navbar"))
const Hero=  dynamic(() => import( "./Hero"))
const Built=dynamic(() => import( "./Built"))
const Genius=dynamic(() => import( "./Genius"))
const Fitness=dynamic(() => import( "./Fitness"))
const Ourblog=dynamic(() => import("./Ourblog"))
const Fotter=dynamic(() => import( "../Common/Footer"))
const Review=dynamic(() => import( "../About Us/Review"))

export default function Index({headerData,sliderBarData,builtData,ourGeniusData,homeFitnessData,ourHomeBlogData,socialMediaIcon,footerData,tradeMarkData}) {
  return (
    <>
      <div className="hero-bg  relative">
        <Navbar headerData={headerData}/>
        <Hero sliderBarData={sliderBarData}/>
      </div>
      <div className="mt-[344px] md:mt-32 lg:mt-0 sm:mt-40">
        <Built builtData={builtData}/>
      </div>
      <Genius ourGeniusData={ourGeniusData}/>
      <Fitness homeFitnessData={homeFitnessData}/>
      <Review />
      <Ourblog ourHomeBlogData={ourHomeBlogData}/>
      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData} />
    </>
  );
}
