import React from "react";
import "../../common/styles/headerStyles.css";
import "../../common/styles/commonStyle.css";
import { Header } from "../../home/header";
import { Footer } from "../../home/section6";
import banner from "../../aboutusbanner.png";
import img1 from "../../TXL-Reality-images-1-2-1.jpg";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
import { Section3 } from "./section3";
import { Section4 } from "./section4";
import { Section5 } from "./section5";
import { Section6 } from "./section6";

export const HeaderAboutUs = () => {
  return (
    <>
      <Header></Header>
      <div class="aboutus-content fluid-container pb-5">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
      <Footer></Footer>
    </>
  );
};
