import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Review from "../About Us/Review";
import Fotter from "../Common/Footer";
import Built from "../Home/Built";
import Question from "../Faq/Questions";
import Customizeplan from "../Classic Diet/Customizeplan";
import Simplemenu from "../Classic Diet/Simplemenu";

export default function Index() {
  return (
    <>
      <div className="gluentdietbg">
        <Navbar />
        <Hero />
      </div>
      <Customizeplan />
      <Simplemenu />
      <Built />
      <div className="bg-green-light  pt-[235px] -mt-[241px] sm:pt-[131px] sm:-mt-[98px] lg:pt-[290px] lg:-mt-[160px] ">
        <Question />
      </div>
      <Review />
      <Fotter />
    </>
  );
}
