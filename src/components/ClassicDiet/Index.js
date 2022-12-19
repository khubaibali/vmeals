import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import Hero from "../OurPlans/Hero";
import Review from '../Common/Review';
import Fotter from "../Common/Footer";
import Built from "../Home/Built";
import Question from "../Faq/Questions";
import Customizeplan from "../OurPlans/Customizeplan";
import Simplemenu from "../OurPlans/Simplemenu";
import SEO from "../Common/SEO";
import { vmealsClassicDietContent } from "../../lib/APICommunications";
// import { url } from "inspector";

export default function Index({ headerData, builtData, socialMediaIcon,footerData,tradeMarkData, faqQuestions, contentData, metaData, sampleMenu,testimonialsData, mealPlansFaqsData }) {
  const [selectedPlan, setSelectedPlan] = useState("ClassicDiet");
  const metaDataContent = Object.values(metaData).find(c => c.title == "Classic Diet")
  const contentDataClassicDiet = Object.values(contentData).find(c => c.VMealsClassicDietEnableDisables == "Enable")
  const mealPlansFaqsDataContent = Object.values(mealPlansFaqsData).find(c => c.EnableDisables == "Enable")
  const sampleMenuContent = Object.values(sampleMenu).find(c => c.VmealsMealPlan == "ClassicDiet")
  const [step, setStep] = useState(1)
  
  console.log("headerDara in nnnnn", mealPlansFaqsData?.["0"])
  return (
    <>
      <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description} />

      <div className={"classicbg"} style={{backgroundImage: (step == 1 ? 'url("/images/classicbg.png")' : step == 2 ? 'url("/images/personalinformationbg.png")' : step == 3 ? 'url("/images/DeliveryInformationbg.png")' : step == 4 ? 'url("/images/Ordersummerbg.png")' : 'url("/images/classicbg.png")')}}>
        <Navbar headerData={headerData} />
        <Hero step={step} plan={"Classic Diet"} />
      </div>
      <Customizeplan  
        testimonialsData={testimonialsData?.docs[0]?.testimonials}
        weeklyMenu={contentDataClassicDiet?.WeeklyMenu}
        heading={contentDataClassicDiet?.VMealsClassicDietHeading} 
        description={contentDataClassicDiet?.VMealsClassicDietdescriptionParagraphs} 
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        setStep={setStep}
        step={step}
      />
      <Simplemenu sampleMenu={sampleMenuContent?.SampleMenu} />
      <Built builtData={builtData} />
      <div className="bg-green-light  pt-[235px]   -mt-[241px] sm:pt-[131px] sm:-mt-[98px] lg:pt-[290px] lg:-mt-[160px] ">
        <Question faqQuestions={{"0":mealPlansFaqsData?.["0"]}} />
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
    //console.log("slider bar ->>",data)
   
    return {
      props: { contentDataClassicDiet: { ...data?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { contentDataClassicDiet: [] }
    }
  }

}