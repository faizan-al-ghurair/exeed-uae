import React from "react";
import "../../../common/styles/headerStyles.css";
import "../../../common/styles/commonStyle.css";
import $ from "jquery";

<script src="https://code.jquery.com/jquery-3.6.0.min.js" />;
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>;

export const Section2 = () => {
  $(document).ready(function () {
    // Find all the tab containers
    var tabContainers = $(".warranty-section2-flex");

    // Loop through each container
    tabContainers.each(function () {
      // Find all the tab-text elements within the container
      var tabTextElements = $(this).find(".warranty-section2-tab-text");

      // Loop through tab-text elements and add the class to every third element
      tabTextElements.each(function (index) {
        if ((index + 1) % 3 === 0) {
          $(this).addClass("no-right-border");
        }
      });
    });
  });

  return (
    <>
      <section class="section-black row">
        <div class="col-md-12 d-flex py-5">
          <div class="col-md-12 w-100 d-flex justify-content-center flex-column">
            <div class="row d-flex flex-column align-items-center ">
              <div class="col-md-10 col-sm-10 col-10">
                <h1>WHAT DOES THE LIMITED WARRANTY COVER</h1>
              </div>
              <div class="col-md-10 col-sm-10 col-10 d-flex warranty-section2-flex justify-content-start flex-wrap">
                <div class="warranty-section2-tab col-md-4">
                  <div class="warranty-section2-tab-text">
                    <p>Tire</p>
                    <p>
                      The Warranty Covers The Tire For 3 Months Or 5000 Km*
                      Whichever Comes First From The Original Date Of Sale.
                    </p>
                  </div>
                  <div class="warranty-section2-tab-divider">
                    <hr />
                  </div>
                </div>

                <div class="warranty-section2-tab col-md-4">
                  <div class="warranty-section2-tab-text">
                    <p>Exhaust System</p>
                    <p>
                      The Warranty Covers The Exhaust System And Fuel Injector
                      For 24 Months Or 60,000 Km* Whichever Comes First From The
                      Original Date Of Sale.
                    </p>
                  </div>
                  <div class="warranty-section2-tab-divider">
                    <hr />
                  </div>
                </div>
                <div class="warranty-section2-tab col-md-4">
                  <div class="warranty-section2-tab-text">
                    <p>Fuel Injector</p>
                    <p>
                      The Warranty Covers The Exhaust System And Fuel Injector
                      For 36 Months Or 60,000 Km* Whichever Comes First From The
                      Original Date Of Sale.
                    </p>
                  </div>
                  <div class="warranty-section2-tab-divider">
                    <hr />
                  </div>
                </div>
                <div class="warranty-section2-tab col-md-4">
                  <div class="warranty-section2-tab-text">
                    <p>Shock Absorber</p>
                    <p>
                      The Warranty Covers The Shock Absorber For 36 Months Or
                      60,000 Km* Whichever Comes First From The Original Date Of
                      Sale.
                    </p>
                  </div>
                  <div class="warranty-section2-tab-divider">
                    <hr />
                  </div>
                </div>
                <div class="warranty-section2-tab col-md-4">
                  <div class="warranty-section2-tab-text">
                    <p>Shock Absorber</p>
                    <p>
                      The Warranty Covers The Shock Absorber For 36 Months Or
                      60,000 Km* Whichever Comes First From The Original Date Of
                      Sale.
                    </p>
                  </div>
                  <div class="warranty-section2-tab-divider">
                    <hr />
                  </div>
                </div>
                <div class="warranty-section2-tab col-md-4">
                  <div class="warranty-section2-tab-text">
                    <p>Shock Absorber</p>
                    <p>
                      The Warranty Covers The Shock Absorber For 36 Months Or
                      60,000 Km* Whichever Comes First From The Original Date Of
                      Sale.
                    </p>
                  </div>
                  <div class="warranty-section2-tab-divider">
                    <hr />
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
