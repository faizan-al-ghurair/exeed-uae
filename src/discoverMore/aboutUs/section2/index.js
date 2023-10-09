import React from "react";
import "../../../common/styles/headerStyles.css";
import "../../../common/styles/commonStyle.css";

export const Section2 = () => {
  return (
    <>
      <section class="section-black row">
        <div class="col-md-12 d-flex py-5">
          <div class="col-md-10 w-100 d-flex justify-content-center flex-column ">
            <div class="row d-flex justify-content-center align-items-center aboutus-section2">
              <div class="col-md-3 col-sm-10 col-10 abtus-section2-flex">
                <div class="title-white-wrapper">
                  <h2 class="title-white">{"EXCEED CARS"}</h2>
                  <h1 class="title-orange">
                    {"Born For More Is Not Just A Slogan; It's A Promise."}
                  </h1>
                </div>
              </div>

              <div class="col-md-7 col-sm-10 col-10 d-flex justify-content-evenly abtus-section2-flex">
                <div class="aboutus-section2-tab">
                  <p>Born</p>
                  <p>
                    It Embodies Our Heritage Of Craftsmanship, Precision
                    Engineering, And Unwavering Dedication To Excellence.
                  </p>
                </div>
                <div class="aboutus-section2-tab">
                  <p>More</p>
                  <p>
                    It Embodies Our Heritage Of Craftsmanship, Precision
                    Engineering, And Unwavering Dedication To Excellence.
                  </p>
                </div>
                <div class="aboutus-section2-tab">
                  <p>Born For More</p>
                  <p>
                    It Embodies Our Heritage Of Craftsmanship, Precision
                    Engineering, And Unwavering Dedication To Excellence.
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
