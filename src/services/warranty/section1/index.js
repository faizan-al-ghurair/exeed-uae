import React from "react";
import "../../../common/styles/headerStyles.css";
import "../../../common/styles/commonStyle.css";
import img2 from "../../../EXSSED-2.png";
import img1 from "../../../EXSSED-1-1.png";

export const Section1 = () => {
  return (
    <>
      <section class="section-black row">
        <div class="col-md-12 d-flex my-5">
          <div class="col-md-10 w-100 d-flex justify-content-center flex-column mt-5">
            <div class="row d-flex justify-content-center align-items-start warranty-section1">
              <div
                class="col-md-10 col-sm-10 col-10 warranty-sec1-flex d-flex flex-column
                justify-content-center"
              >
                <div class="title-white-wrapper">
                  <h1 class="title-orange">{"WARRANTY"}</h1>
                  <h1 class="title-orange">{"MANUFACTURER WARRANTY"}</h1>
                </div>
                <div class="aboutus-sec5-tab d-flex fluid-container  ">
                  <div class="warranty-sec1-text col-md-6">
                    <h2>WHAT THE WARRANTY COVERS</h2>
                    <p>
                      Our 7 Years/200,000Km* Warranty Provides You With The
                      Reassurance That, During The Applicable Period, You Will
                      Be Comprehensively Protected Against Any Unexpected Repair
                      Costs At Our Authorized Exeed Al Ghurair Service Center.
                      When Bringing Your Vehicle To Exeed Al Ghurair Service
                      Center For Any Necessary Repair Work Under Your Warranty,
                      You Can Benefit From Several Advantages, Such As
                      State-Of-The-Art Workshops, Manufacturer-Approved Parts,
                      Accessories And Qualified Technicians. There Will Also Be
                      12 Months Or 20,000Km*, Whichever Comes First, Guarantee
                      On All Purchased Parts From Exeed Al Ghurair Retail
                      Counter.
                    </p>
                  </div>

                  <div class="warranty-sec1-img col-md-6">
                    <img src={img1} />
                  </div>
                </div>
                <div class="aboutus-sec5-tab d-flex fluid-container section-reverse">
                  <div class="warranty-sec1-text col-md-6">
                    <h2>WHAT THE WARRANTY COVERS</h2>
                    <p>
                      Our 7 Years/200,000Km* Warranty Provides You With The
                      Reassurance That, During The Applicable Period, You Will
                      Be Comprehensively Protected Against Any Unexpected Repair
                      Costs At Our Authorized Exeed Al Ghurair Service Center.
                      When Bringing Your Vehicle To Exeed Al Ghurair Service
                      Center For Any Necessary Repair Work Under Your Warranty,
                      You Can Benefit From Several Advantages, Such As
                      State-Of-The-Art Workshops, Manufacturer-Approved Parts,
                      Accessories And Qualified Technicians. There Will Also Be
                      12 Months Or 20,000Km*, Whichever Comes First, Guarantee
                      On All Purchased Parts From Exeed Al Ghurair Retail
                      Counter.
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
