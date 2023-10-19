import React from "react";
import "../../../common/styles/headerStyles.css";
import "../../../common/styles/commonStyle.css";
import img1 from "../../../images/EXSSED-1.jpg";

export const Section6 = () => {
  return (
    <>
      <section class="section-black row">
        <div class="col-md-12 d-flex mb-5">
          <div class="col-md-10 w-100 d-flex justify-content-center flex-column">
            <div class="row d-flex justify-content-center align-items-start aboutus-section6">
              <div
                class="col-md-10 col-sm-10 col-10 abtus-section6-flex d-flex 
                justify-content-center flex-column fluid-container"
              >
                <h1 class="title-orange">{"Brand Connotation"}</h1>
                <p>
                  EXEED Embodies The Spirit Of Exploration And Breakthrough. It
                  Represents Our Continuous Quest To Surpass Boundaries And Meet
                  The Evolving Needs Of Users Worldwide. By Integrating European
                  Automotive Expertise With China’s Intelligent Interconnection
                  Technology, We Create An Extraordinary Brand That Blends
                  Technology, Art, Engineering, And Humanities. With Rapid
                  Iterations Driven By Global User Feedback, EXEED Is A Brand
                  Co-Created With Our Users, Constantly Evolving To Deliver
                  Exceptional Experiences. Explore With Us As We Redefine The
                  Future Of Mobility.
                </p>
                <img src={img1} alt="img section" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
