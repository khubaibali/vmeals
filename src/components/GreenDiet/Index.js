import React, { useEffect, useState } from "react";
import Navbar from "../Common/Navbar";
import Hero from "../OurPlans/Hero";
import Review from "../Common/Review";
import Fotter from "../Common/Footer";
import Built from "../Home/Built";
import Question from "../Faq/Questions";
import Customizeplan from "../OurPlans/Customizeplan";
import Simplemenu from "../OurPlans/Simplemenu";
import SEO from "../Common/SEO";
import { mealPlansFaqs, vmealsGreenDietContent } from "../../lib/APICommunications";

export default function Index({ headerData, builtData, socialMediaIcon, footerData, tradeMarkData, contentData, metaData, sampleMenu, faqQuestions, testimonialsData, googleReviews }) {
  const [selectedPlan, setSelectedPlan] = useState("GreenDietVegetarian");
  const metaDataContent = Object.values(metaData).find(c => c.title == "Green Diet")
  const sampleMenuContent = Object.values(sampleMenu).find(c => c.VmealsMealPlan == "GreenDiet")
  const contentDataGreenDiet = Object.values(contentData).find(c => c.VmealsGreenDietEnableDisables == "Enable")
  const faqDataGreenDiet = Object.values(faqQuestions).find(c => c.EnableDisables == "Enable" && c.PlanName == "GreenDiet")
  const [step, setStep] = useState(1)
  console.log("faqDataGreenDietfaqDataGreenDietfaqDataGreenDiet",faqDataGreenDiet)
  useEffect(() => {
    //console.log("")
  }, [selectedPlan])

  return (
    <>
      <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description} />

      <div className="classicbg  rounded-b-[30px]" style={{ backgroundImage: (step == 1 ? 'url("/images/Green-Diet-Header.jpg")' : step == 2 ? 'url("/images/personalinformationbg.png")' : step == 3 ? 'url("/images/DeliveryInformationbg.png")' : step == 4 ? 'url("/images/Ordersummerbg.png")' : 'url("/images/Green-Diet-Header.jpg")') }}>
        <Navbar headerData={headerData} />
        <Hero step={step} plan={"Green Diet"} />
      </div>
      <Customizeplan
        testimonialsData={testimonialsData?.docs[0]?.testimonials}
        weeklyMenu={contentDataGreenDiet?.WeeklyMenu}
        heading={contentDataGreenDiet?.VmealsGreenDietHeading} description={contentDataGreenDiet?.VmealsGreenDietdescriptionParagraphs} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} setStep={setStep} step={step} />
      {step == 1 &&
        <>
          <Simplemenu sampleMenu={sampleMenuContent?.SampleMenu} />
          <Built builtData={builtData} />
          <div className="bg-green-light  pt-[235px] -mt-[241px] sm:pt-[131px] sm:-mt-[98px] lg:pt-[290px] lg:-mt-[160px] ">
            <Question faqQuestions={{0: faqDataGreenDiet}} />
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

    let contentDataGreenDiet = await fetch(vmealsGreenDietContent)
    let data = await contentDataGreenDiet.json()
    let faqGreenDiet = await fetch(mealPlansFaqs)
    let faqGreenDietData = await faqGreenDiet.json()
    console.log("slider bar ->>",data)

    return {
      props: { contentDataGreenDiet: { ...data?.docs }, faqGreenDiet: { ...faqGreenDietData?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { contentDataGreenDiet: [] }
    }
  }

}