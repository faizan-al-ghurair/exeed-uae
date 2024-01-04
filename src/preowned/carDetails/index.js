import React from "react";
import "../../common/styles/headerStyles.css";
import "../../common/styles/commonStyle.css";
import "../../common/styles/preownedStyles.css";

import { Header } from "../../home/header";
import { Footer } from "../../home/section6";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
import { Section3 } from "./section3";

export const PreownedCarDetails = () => {
  return (
    <>
      <Header></Header>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer></Footer>
    </>
  );
};
