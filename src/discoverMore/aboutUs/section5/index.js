import React from "react";
import "../../../common/styles/headerStyles.css";
import "../../../common/styles/commonStyle.css";
import img1 from "../../../TXL-Reality-images-1.png";
import img2 from "../../../TXL-Reality-images-1-2.png";

export const Section5 = () => {
  return (
    <>
      <section class="section-black row">
        <div class="col-md-12 d-flex my-5">
          <div class="col-md-10 w-100 d-flex justify-content-center flex-column mt-5">
            <div class="row d-flex justify-content-center align-items-start aboutus-section5">
              <div
                class="col-md-10 col-sm-10 col-10 abtus-section5-flex d-flex flex-column
                justify-content-center"
              >
                <div class="aboutus-sec5-tab d-flex fluid-container  ">
                  <div class="warranty-sec1-text col-md-6">
                    <h1 class="title-orange">{"Brand Mission"}</h1>
                    <p>
                      At EXEED, We Combine Ingenuity, Intelligent Technology,
                      Elegant Design, And A Relentless Commitment To Ultimate
                      Safety. We Empower Every EXEEDER With Extraordinary
                      Control, Enabling Their Success On The Road. Experience
                      The Power Of EXEED And Redefine What It Means To Drive
                      With Excellence.
                    </p>
                  </div>

                  <div class="warranty-sec1-img col-md-6">
                    <img src={img1} />
                  </div>
                </div>
                <div class="aboutus-sec5-tab d-flex fluid-container section-reverse">
                  <div class="warranty-sec1-text col-md-6">
                    <h1 class="title-orange">{"Brand Vision"}</h1>
                    <p>
                      EXEED Is Driven By Continuous Exploration And
                      Breakthroughs, Aiming To Become A World-Class Premium
                      Brand. With A Relentless Commitment To Innovation, We Are
                      Shaping The Future Of Automotive Excellence. Join Us On
                      This Journey As We Redefine What It Means To Drive And
                      Unleash A New Era Of Excellence.
                    </p>
                  </div>

                  <div class="warranty-sec1-img col-md-6">
                    <img src={img2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
