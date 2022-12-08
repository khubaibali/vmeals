import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Built from "./Built";
import Genius from "./Genius";
import Fitness from "./Fitness";
import Ourblog from "./Ourblog";
import Fotter from "../Common/Footer";
import Review from "../About Us/Review";
export default function Index() {
  return (
    <>
      <div className="hero-bg  relative">
        <Navbar />
        <Hero />
      </div>
      <div className="mt-[309px] md:mt-20 lg:mt-0 sm:mt-40">
        <Built />
      </div>
      <Genius />
      <Fitness />
      <Review />
      <Ourblog />
      <Fotter />
    </>
  );
}
