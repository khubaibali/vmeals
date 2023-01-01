import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Meals from "./Meals";
import Review from '../Common/Review';
import Fotter from "../Common/Footer";
import Fitness from "../Home/Fitness";
import Built from "../Home/Built";
import Question from "../Faq/Questions";
import SEO from "../Common/SEO";

export default function Index({headerData,sliderBarData,builtData,homeFitnessData,socialMediaIcon,footerData,tradeMarkData,faqQuestions, metaData,googleReviews}) {
  const metaDataContent = Object.values(metaData).find(c => c.title == "Our Plans");

  return (
    <>
    <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description}/>
      <div className="ourplansbg  rounded-b-[30px]">
        <Navbar headerData={headerData} />
        <Hero sliderBarData={sliderBarData} step={0} />
      </div>
      <Meals />
      <Fitness homeFitnessData={homeFitnessData} />
      <Built builtData={builtData} />
      <div className="bg-green-light  pt-[235px] -mt-[241px] sm:pt-[131px] sm:-mt-[98px] lg:pt-[290px] lg:-mt-[160px] ">
        <Question showRTF={true} faqQuestions={faqQuestions} />
      </div>
      <Review googleReviews={googleReviews}/>
      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData} />
    </>
  );
}


export async function getServerSideProps() {
  try {
   
    let mealPlanData = await fetch(vmealsKetoDietContent)
    let data = await mealPlanData.json()
    //console.log("slider bar ->>",data)
   
    return {
      props: { mealPlanData: { ...data?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { mealPlanData: [] }
    }
  }

}
