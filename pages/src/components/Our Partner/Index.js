import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Fotter from "../Common/Footer";
import Fitnesour from "./Fitnesour";

export default function Index({tradeMarkData,headerData,footerData,sliderBarData,socialMediaIcon,ourParnersData}) {
  return (
    <>
      <div className="our-partner-bg">
        <Navbar headerData={headerData}/>
        <Hero sliderBarData={sliderBarData} />
      </div>
      <Fitnesour ourParnersData={ourParnersData}/>
      <Fotter socialMediaIcon={socialMediaIcon} tradeMarkData={tradeMarkData} footerData={footerData}/>
    </>
  );
}



export async function getServerSideProps() {
  try {
    console.log("calling")
    let data = await headerProps()
    let sliderBarData = await sliderBarProps()
    let socialMediaIcon = await socialMediaIconsProps()
    let faqQuestions = await faqQuestionsProps()
    console.log("header props", faqQuestions)
    return {
      props: {
        ...data.props,    //navbar
        ...sliderBarData.props,     //hero
        ...socialMediaIcon.props,    //all footer data
        ...faqQuestions.props
      }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: {
        headerData: {}, sliderBarData: {}, builtData: [], ourGeniusData: [], homeFitnessData: [], ourHomeBlogData: [], socialMediaIcon: []
      }
    }
  }

}