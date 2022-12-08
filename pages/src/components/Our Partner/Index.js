import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Fotter from "../Common/Footer";
import Fitnesour from "./Fitnesour";

export default function Index() {
  return (
    <>
      <div className="our-partner-bg">
        <Navbar />
        <Hero />
      </div>
      <Fitnesour />
      <Fotter />
    </>
  );
}
