import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Meals from "./Meals";
import Review from "../About Us/Review";
import Fotter from "../Common/Footer";
import Fitness from "../Home/Fitness";
import Built from "../Home/Built";
import Question from "../Faq/Questions";

export default function Index() {
  return (
    <>
      <div className="ourplansbg">
        <Navbar />
        <Hero />
      </div>
      <Meals />
      <Fitness />
      <Built />
      <div className="bg-green-light  pt-[235px] -mt-[241px] sm:pt-[131px] sm:-mt-[98px] lg:pt-[290px] lg:-mt-[160px] ">
        <Question />
      </div>
      <Review />
      <Fotter />
    </>
  );
}
