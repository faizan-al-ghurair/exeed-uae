import React from "react";

import { Header } from "../../home/header";
import { Footer } from "../../home/section6";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
import { Section4 } from "./section4";
import { ShowroomHeader } from "./showroomheader";
import { Section3 as BookaTestDrive } from "../../models/page2-exeed-vx/section3";



export const DubaiShowroom = () => {    
    return (
      <div className="App">
        <Header />

        <ShowroomHeader />

        <Section1 />  

        <Section2 />  

        <BookaTestDrive />

        <ShowroomHeader />

        <Section4 />
       
        <Footer />
      </div>
    );
  };