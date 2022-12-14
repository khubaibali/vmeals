import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Fotter from "../Common/Footer";
import Category from "./Category";

export default function Index({ headerData, socialMediaIcon, tradeMarkData, footerData, categoriesAll, selectedBlog }) {
  console.log("blog-detail headerData",headerData)
  return (
    <>
      <div className="blog-bg-details">
        <Navbar headerData={headerData} />
        <Hero />
      </div>
      <Category categoriesAll={categoriesAll}  selectedBlog={selectedBlog}/>
      <Fotter socialMediaIcon={socialMediaIcon} tradeMarkData={tradeMarkData} footerData={footerData} />
    </>
  );
}
