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
import { mealPlansFaqs, vmealsIndianFusionDietContent } from "../../lib/APICommunications";

export default function Index({ headerData, builtData, socialMediaIcon, footerData, tradeMarkData, contentData, metaData, sampleMenu, faqQuestions, testimonialsData, googleReviews }) {
  const metaDataContent = Object.values(metaData).find(c => c.title == "Green Diet")
  const [selectedPlan, setSelectedPlan] = useState("IndianFusionVegetarianDiet");
  const [step, setStep] = useState(1)
  const sampleMenuContent = Object.values(sampleMenu).find(c => c.VmealsMealPlan == "GlutenAndDairyFreeDiet")
  const faqDataGlutenDiet = Object.values(faqQuestions).find(c => c.EnableDisables == "Enable" && c.PlanName == "IndianFusionDiet")

  const contentDataIndianFusion = Object.values(contentData).find(c => c.VmealsIndianFusionEnableDisables == "Enable")

  return (
    <>
      <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description} />
      <div className="classicbg rounded-b-[30px]" style={{ backgroundImage: (step == 1 ? 'url("/images/Indian-Fusion-Diet-Header.jpg")' : step == 2 ? 'url("/images/personalinformationbg.png")' : step == 3 ? 'url("/images/DeliveryInformationbg.png")' : step == 4 ? 'url("/images/Ordersummerbg.png")' : 'url("/images/Indian-Fusion-Diet-Header.jpg")') }}>
        <Navbar headerData={headerData} />
        <Hero step={step} plan={"Indian Fusion"} />
      </div>
      <Customizeplan
        testimonialsData={testimonialsData?.docs[0]?.testimonials}

        weeklyMenu={contentDataIndianFusion?.WeeklyMenu}

        heading={contentDataIndianFusion?.VmealsIndianFusionHeading} description={contentDataIndianFusion?.VmealsIndianFusiondescriptionParagraphs} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} setStep={setStep} step={step} />
      {step == 1 &&
        <>
          <Simplemenu sampleMenu={sampleMenuContent?.SampleMenu} />
          <Built builtData={builtData} />
          <div className="bg-green-light  pt-[235px] -mt-[241px] sm:pt-[131px] sm:-mt-[98px] lg:pt-[290px] lg:-mt-[160px] ">
            <Question faqQuestions={{0: faqDataGlutenDiet}} />
          </div>
          <Review googleReviews={googleReviews} />
        </>
      }
      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData} />
    </>
  );
}

export async function getServerSideProps() {
  try {

    let contentDataIndianFusion = await fetch(vmealsIndianFusionDietContent)
    let data = await contentDataIndianFusion.json()
    let faqIndianDiet = await fetch(mealPlansFaqs)
    let faqGlutenDietData = await faqIndianDiet.json()
    //console.log("slider bar ->>",data)

    return {
      props: { contentDataIndianFusion: { ...data?.docs }, faqIndianDiet: { ...faqGlutenDietData?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { contentDataIndianFusion: [] }
    }
  }

}