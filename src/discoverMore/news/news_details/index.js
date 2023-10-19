import React from "react";
import "../../../common/styles/headerStyles.css";
import "../../../common/styles/commonStyle.css";
import { Header } from "../../../home/header";
import { Footer } from "../../../home/section6";
import newsImage from "../../../images/newsimage.png";
import banner from "../../../images/banner.webp";
import banner2 from "../../../images/photo-5.png";
import $ from "jquery";

<script src="https://code.jquery.com/jquery-3.6.0.min.js" />;

export const NewsDetails = () => {
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
  });

  return (
    <>
      <Header></Header>
      <section class="section-black row news-details">
        <div class="col-md-12 d-flex pt-5">
          <div class="col-md-12 w-100 d-flex justify-content-center flex-column">
            <div class="details-head row d-flex flex-column align-items-center ">
              <div class="col-md-10 col-sm-10 col-10">
                <div class="title-white-wrapper">
                  <h2 class="title-white">{"01 April, 2023"}</h2>
                  <h1 class="title-orange">
                    {
                      "Unveiling The Teaser Of Exeed’s First Electric Sedan, New EXLANTIX Series Will Come Soon!"
                    }
                  </h1>
                </div>
              </div>

              <div class="col-md-10 col-sm-10 col-10 pb-3">
                <div class="carousel-container">
                  <ul class="carousel">
                    <li class="carousel-img-placeholder">
                      <img src={banner} alt="Image 1" />
                    </li>
                    <li class="carousel-img-placeholder">
                      <img src={banner2} alt="Image 2" class="w-100" />
                    </li>
                    <li class="carousel-img-placeholder">
                      <img src={banner} alt="Image 3" />
                    </li>
                    <li class="carousel-img-placeholder">
                      <img src={banner2} alt="Image 2" class="w-100" />
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
                  <p>
                    On March 28, EXEED Officially Released A Teaser Post Of Its
                    First Sedan That Is Long Expected By Global Users, Which
                    Demonstrates That EXEED Has Preliminarily Built A Full-
                    Range Product Matrix Including Sedan And SUV. On April 10,
                    EXEED Released A Teaser Through Its Official Social Media
                    Account Again, Further Unveiling The Mystery Of The Sedan.
                  </p>
                  <p>
                    This New Vehicle, Integrating High Performance And Green And
                    Environmental Protection, Is The First Electric Sedan
                    Created By EXEED, As Well As The First Model That Will Be
                    Under A New Series – EXLANTIX, Derived From The
                    Pronunciation Of “Atlantis”. EXLANTIX Not Only Represents
                    The High-End Electric Product Of EXEED, But Also Shoulder
                    The Important Mission Of Creating Ideal Mobility Modes.
                  </p>
                  <p>
                    As The First Sedan Under The EXLANTIX Series, The Vehicle
                    Features Clean Lines, A Slender Body. Looking From The Front
                    Particularly, The Vehicle Shows People A Swooping Feeling
                    Through A Forward-Prostrating Design From The Middle Of The
                    Engine Hood; While For The Rear, It Adopts A Sportback
                    Styling With A Small And Slightly Upward Rear Wing.
                  </p>
                  <p>
                    These Design Elements, Which Are Usually Adopted For
                    High-Performance Vehicles, Indicate That This New Vehicle
                    Will Pay Equal Attention To Its Sporty Performance.
                  </p>

                  <img
                    src={newsImage}
                    alt="News description Image"
                    width="100%"
                  />

                  <p>
                    The EXEED Team Has Subtly Designed The Teaser To Give
                    Prominence To Its Positioning As A Electric Vehicle.
                    Firstly, It Takes Green As Its The Dominant Color, Echoing
                    The Theme Of Green And Environmental Protection; Secondly,
                    The Body Is Covered With Hexagonal Geometric Patterns, Which
                    Are Derived From The Hexagonal Lattice Of Carbon; Moreover,
                    The Light And Shadow On The Road Are Reminiscent Of Electric
                    Currents, Further Highlighting The Feature As The First
                    Electric Sedan.
                  </p>

                  <img
                    src={newsImage}
                    alt="News description image"
                    width="100%"
                  />

                  <p>
                    Currently, It Is Common For High-End Users To Pursue The
                    Sporty Performance And Green Mobility. Exeed’s First Sedan
                    Perfectly Combines These Two Qualities, Which Positions The
                    Sedan As An Ideal Vehicle For Users, And Also Ushers In A
                    New Series Of High-End Electric Products.
                  </p>

                  <p>
                    The Naming Of EXLANTIX Also Foreshadows That This Series
                    Will Be As Desirable And Worth Exploring As The Atlantis
                    Described By Plato.
                  </p>
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
