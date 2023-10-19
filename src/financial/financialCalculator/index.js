import React from "react";
import {Header} from "../../home/header"
import { Footer } from "../../home/section6";
import { Section1 } from "./section1";
import { FinincialCalHead } from "./finincialCalHead";



export const FinancialCalculator = () => {
  return (
    <div className="App">
      <Header />
     
       <FinincialCalHead />

      <Section1 />
   
 
      
      <Footer />
    </div>
  );
};
