import React from "react";
import "../../common/styles/headerStyles.css";
import "../../common/styles/commonStyle.css";
import { Header } from "../../home/header";
import { Footer } from "../../home/section6";
import prom1 from "../../EXEED_Starting-Offer_Website-Banner_LX86.jpg";
import prom2 from "../../EXEED_Starting-Offer_Website-Banner_RX.jpg";
import prom3 from "../../EXEED_Starting-Offer_Website-Banner_TXL79.jpg";
import prom4 from "../../EXEED_Starting-Offer_Website-Banner_VX83.jpg";
import logo from "../../AGI-Logo-new.png";
import $ from "jquery";

<script src="https://code.jquery.com/jquery-3.6.0.min.js" />;
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>;

export const Promotion = () => {
  // code working but scroll back to first image
  $(document).ready(function () {
    const $carousel = $(".carousel");
    const $prevBtn = $(".prev");
    const $nextBtn = $(".next");

    let currentIndex = 0;
    const totalSlides = $carousel.find("li").length;
    let isAnimating = false;

    function toggleSlides() {
      if (totalSlides < 2) {
        $prevBtn.hide();
        $nextBtn.hide();
      } else {
        $prevBtn.show();
        $nextBtn.show();
      }
    }

    toggleSlides();

    $prevBtn.on("click", function () {
      if (!isAnimating) {
        isAnimating = true;
        $carousel.css("transition", "transform 0.5s ease-in-out");
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
      }
    });

    $nextBtn.on("click", function () {
      if (!isAnimating) {
        isAnimating = true;
        $carousel.css("transition", "transform 0.5s ease-in-out");
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
      }
    });

    $carousel.on("transitionend", function () {
      isAnimating = false;
      $carousel.css("transition", "none");
      if (currentIndex === -1) {
        currentIndex = totalSlides - 1;
      } else if (currentIndex === totalSlides) {
        currentIndex = 0;
      }
      updateCarousel();
    });

    function updateCarousel() {
      const slideWidth = $carousel.find("li").width();
      const translateX = -currentIndex * slideWidth;

      $carousel.css("transform", `translateX(${translateX}px)`);
    }

    // Attach a click event handler to the title element
    $(".promotion-terms-title")
      .unbind()
      .on("click", function (e) {
        e.stopPropagation();
        $(this).next(".promotion-terms-list").slideToggle();
      });
  });

  return (
    <>
      <Header></Header>
      <section class="section-black row ">
        <div class="col-md-12 d-flex pt-5">
          <div class="col-md-12 w-100 d-flex justify-content-center flex-column">
            <div class=" row d-flex flex-column align-items-center ">
              <div class="col-md-10 col-sm-10 col-10">
                <div class="title-white-wrapper">
                  <h1 class="title-orange">{"Our Promotion"}</h1>
                </div>
              </div>

              <div class="col-md-10 col-sm-10 col-10 pb-3">
                <div class="carousel-container">
                  <ul class="carousel">
                    <li class="promotion-carousel-img-placeholder">
                      <img src={prom1} alt="Image 1" />
                    </li>
                    <li class="promotion-carousel-img-placeholder">
                      <img src={prom2} alt="Image 2" />
                    </li>
                    <li class="promotion-carousel-img-placeholder">
                      <img src={prom3} alt="Image 3" />
                    </li>
                    <li class="promotion-carousel-img-placeholder">
                      <img src={prom4} alt="Image 2" />
                    </li>
                  </ul>
                  <button class="prev">&#10094;</button>
                  <button class="next">&#10095;</button>
                </div>
              </div>
            </div>
            <div class="details-description row d-flex flex-column align-items-center ">
              <div class="col-md-10 col-sm-10 col-10 pb-3">
                <div class="">
                  <h1 class="title-orange">
                    {"We bring you our Starting Offer!"}
                  </h1>
                  <p>
                    EXEED is a pioneering automotive brand, crafting vehicles
                    that expertly blend premium elegance with advanced,
                    innovative technology, exceeding expectations and setting
                    new standards in the automobile industry.
                  </p>
                  <p>
                    Our new line of SUVs brings you more adventure, premium
                    quality product with striking good looks. Discover the new
                    LX, TXL, and VX models, with delivery of your new EXEED SUV
                    to your home in just 48 hours. Our monthly instalments start
                    from AED 1,299. *
                  </p>
                  <div class="out-line-btn-large ">
                    <a class="btn btn-outline-primary linkButton" href="">
                      <span class="p-3">
                        <span>ENQUIRE NOW</span>
                      </span>
                    </a>
                  </div>

                  <div class="promotion-terms-wrapper">
                    <div class="promotion-terms-title">
                      <p>WHAT DINING OPTION DO YOU HAVE?</p>
                      {/* <button class="show-fact ">&#129139;</button> */}
                    </div>
                    <div class="promotion-terms-list term-hidden">
                      <ol>
                        <li>
                          This offer is valid from 15th September and ends on
                          17th November 2023
                        </li>
                        <li>
                          This offer is applicable on all 4 models, subject to
                          availability.
                        </li>
                        <li>
                          The selected vehicle will be delivered within 48 hours
                          in the UAE during RTA working hours, subject to
                          completion of all necessary vehicle booking
                          requirements i.e., confirmation of model & color
                          selection and full payment is complete.
                        </li>
                        <li>
                          Indicative monthly instalments based on 20% deposit,
                          60 instalments and market prevailing interest rates.
                        </li>
                        <li>
                          Any changes in the vehicle booking information on
                          behalf of the Buyer and/or Seller may lead to delays
                          in delivery.
                        </li>
                        <li>
                          The Seller reserves the right to withhold delivery of
                          Vehicle for any reason, including but not limited to
                          verification of Buyer’s information, delay in receipt
                          of full payment, on the instruction of the partner
                          bank etc.
                        </li>
                        <li>
                          The Seller shall not be considered in default for
                          delay in delivery, and shall be excused from
                          performance or liability for damages to the Buyer, if
                          and to the extent the Seller has been delayed or
                          prevented from performing or carrying out the
                          delivery, arising out of or from any act, omission, or
                          circumstance by or in consequence of any act of God,
                          act of the public enemy, war, invasion, insurrection,
                          riot, fire, storm, flood, earthquake, explosion,
                          epidemic or any other cause or causes beyond
                          reasonable control of both parties i.e., “Force
                          Majeure”. The Seller shall use its best efforts to
                          mitigate the effects of such Force Majeure event and
                          resume delivery plans, as agreed with the Buyer, as
                          soon as it is reasonably practicable.
                        </li>
                        <li>
                          The Seller shall be entitled to amend these terms &
                          conditions as per its discretion at any time.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};
