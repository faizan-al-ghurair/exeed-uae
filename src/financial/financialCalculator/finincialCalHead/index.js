import React from "react";
import "../../../common/styles/headerStyles.css";
import "../../../common/styles/commonStyle.css";

export const FinincialCalHead = () => {
  return (
    <>
      <section class="section-black row aboutus-header">
        <div class="col-md-12 col-sm-12 col-12">
          <div class="aboutus-sec1-banner-finincial-cal"></div>
        </div>
        <div class="col-md-12 d-flex py-5">
          <div class="col-md-12 w-100 d-flex justify-content-center flex-column">
            <div class="aboutus-title row d-flex flex-column align-items-center ">
              <div class="col-md-10 col-sm-10 col-10">
                <div class="title-white-wrapper">
                  <h1 class="title-orange">{"FINANCIAL CALCULATOR"}</h1>
                </div>
              </div>
            </div>
            <div class="row d-flex flex-column align-items-center ">
              <div class="col-md-10 col-sm-10 col-10 pb-3">
                <div class="">
                  <p>
                    Explore financing options and get an estimate on your
                    monthly payments with our Exeed Finance Calculator. Find the
                    best finance options for you today.
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
