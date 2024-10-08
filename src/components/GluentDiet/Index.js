import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import Hero from "../OurPlans/Hero";
import Review from '../Common/Review';
import Fotter from "../Common/Footer";
import Built from "../Home/Built";
import Question from "../Faq/Questions";
import Customizeplan from "../OurPlans/Customizeplan";
import Simplemenu from "../OurPlans/Simplemenu";
import { mealPlansFaqs, vmealsGlutenAndDairyDietContent } from "../../lib/APICommunications";
import SEO from "../Common/SEO";

export default function Index({ googleReviews, headerData, builtData, socialMediaIcon, footerData, tradeMarkData, contentData, metaData, sampleMenu, faqQuestions, testimonialsData }) {
  const [selectedPlan, setSelectedPlan] = useState("GlutenAndDairyFreeDiet");
  const sampleMenuContent = Object.values(sampleMenu).find(c => c.VmealsMealPlan == "GlutenAndDairyFreeDiet")
  const faqDataGlutenDiet = Object.values(faqQuestions).find(c => c.EnableDisables == "Enable" && c.PlanName == "GlutenDairyFreeDiet")
  const metaDataContent = Object.values(metaData).find(c => c.title == "Gluten & Dairy Free")
  const contentDataGlutenAndDairyFreeDiet = Object.values(contentData).find(c => c.VmealsGlutenAndDairyDietEnableDisables == "Enable")
  const [step, setStep] = useState(1)

  console.log("contentDataaaaa", faqDataGlutenDiet)
  return (
    <>
      <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description} />
      <div className="classicbg rounded-b-[30px]" style={{ backgroundImage: (step == 1 ? 'url("/images/Gluten-&-Dairy-Free-Diet-Header.jpg")' : step == 2 ? 'url("/images/personalinformationbg.png")' : step == 3 ? 'url("/images/DeliveryInformationbg.png")' : step == 4 ? 'url("/images/Ordersummerbg.png")' : 'url("/images/Gluten-&-Dairy-Free-Diet-Header.jpg")') }}>
        <Navbar headerData={headerData} />
        <Hero step={step} plan={"Gluten & Dairy Free Diet"} />
      </div>
      <Customizeplan
        testimonialsData={testimonialsData?.docs[0]?.testimonials}

        weeklyMenu={contentDataGlutenAndDairyFreeDiet?.WeeklyMenu}

        heading={contentDataGlutenAndDairyFreeDiet?.VmealsGlutenAndDairyDietHeading} description={contentDataGlutenAndDairyFreeDiet?.VmealsGlutenAndDairyDietdescriptionParagraphs} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} setStep={setStep} step={step} />
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

    let contentDataGlutenAndDairyFreeDiet = await fetch(vmealsGlutenAndDairyDietContent)
    let data = await contentDataGlutenAndDairyFreeDiet.json()
    let faqGlutenDiet = await fetch(mealPlansFaqs)
    let faqGlutenDietData = await faqGlutenDiet.json()
    //console.log("slider bar ->>",data)

    return {
      props: { contentDataGlutenAndDairyFreeDiet: { ...data?.docs }, faqGlutenDiet: { ...faqGlutenDietData?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { contentDataGlutenAndDairyFreeDiet: [] }
    }
  }

}