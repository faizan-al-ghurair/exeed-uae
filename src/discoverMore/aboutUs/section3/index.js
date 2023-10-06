import React from "react";
import "../../../common/styles/headerStyles.css";
import "../../../common/styles/commonStyle.css";
import img1 from "../../../TXL-Reality-images-1-2-1.jpg";

export const Section3 = () => {
  return (
    <>
      <section class="section-black row">
        <div class="col-md-12 d-flex pt-5">
          <div class="col-md-10 w-100 d-flex justify-content-center flex-column ">
            <div class="row d-flex justify-content-center align-items-start aboutus-section3">
              <div class="col-md-6 col-sm-10 col-10 abtus-section3-flex">
                <div class="title-white-wrapper">
                  <h2 class="title-white">{"Brand Orientation"}</h2>
                  <h1 class="title-orange">{"Learn About Our Orientation"}</h1>
                </div>
                <div class="">
                  <p>
                    Elevating The Pursuit Of Exploration: Redefining Premium
                    Smart Cars Introducing A Premium Smart Car Brand Crafted For
                    Those Who Dare To Explore And Embrace Breakthroughs Around
                    The World. With Our Brand Orientation Focused On “Premium,
                    Elegance, And Intelligence,” We Are Committed To
                    Consistently Delivering The Concept Of A Life Enriched By
                    New Technologies That Surpass Expectations.
                  </p>
                  <p>
                    At Our Core, We Understand That Today’s Consumers Crave More
                    Than Just A Means Of Transportation; They Seek A
                    Transformative Experience. Our Brand Caters To These
                    Discerning Individuals, Providing Vehicles That Go Beyond
                    The Ordinary And Redefine What It Means To Drive With
                    Purpose.
                  </p>
                </div>
                <div class="aboutus-section3-facts col-md-12">
                  <div class="aboutus-section3-facttab col-md-4">
                    <h5>PREMIUM</h5>
                  </div>
                  <div class="aboutus-section3-facttab col-md-4">
                    <h5>ELEGANCE</h5>
                  </div>
                  <div class="aboutus-section3-facttab col-md-4">
                    <h5>INTELLIGENCE</h5>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-10 col-10 d-flex justify-content-evenly  align-items-center imhere">
                <div class="aboutus-section3-img"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
