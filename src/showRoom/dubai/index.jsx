import React from "react";

import { Header } from "../../home/header";
import { Footer } from "../../home/section6";
import { Section3 } from "../../home/section3/index";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
import { Section4 } from "./section4";


export const DubaiShowroom = () => {    
    return (
      <div className="App">
        <Header />

        <Section1 />  

        <Section2 />  

        <Section4 />

        <Section3 />  
        

         
       
        <Footer />
      </div>
    );
  };