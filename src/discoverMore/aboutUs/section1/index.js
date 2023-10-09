import React from "react";
import "../../../common/styles/headerStyles.css";
import "../../../common/styles/commonStyle.css";
import banner from "../../../aboutusbanner.png";

export const Section1 = () => {
  return (
    <>
      <section class="section-black row aboutus-header">
        <div class="col-md-12 col-sm-12 col-12">
          <div class="aboutus-sec1-banner"></div>
        </div>
        <div class="col-md-12 d-flex py-5">
          <div class="col-md-12 w-100 d-flex justify-content-center flex-column">
            <div class="aboutus-title row d-flex flex-column align-items-center ">
              <div class="col-md-10 col-sm-10 col-10">
                <div class="title-white-wrapper">
                  <h2 class="title-white">{"ABOUT US"}</h2>
                  <h1 class="title-orange">{"Welcome to EXEED in UAE"}</h1>
                </div>
              </div>
            </div>
            <div class="row d-flex flex-column align-items-center ">
              <div class="col-md-10 col-sm-10 col-10 pb-3">
                <div class="">
                  <p>
                    We Are Dedicated To Delivering An Exceptional Experience.
                    This Commitment Drives Us To Introduce EXEED, The Only Car
                    Designed To Go Above And Beyond. EXEED Cars Epitomize
                    Simplicity And Purity In Style While Harnessing The Power Of
                    Superior Intelligence. Our Fleet Includes Suvs Like The
                    EXEED TXL And EXEED VX, Equipped With Powerful Engines,
                    Maximum Torque, And Spacious Seating Capacities.
                  </p>
                  <p>
                    At Al Ghurair EXEED UAE, We Understand That Modern Drivers
                    Seek Not Only Performance But Also Efficiency. Our Cars Are
                    Thoughtfully Designed To Provide Everything You Need To
                    Surpass Expectations While Remaining Economical. We Offer
                    Unique Deals, Comprehensive After-Sales Support, And
                    Prioritize Creating A Remarkable Customer Experience. Our
                    Aim Is To Ensure A Seamless Process As Our Cars Become A New
                    And Enriching Addition To Your Life.
                  </p>
                  <p>
                    As A Chinese Car Brand, We Are Continuously Embracing New
                    Challenges To Meet The Evolving Needs Of Modern Families. We
                    Strive To Understand And Exceed The Requirements Of
                    Contemporary Lifestyles, Making Exeed The Ideal Choice For
                    Those Seeking Innovation, Reliability, And Convenience.
                  </p>
                  <p>
                    Join Us On This Transformative Journey As We Revolutionize
                    The Automobile Industry With Our Groundbreaking
                    Technologies, Premium Quality Products, And Exceptional
                    Services. Experience The Difference With EXEED By Al Ghurair
                    UAE — Where The Future Meets Excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
