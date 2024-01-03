import React from "react";
import "../../common/styles/headerStyles.css";
import "../../common/styles/commonStyle.css";
import { Header } from "../../home/header";
import { Footer } from "../../home/section6";
import { Section1 } from "./section1";
import { Section2 } from "./section2";

export const PreownedCarDetails = () => {
  return (
    <>
      <Header></Header>
      <div class="aboutus-content fluid-container pb-5">
        <Section1 />
        {/* <Section2 /> */}
      </div>
      <Footer></Footer>
    </>
  );
};
