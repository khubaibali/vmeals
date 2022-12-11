import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Fotter from "../Common/Footer";
import Abudebhisrv from "./Abudebhisrv";
import Mealabudehbhi from "./Mealabudehbhi";

export default function Index() {
  return (
    <>
      <div className="servicesharjah">
        <Navbar />
        <Hero />
      </div>
      <Abudebhisrv />
      <Mealabudehbhi />
      <Fotter />
    </>
  );
}
