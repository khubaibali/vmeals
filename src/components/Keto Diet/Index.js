import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Review from "../About Us/Review";
import Fotter from "../Common/Footer";
import Built from "../Home/Built";
import Question from "../Faq/Questions";
import Customizeplan from "../Classic Diet/Customizeplan";
import Simplemenu from "../Classic Diet/Simplemenu";
import { vmealsKetoDietContent } from "../../lib/APICommunications";
import SEO from "../Common/SEO";

export default function Index({ headerData, builtData, socialMediaIcon, footerData, tradeMarkData, contentData, metaData }) {
  const metaDataContent = Object.values(metaData).find(c => c.title == "Keto Diet")
  const contentDataKetoDiet = Object.values(contentData).find(c => c.VmealsKetoDietEnableDisables == "Enable")
  return (
    <>
      <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description} />
      <div className="ketodietbg">
        <Navbar headerData={headerData}  />
        <Hero />
      </div>
      <Customizeplan heading={contentDataKetoDiet?.VmealsKetoDietHeading} description={contentDataKetoDiet?.VmealsKetoDietdescriptionParagraphs} selectedPlan={"KetoDiet"} />
      <Simplemenu />
      <Built builtData={builtData}  />
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
   
    let contentDataKetoDiet = await fetch(vmealsKetoDietContent)
    let data = await contentDataKetoDiet.json()
    console.log("slider bar ->>",data)
   
    return {
      props: { contentDataKetoDiet: { ...data?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { contentDataKetoDiet: [] }
    }
  }

}