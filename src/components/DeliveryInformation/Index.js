import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Fotter from "../Common/Footer";
import Customizeplan from "./Customizeplan";

export default function Index() {
  return (
    <>
      <div className="DeliveryInformationbg">
        <Navbar />
        <Hero />
      </div>
      <Customizeplan />

      <Fotter />
    </>
  );
}
