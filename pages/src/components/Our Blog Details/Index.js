import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Fotter from "../Common/Footer";
import Category from "./Category";

export default function Index() {
  return (
    <>
      <div className="blog-bg-details">
        <Navbar />
        <Hero />
      </div>
      <Category />
      <Fotter />
    </>
  );
}
