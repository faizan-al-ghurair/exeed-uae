import React from "react";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
import { Section3 } from "./section3";
import { Section4 } from "./section4";
import { Section5 } from "./section5";
import { Footer } from "./section6";
import { Header } from "./header";
import { CookieSection } from "./section7";

export const Home = () => {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
      <CookieSection/>
    </div>
  );
};
