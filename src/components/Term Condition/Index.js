import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Journy from "./journy";
import Fotter from "../../components/Common/Footer";
import Whtsapps from '../../components/Common/watsapp'
export default function Index() {
  return (
    <>
      <div className="about-bg">
        <Navbar />
        <Hero />
      </div>
      <Journy />

      <Fotter />
      <Whtsapps/>
    </>
  );
}
