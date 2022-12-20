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
import { vmealsPescatarianDietContent } from "../../lib/APICommunications";

export default function Index({ headerData, builtData, socialMediaIcon, footerData, tradeMarkData, contentData, metaData, sampleMenu, faqQuestions, testimonialsData }) {
  const metaDataContent = Object.values(metaData).find(c => c.title == "Pescatarian Diet")
  const [selectedPlan, setSelectedPlan] = useState("PescatarianDiet");
  const sampleMenuContent = Object.values(sampleMenu).find(c => c.VmealsMealPlan == "PescatarianDiet")
  const contentDataPescatarian = Object.values(contentData).find(c => c.VmealsPescatarianDietEnableDisables == "Enable")
  const [step, setStep] = useState(1)

  return (
    <>
      <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description} />
      <div className="classicbg" style={{ backgroundImage: (step == 1 ? 'url("/images/classicbg.png")' : step == 2 ? 'url("/images/personalinformationbg.png")' : step == 3 ? 'url("/images/DeliveryInformationbg.png")' : step == 4 ? 'url("/images/Ordersummerbg.png")' : 'url("/images/classicbg.png")') }}>
        <Navbar headerData={headerData} />
        <Hero step={step} plan={"Pescatarian Diet"} />
      </div>
      <Customizeplan
        testimonialsData={testimonialsData?.docs[0]?.testimonials}
        weeklyMenu={contentDataPescatarian?.WeeklyMenu}

        heading={contentDataPescatarian?.VmealsPescatarianDietHeading} description={contentDataPescatarian?.VmealsPescatarianDietdescriptionParagraphs} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} setStep={setStep} step={step} />
      {step == 1 &&
        <>
          <Simplemenu sampleMenu={sampleMenuContent?.SampleMenu} />
          <Built builtData={builtData} />
          <div className="bg-green-light  pt-[235px] -mt-[241px] sm:pt-[131px] sm:-mt-[98px] lg:pt-[290px] lg:-mt-[160px] ">
            <Question faqQuestions={faqQuestions} />
          </div>
          <Review />
        </>
      }
      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData} />
    </>
  );
}

export async function getServerSideProps() {
  try {

    let contentDataPescatarianDiet = await fetch(vmealsPescatarianDietContent)
    let data = await contentDataPescatarianDiet.json()
    //console.log("slider bar ->>",data)

    return {
      props: { contentDataPescatarianDiet: { ...data?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { contentDataPescatarianDiet: [] }
    }
  }

}