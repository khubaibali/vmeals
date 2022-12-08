import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Review from "./Review";
import Fotter from "../Common/Footer";
import Questions from "./Questions";

export default function Index() {
  return (
    <>
      <div className="faq-bg">
        <Navbar />
        <Hero />
      </div>
      <Questions />
      <Review />
      <Fotter />
    </>
  );
}
