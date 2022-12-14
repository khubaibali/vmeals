import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Review from "../About Us/Review";
import Fotter from "../Common/Footer";
import Built from "../Home/Built";
import Question from "../Faq/Questions";
import Customizeplan from "../OurPlans/Customizeplan";
import Simplemenu from "../OurPlans/Simplemenu";
import SEO from "../Common/SEO";
import { vmealsIndianFusionDietContent } from "../../lib/APICommunications";

export default function Index({ headerData, builtData, socialMediaIcon, footerData, tradeMarkData, contentData, metaData, sampleMenu }) {
  const metaDataContent = Object.values(metaData).find(c => c.title == "Green Diet")
  const [selectedPlan, setSelectedPlan] = useState("IndianFusionNonVegetarian");
  const [step, setStep] = useState(1)
  const sampleMenuContent = Object.values(sampleMenu).find(c => c.VmealsMealPlan == "GlutenAndDairyFreeDiet")

  const contentDataIndianFusion = Object.values(contentData).find(c => c.VmealsIndianFusionEnableDisables == "Enable")
  
  return (
    <>
      <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description} />
      <div className="PescatarianDietbg">
        <Navbar headerData={headerData}  />
        <Hero />
      </div>
      <Customizeplan  heading={contentDataIndianFusion?.VmealsIndianFusionHeading} description={contentDataIndianFusion?.VmealsIndianFusiondescriptionParagraphs} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}  setStep={setStep} step={step} />
      <Simplemenu  sampleMenu={sampleMenuContent?.SampleMenu} />
      <Built builtData={builtData}  />
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
   
    let contentDataIndianFusion = await fetch(vmealsIndianFusionDietContent)
    let data = await contentDataIndianFusion.json()
    console.log("slider bar ->>",data)
   
    return {
      props: { contentDataIndianFusion: { ...data?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { contentDataIndianFusion: [] }
    }
  }

}