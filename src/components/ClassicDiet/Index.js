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
import { mealPlansFaqs, vmealsClassicDietContent } from "../../lib/APICommunications";
// import { url } from "inspector";

export default function Index({ headerData, builtData, socialMediaIcon,footerData,tradeMarkData, faqQuestions, contentData, metaData, sampleMenu,testimonialsData, mealPlansFaqsData,googleReviews }) {
  const [selectedPlan, setSelectedPlan] = useState("ClassicDiet");
  const metaDataContent = Object.values(metaData).find(c => c.title == "Classic Diet")
  const contentDataClassicDiet = Object.values(contentData).find(c => c.VMealsClassicDietEnableDisables == "Enable")
  const mealPlansFaqsDataContent = Object.values(mealPlansFaqsData).find(c => c.EnableDisables == "Enable")
  const faqDataClassicDiet = Object.values(faqQuestions).find(c => c.EnableDisables == "Enable" && c.PlanName == "ClassicDiet")
  const sampleMenuContent = Object.values(sampleMenu).find(c => c.VmealsMealPlan == "ClassicDiet")
  const [step, setStep] = useState(1)

  console.log("headerDara in nnnnn", faqDataClassicDiet)
  return (
    <>
      <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description} />

      <div className={"classicbg rounded-b-[30px]"} style={{ backgroundImage: (step == 1 ? 'url("/images/Classic-Diet-Header.jpg")' : step == 2 ? 'url("/images/personalinformationbg.png")' : step == 3 ? 'url("/images/DeliveryInformationbg.png")' : step == 4 ? 'url("/images/Ordersummerbg.png")' : 'url("/images/Classic-Diet-Header.jpg")') }}>
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
      {step == 1 &&
        <>
          <Simplemenu sampleMenu={sampleMenuContent?.SampleMenu} />
          <Built builtData={builtData} />
          <div className="bg-green-light  pt-[235px]   -mt-[241px] sm:pt-[131px] sm:-mt-[98px] lg:pt-[290px] lg:-mt-[160px] ">
            <Question faqQuestions={{0: faqDataClassicDiet}} />
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

    let contentDataClassicDiet = await fetch(vmealsClassicDietContent)
    let data = await contentDataClassicDiet.json()
    let faqClassicDiet = await fetch(mealPlansFaqs)
    let faqClassicDietData = await faqClassicDiet.json()
    //console.log("slider bar ->>",data)

    return {
      props: { contentDataClassicDiet: { ...data?.docs }, faqClassicDiet: { ...faqClassicDietData?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { contentDataClassicDiet: [] }
    }
  }

}