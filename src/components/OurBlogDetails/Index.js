import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
const Fotter=dynamic(() => import( "../Common/Footer"))
import Category from "./Category";

export default function Index({ headerData, socialMediaIcon, tradeMarkData, footerData, categoriesAll, selectedBlog }) {
  console.log("blog-detail headerData",tradeMarkData)
  return (
    <>
      <div className=" relative ">
      <img  src="/images/Blogdetailsbg.png"  className="blog-bg-details " />
        <Navbar headerData={headerData} />
        <Hero />     
      </div>
      <Category categoriesAll={categoriesAll}  selectedBlog={selectedBlog}/>
      <Fotter socialMediaIcon={socialMediaIcon} tradeMarkData={tradeMarkData} footerData={footerData} />
    </>
  );
}
