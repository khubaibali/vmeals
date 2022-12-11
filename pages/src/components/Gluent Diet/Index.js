import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Review from "../About Us/Review";
import Fotter from "../Common/Footer";
import Built from "../Home/Built";
import Question from "../Faq/Questions";
import Customizeplan from "../Classic Diet/Customizeplan";
import Simplemenu from "../Classic Diet/Simplemenu";
import { vmealsGlutenAndDairyDietContent } from "../../../../src/lib/APICommunications";
import SEO from "../Common/SEO";

export default function Index({ headerData, builtData, socialMediaIcon,footerData,tradeMarkData,contentData, metaData }) {
  const metaDataContent = Object.values(metaData).find(c => c.title == "Gluten & Dairy Free")
  const contentDataGlutenAndDairyFreeDiet = Object.values(contentData).find(c => c.VmealsGlutenAndDairyDietEnableDisables == "Enable")
  console.log("contentDataaaaa", contentDataGlutenAndDairyFreeDiet)
  return (
    <>
      <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description} />
      <div className="gluentdietbg">
        <Navbar  headerData={headerData} />
        <Hero />
      </div>
      <Customizeplan heading={contentDataGlutenAndDairyFreeDiet?.VmealsGlutenAndDairyDietHeading} description={contentDataGlutenAndDairyFreeDiet?.VmealsGlutenAndDairyDietdescriptionParagraphs} selectedPlan={"GlutenAndDairyFreeDiet"} />
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
   
    let contentDataGlutenAndDairyFreeDiet = await fetch(vmealsGlutenAndDairyDietContent)
    let data = await contentDataGlutenAndDairyFreeDiet.json()
    console.log("slider bar ->>",data)
   
    return {
      props: { contentDataGlutenAndDairyFreeDiet: { ...data?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { contentDataGlutenAndDairyFreeDiet: [] }
    }
  }

}