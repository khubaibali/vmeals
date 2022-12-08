import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Journy from "./journy";
import Review from "./Review";
import Fotter from "../Common/Footer";
import Mission from "./Mission";

export default function Index() {
  return (
    <>
      <div className="about-bg">
        <Navbar />
        <Hero />
      </div>
      <Journy />
      <Mission />
      <Review />
      <Fotter />
    </>
  );
}
