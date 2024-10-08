import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import Hero from "../OurPlans/Hero";
import Review from '../Common/Review';
import Fotter from "../Common/Footer";
import Built from "../Home/Built";
import Question from "../Faq/Questions";
import Customizeplan from "../OurPlans/Customizeplan";
import Simplemenu from "../OurPlans/Simplemenu";
import { mealPlansFaqs, vmealsKetoDietContent } from "../../lib/APICommunications";
import SEO from "../Common/SEO";

export default function Index({ headerData, builtData, socialMediaIcon, footerData, tradeMarkData, contentData, metaData, sampleMenu, faqQuestions, testimonialsData, googleReviews }) {
  const metaDataContent = Object.values(metaData).find(c => c.title == "Keto Diet");
  const [selectedPlan, setSelectedPlan] = useState("KetoDiet");
  const sampleMenuContent = Object.values(sampleMenu).find(c => c.VmealsMealPlan == "KetoDiet")
  const contentDataKetoDiet = Object.values(contentData).find(c => c.VmealsKetoDietEnableDisables == "Enable")
  const faqPescatarianDiet = Object.values(faqQuestions).find(c => c.EnableDisables == "Enable" && c.PlanName == "KetoDiet")
  const [step, setStep] = useState(1)

  return (
    <>
      <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description} />
      <div className="classicbg rounded-b-[30px]" style={{ backgroundImage: (step == 1 ? 'url("/images/Keto-Diet-Header.jpg")' : step == 2 ? 'url("/images/personalinformationbg.png")' : step == 3 ? 'url("/images/DeliveryInformationbg.png")' : step == 4 ? 'url("/images/Ordersummerbg.png")' : 'url("/images/Keto-Diet-Header.jpg")') }}>
        <Navbar headerData={headerData} />
        <Hero step={step} plan={"Keto Diet"} />
      </div>
      <Customizeplan
        testimonialsData={testimonialsData?.docs[0]?.testimonials}

        weeklyMenu={contentDataKetoDiet?.WeeklyMenu}

        heading={contentDataKetoDiet?.VmealsKetoDietHeading} description={contentDataKetoDiet?.VmealsKetoDietdescriptionParagraphs} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} setStep={setStep} step={step} />
      {step == 1 &&
        <>
          <Simplemenu sampleMenu={sampleMenuContent?.SampleMenu} />
          <Built builtData={builtData} />
          <div className="bg-green-light  pt-[235px] -mt-[241px] sm:pt-[131px] sm:-mt-[98px] lg:pt-[290px] lg:-mt-[160px] ">
            <Question faqQuestions={{0: faqPescatarianDiet}} />
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

    let contentDataKetoDiet = await fetch(vmealsKetoDietContent)
    let data = await contentDataKetoDiet.json()
    let faqKetoDiet = await fetch(mealPlansFaqs)
    let faqKetoDietData = await faqKetoDiet.json()
    //console.log("slider bar ->>",data)

    return {
      props: { contentDataKetoDiet: { ...data?.docs }, faqKetoDiet: { ...faqKetoDietData?.docs} }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { contentDataKetoDiet: [] }
    }
  }

}