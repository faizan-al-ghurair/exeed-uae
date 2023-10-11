import React from "react";
import { Section1 } from "./section1";
import { Header } from "../../home/header";
import { Footer } from "../../home/section6";
import { Section3 as BookaTestDrive } from "../../models/page2-exeed-vx/section3";
import { Section6 } from "../page2-exeed-vx/section6";
import { Section2 } from "./section2";


export const Page5EceedRX = () => {
  return (
    <div className="App">
       <Header />   
       <Section2 />   
       <BookaTestDrive />
       <Section1 />
       <Section6/>      
       <Footer/>
    </div>
  );
};
