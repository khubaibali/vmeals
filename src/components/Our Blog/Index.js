import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Fotter from "../Common/Footer";
import Category from "./Category";

export default function Index({headerData,socialMediaIcon,tradeMarkData,footerData,categoriesAll,blogs}) {
  return (
    <>
      <div className="blog-bg">
      <Navbar headerData={headerData}/>
        <Hero />
      </div>
      <Category categoriesAll={categoriesAll}  blogs={blogs}/>
      <Fotter socialMediaIcon={socialMediaIcon} tradeMarkData={tradeMarkData} footerData={footerData}/>
    </>
  );
}
