import React from "react";
import { Section1 } from "./section1";
import { Header } from "../../home/header";
// import { Section2 } from "./section2";
// import { Section3 } from "./section3";
// import { Section4 } from "./section4";
// import { Section5 } from "./section5";
// import { Section6 } from "./section6";
import { Section6 as Footer} from "../../home/section6";

export const BookService = () => {
  return (
    <>
      <Header />
      <Section1 />
      {/* <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5/>
      <Section6/> */}
      <Footer/>
    </>
  );
};
