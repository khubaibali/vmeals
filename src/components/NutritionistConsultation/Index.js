import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Fotter from "../Common/Footer";
import Customizeplan from "./Customizeplan";
import { vmealsPages } from "../../lib/APICommunications";
import SEO from "../Common/SEO";

export default function Index({ headerData, socialMediaIcon, footerData, tradeMarkData, metaData}) {
  const metaDataContent = Object.values(metaData).find(c => c.title == "Nutrition Consultation")

  return (
    <>
      <div className="NutritionistConsultationbg">
        <SEO pageTitle={metaDataContent?.meta?.title} metaText={metaDataContent?.meta?.description} />
        <Navbar headerData={headerData} />
        <Hero />
      </div>
      <Customizeplan />
      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData} />
    </>
  );
}
export async function getServerSideProps() {
  try {

    let contentData = await fetch(vmealsPages)
    let data = await contentData.json();

    return {
      props: { contentData: { ...data?.docs } }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { contentData: [] }
    }
  }

}