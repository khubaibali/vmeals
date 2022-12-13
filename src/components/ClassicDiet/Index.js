import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Review from "../About Us/Review";
import Fotter from "../Common/Footer";
import Built from "../Home/Built";
import Question from "../Faq/Questions";
import Customizeplan from "../OurPlans/Customizeplan";
import Simplemenu from "./Simplemenu";
import SEO from "../Common/SEO";
import { vmealsClassicDietContent } from "../../lib/APICommunications";

export default function Index({ headerData, builtData, socialMediaIcon,footerData,tradeMarkData, contentData, metaData }) {
  const [selectedPlan, setSelectedPlan] = useState("ClassicDiet");
  const metaDataContent = Object.values(metaData).find(c => c.title == "Classic Diet")
  const contentDataClassicDiet = Object.values(contentData).find(c => c.VMealsClassicDietEnableDisables == "Enable")

  const [step, setStep] = useState(1)

  console.log("headerDara in nnnnn", contentDataClassicDiet)
  return (
    <>
      <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description} />

      <div className="classicbg">
        <Navbar headerData={headerData} />
        <Hero />
      </div>
      <Customizeplan  
        heading={contentDataClassicDiet?.VMealsClassicDietHeading} 
        description={contentDataClassicDiet?.VMealsClassicDietdescriptionParagraphs} 
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        setStep={setStep}
        step={step}
      />
      <Simplemenu />
      <Built builtData={builtData} />
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
   
    let contentDataClassicDiet = await fetch(vmealsClassicDietContent)
    let data = await contentDataClassicDiet.json()
    console.log("slider bar ->>",data)
   
    return {
      props: { contentDataClassicDiet: { ...data?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { contentDataClassicDiet: [] }
    }
  }

}