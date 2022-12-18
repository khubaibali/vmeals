import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
const BaseURL = process.env.NEXT_PUBLIC_BASE_URL
const Fotter=dynamic(() => import( "../Common/Footer"))
import Category from "./Category";

export default function Index({ headerData, socialMediaIcon, tradeMarkData, footerData, categoriesAll, selectedBlog }) {
  //console.log("blog-detail headerData",tradeMarkData)
  return (
    <>
      <div className=" relative ">
      <img  src={`${BaseURL}${selectedBlog?.VMealsBlogBreadcrumbImage?.url}`}  className="blog-bg-details " />
        <Navbar headerData={headerData} />
        <Hero title={selectedBlog?.VmealsBlogTitle} cate={selectedBlog?.VmealsBlogCategory?.VmealsBlogsCategoryName} />     
      </div>
      <Category categoriesAll={categoriesAll}  selectedBlog={selectedBlog}/>
      <Fotter socialMediaIcon={socialMediaIcon} tradeMarkData={tradeMarkData} footerData={footerData} />
    </>
  );
}
