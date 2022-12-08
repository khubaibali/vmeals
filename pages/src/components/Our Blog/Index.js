import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Fotter from "../Common/Footer";
import Category from "./Category";

export default function Index() {
  return (
    <>
      <div className="blog-bg">
        <Navbar />
        <Hero />
      </div>
      <Category />
      <Fotter />
    </>
  );
}
