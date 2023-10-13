import React from "react";
import {Header} from "../../home/header"
import { Footer } from "../../home/section6";
import { Section1 } from "./section1";
import { Section1 as LeaseRateHead } from "../../discoverMore/aboutUs/section1";



export const LeaseRate = () => {
  return (
    <div className="App">
      <Header />
     
       <LeaseRateHead />

      <Section1 />
   
 
      
      <Footer />
    </div>
  );
};
