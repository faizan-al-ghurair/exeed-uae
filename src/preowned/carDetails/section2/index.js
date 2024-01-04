import React from "react";
import "../../../common/styles/headerStyles.css";
import "../../../common/styles/commonStyle.css";
import "../../../common/styles/preownedStyles.css";
import plusSign from "../../../images/More.png";
import minusSign from "../../../images/Minus.png";
import $ from "jquery";

export const Section2 = () => {
  $(document).ready(function () {
    // Attach a click event handler to the title element
    $(".car-details-accord-btn")
      .unbind()
      .on("click", function () {
        // Toggle the visibility of the accordion info
        $(this)
          .closest(".cars-details-accord-wrapper")
          .find(".car-details-accordian-info")
          .unbind()
          .slideToggle(200);

        // Toggle a class for styling (optional)
        $(this).toggleClass("active");

        // Change img src on button click
        var imgSrc = $(this).hasClass("active") ? minusSign : plusSign;
        $(this).find("img").attr("src", imgSrc);
      });
  });
  return (
    <>
      <section class="section-black row aboutus-header">
        <div class="col-md-12 d-flex py-5">
          <div class="col-md-12 w-100 d-flex justify-content-center flex-column">
            <div class="aboutus-title row d-flex flex-column align-items-center ">
              <div class=" col-md-10 col-sm-10 col-10 ">
                <div class="car-details-container-styles bg-color-black cars-details-accord-wrapper">
                  <div class="car-details-accordian-header d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                      <h1 class="title-orange">{"OVERVIEW"}</h1>
                    </div>

                    <button class="car-details-accord-btn">
                      <img
                        class="car-details-accord-btn-img"
                        src={plusSign}
                        alt="plus sign"
                      />
                    </button>
                  </div>
                  <div class="car-details-accordian-info">
                    <table>
                      <tbody>
                        <tr>
                          <td>Model Grade</td>
                          <td>Body Type</td>
                        </tr>
                        <tr>
                          <td>Modal Year</td>
                          <td>2019</td>
                        </tr>
                        <tr>
                          <td>Model Grade</td>
                          <td>S</td>
                        </tr>
                        <tr>
                          <td>Model Group</td>
                          <td>EXEED TXL</td>
                        </tr>
                        <tr>
                          <td>Model Grade</td>
                          <td>S</td>
                        </tr>
                        <tr>
                          <td>Warranty</td>
                          <td>1YR/20,000KMS Warranty</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="car-details-container-styles bg-color-black cars-details-accord-wrapper">
                  <div class="car-details-accordian-header d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                      <h1 class="title-orange">
                        {"PERFORMANCE AND TECHNICAL FEATURES "}
                      </h1>
                    </div>

                    <button class="car-details-accord-btn">
                      <img src={plusSign} alt="plus sign" />
                    </button>
                  </div>
                  <div class="car-details-accordian-info">
                    <p>
                      EXEED is a pioneering automotive brand, crafting vehicles
                      that expertly blend premium elegance with advanced,
                      innovative technology, exceeding expectations and setting
                      new standards in the automobile industry.
                    </p>
                    <p>
                      Our new line of SUVs brings you more adventure, premium
                      quality product with striking good looks. Discover the new
                      LX, TXL, and VX models, with delivery of your new EXEED
                      SUV to your home in just 48 hours. Our monthly instalments
                      start from AED 1,299. *
                    </p>
                  </div>
                </div>

                <div class="car-details-container-styles bg-color-black cars-details-accord-wrapper">
                  <div class="car-details-accordian-header d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                      <h1 class="title-orange">{"EXTERIOR"}</h1>
                    </div>

                    <button class="car-details-accord-btn">
                      <img src={plusSign} alt="plus sign" />
                    </button>
                  </div>
                  <div class="car-details-accordian-info">
                    <p>
                      EXEED is a pioneering automotive brand, crafting vehicles
                      that expertly blend premium elegance with advanced,
                      innovative technology, exceeding expectations and setting
                      new standards in the automobile industry.
                    </p>
                  </div>
                </div>

                <div class="car-details-container-styles bg-color-black cars-details-accord-wrapper">
                  <div class="car-details-accordian-header d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                      <h1 class="title-orange">{"INTERIOR"}</h1>
                    </div>

                    <button class="car-details-accord-btn">
                      <img src={plusSign} alt="plus sign" />
                    </button>
                  </div>
                  <div class="car-details-accordian-info">
                    <p>
                      Our new line of SUVs brings you more adventure, premium
                      quality product with striking good looks. Discover the new
                      LX, TXL, and VX models, with delivery of your new EXEED
                      SUV to your home in just 48 hours. Our monthly instalments
                      start from AED 1,299. *
                    </p>
                  </div>
                </div>

                <div class="car-details-container-styles bg-color-black cars-details-accord-wrapper">
                  <div class="car-details-accordian-header d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                      <h1 class="title-orange">{"SAFTY AND CONVENIENCE"}</h1>
                    </div>

                    <button class="car-details-accord-btn">
                      <img src={plusSign} alt="plus sign" />
                    </button>
                  </div>
                  <div class="car-details-accordian-info">
                    <p>
                      EXEED is a pioneering automotive brand, crafting vehicles
                      that expertly blend premium elegance with advanced,
                      innovative technology, exceeding expectations and setting
                      new standards in the automobile industry.
                    </p>
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
