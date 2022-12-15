import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import Journy from "./journy";
import Fotter from "../../components/Common/Footer";
import Whtsapps from '../../components/Common/watsapp'
export default function Index({headerData, socialMediaIcon,footerData, tradeMarkData}) {
  return (
    <>
      <div className="about-bg">
        <Navbar headerData={headerData} />
        <Hero />
      </div>
      <Journy />

      <Fotter socialMediaIcon={socialMediaIcon} footerData={footerData} tradeMarkData={tradeMarkData}/>
      <Whtsapps/>
    </>
  );
}
