import React, { useEffect, useState } from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Review from "../About Us/Review";
import Fotter from "../Common/Footer";
import Built from "../Home/Built";
import Question from "../Faq/Questions";
import Customizeplan from "../OurPlans/Customizeplan";
import Simplemenu from "../OurPlans/Simplemenu";
import SEO from "../Common/SEO";
import { vmealsGreenDietContent } from "../../lib/APICommunications";

export default function Index({ headerData, builtData, socialMediaIcon, footerData, tradeMarkData, contentData, metaData, sampleMenu }) {
  const [selectedPlan, setSelectedPlan] = useState("GreenDietVegetarian");
  const metaDataContent = Object.values(metaData).find(c => c.title == "Green Diet")
  const sampleMenuContent = Object.values(sampleMenu).find(c => c.VmealsMealPlan == "GreenDiet")
  const contentDataGreenDiet = Object.values(contentData).find(c => c.VmealsGreenDietEnableDisables == "Enable")
  const [step, setStep] = useState(1)

  useEffect(() => {
    console.log("")
  },[selectedPlan])

  return (
    <>
      <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description} />

      <div className="greendietbg">
        <Navbar  headerData={headerData}  />
        <Hero />
      </div>
      <Customizeplan 
        weeklyMenu={contentDataGreenDiet?.WeeklyMenu}
      heading={contentDataGreenDiet?.VmealsGreenDietHeading} description={contentDataGreenDiet?.VmealsGreenDietdescriptionParagraphs} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}setStep={setStep} step={step}  />
      <Simplemenu sampleMenu={sampleMenuContent?.SampleMenu} />
      <Built  builtData={builtData} />
      <div className="bg-green-light  pt-[235px] -mt-[241px] sm:pt-[131px] sm:-mt-[98px] lg:pt-[290px] lg:-mt-[160px] ">
        {/* <Question /> */}
      </div>
      <Review />
      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData} />
    </>
  );
}

export async function getServerSideProps() {
  try {
   
    let contentDataGreenDiet = await fetch(vmealsGreenDietContent)
    let data = await contentDataGreenDiet.json()
    console.log("slider bar ->>",data)
   
    return {
      props: { contentDataGreenDiet: { ...data?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { contentDataGreenDiet: [] }
    }
  }

}