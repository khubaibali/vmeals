import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Review from "../About Us/Review";
import Fotter from "../Common/Footer";
import Built from "../Home/Built";
import Question from "../Faq/Questions";
import Customizeplan from "../Classic Diet/Customizeplan";
import Simplemenu from "../Classic Diet/Simplemenu";
import SEO from "../Common/SEO";
import { vmealsGreenDietContent } from "../../lib/APICommunications";

export default function Index({ headerData, builtData, socialMediaIcon, footerData, tradeMarkData, contentData, metaData }) {
  const metaDataContent = Object.values(metaData).find(c => c.title == "Green Diet")
  const contentDataGreenDiet = Object.values(contentData).find(c => c.VmealsGreenDietEnableDisables == "Enable")
  return (
    <>
      <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description} />

      <div className="greendietbg">
        <Navbar  headerData={headerData}  />
        <Hero />
      </div>
      <Customizeplan  heading={contentDataGreenDiet?.VmealsGreenDietHeading} description={contentDataGreenDiet?.VmealsGreenDietdescriptionParagraphs} selectedPlan={"GreenDietVegan"}  />
      <Simplemenu/>
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