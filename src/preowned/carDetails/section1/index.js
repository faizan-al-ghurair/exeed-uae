import React from "react";
import "../../../common/styles/headerStyles.css";
import "../../../common/styles/commonStyle.css";
import "../../../common/styles/preownedStyles.css";
import carImg1 from "../../../images/cardetails1.png";
import carImg2 from "../../../images/cardetails2.png";
import carImg3 from "../../../images/cardetails3.png";
import carImg4 from "../../../images/cardetails4.png";
import carImg5 from "../../../images/carDetails5.png";
import carImg6 from "../../../images/carDetails6.png";
import carImg7 from "../../../images/banner.webp";
import imgIcon from "../../../images/img-icon.png";
import $ from "jquery";

export const Section1 = () => {
  $(document).ready(function () {
    // Set the source of the main big image to be the source of the first image in the carousel
    var firstImageSrc = $(".car-details-images-carousel img:first").attr("src");
    $(".car-details-main-img").attr("src", firstImageSrc);

    // Handle click on carousel images
    $(".cars-details-carousel-img").on("click", function () {
      // Remove the 'active' class from all carousel images
      $(".cars-details-carousel-img").removeClass("active");

      // Add the 'active' class to the clicked image
      $(this).addClass("active");

      // Reset opacity for all carousel images
      $(".cars-details-carousel-img").css("opacity", 1);

      // Reduce opacity for the clicked image
      $(this).css("opacity", 0.7);

      // Update the source of the active image
      var imgSrc = $(this).attr("src");
      $(".car-details-main-img").attr("src", imgSrc);

      // Change the number of the image of p to the index of the image
      var clickedIndex = $(".cars-details-carousel-img").index(this);
      showImage(clickedIndex);
    });

    // Check the number of carousel images
    checkScrollbar();

    // Function to toggle the visibility of the scrollbar based on the number of images
    function checkScrollbar() {
      var numImages = $(".car-details-images-carousel img").length;
      var showScrollbar = numImages > 3;

      if (showScrollbar) {
        $(".car-details-images-carousel").css("overflow-y", "auto");
      } else {
        $(".car-details-images-carousel").css("overflow-y", "hidden");
      }
    }

    var currentIndex = 0;
    var images = $(".cars-details-carousel-img");
    var mainImage = $(".car-details-main-img");

    function showImage(index) {
      // Reset opacity for all carousel images
      images.css("opacity", 1);

      // Set the opacity for the clicked image
      images.eq(index).css("opacity", 0.7);
      mainImage.attr("src", images.eq(index).attr("src"));
      currentIndex = index;

      // Update the image index display
      updateImageIndex(index, images.length);

      // Toggle visibility of arrow buttons based on the number of images
      toggleArrowVisibility();

      // Update the lightbox content
      var imgSrc = images.eq(index).attr("src");
      $("#lightbox-img").attr("src", imgSrc);
    }

    function updateImageIndex(currentIndex, totalImages) {
      // Display the current image index and total number of images
      $(".car-imgs-amount p").text(currentIndex + 1 + "/" + totalImages);
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    // Show the first image initially
    showImage(currentIndex);

    // Handle click on the previous arrow
    $(".car-details-prev").on("click", function () {
      prevImage();
    });

    // Handle click on the next arrow
    $(".car-details-next").on("click", function () {
      nextImage();
    });

    // Toggle visibility of arrow buttons based on the number of images
    function toggleArrowVisibility() {
      var numImages = images.length;

      if (numImages > 1) {
        $(".car-details-prev, .car-details-next").show();
      } else {
        $(".car-details-prev, .car-details-next").hide();
      }
    }

    // Handle click on main image to open the lightbox
    $(".car-details-main-img").on("click", function () {
      console.log("opening lihtbox");
      var imgSrc = mainImage.attr("src");
      $("#lightbox-img").attr("src", imgSrc);
      $("#lightbox").fadeIn();
    });

    // Handle click on close button to close the lightbox
    $("#lightbox-close").on("click", function () {
      $("#lightbox").fadeOut(50);
    });

    // Handle click on the space to close the lightbox
    $("#lightbox").on("click", function () {
      $("#lightbox").fadeOut(50);
    });

    // Handle click on previous arrow in lightbox
    $("#lightbox-prev").on("click", function (e) {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    // Handle click on the image in lightbox
    $("#lightbox-img").on("click", function (event) {
      event.stopPropagation();
      // Add any additional behavior if needed
    });

    // Handle click on next arrow in lightbox
    $("#lightbox-next").on("click", function (e) {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  });
  return (
    <>
      <section class="section-black row aboutus-header">
        <div class="col-md-12 d-flex py-5">
          <div class="col-md-12 w-100 d-flex justify-content-center flex-column">
            <div class="aboutus-title row d-flex flex-column align-items-center ">
              <div id="lightbox">
                <span id="lightbox-close">&times;</span>
                <img id="lightbox-img" alt="lightbox-image" />
                <span id="lightbox-prev">❮</span>
                <span id="lightbox-next">❯</span>
              </div>
              <div class="car-details-container-styles col-md-10 col-sm-10 col-10 bg-color-black">
                <div class="title-white-wrapper d-flex align-items-center justify-content-between">
                  <div class="car-details-sec1-header d-flex align-items-center">
                    <h1 class="title-orange">{"EXEED TXL"}</h1>
                    <h2 class="title-white">AED 109,111</h2>
                  </div>

                  <div class="out-line-btn-large ">
                    <a class="btn btn-outline-primary linkButton" href="">
                      <span class="">ENQUIRE NOW</span>
                    </a>
                  </div>
                </div>
                <div class="car-details-images d-flex">
                  <div class="car-details-active-img">
                    <img alt="carImg1" class="car-details-main-img" />
                    <button class="car-details-prev">❮</button>
                    <button class="car-details-next">❯</button>

                    <div class="car-imgs-amount">
                      <img src={imgIcon} alt="img icon" />
                      <p>1/8</p>
                    </div>
                  </div>

                  <div class="car-details-images-carousel d-flex flex-column">
                    <div class="testing-div-new">
                      <img
                        src={carImg1}
                        alt="carImg1"
                        class="cars-details-carousel-img"
                      />
                      <img
                        src={carImg2}
                        alt="carImg1"
                        class="cars-details-carousel-img"
                      />
                      <img
                        src={carImg5}
                        alt="carImg1"
                        class="cars-details-carousel-img"
                      />
                      <img
                        src={carImg3}
                        alt="carImg1"
                        class="cars-details-carousel-img"
                      />
                      <img
                        src={carImg6}
                        alt="carImg1"
                        class="cars-details-carousel-img"
                      />
                      <img
                        src={carImg4}
                        alt="carImg1"
                        class="cars-details-carousel-img"
                      />
                      <img
                        src={carImg7}
                        alt="carImg1"
                        class="cars-details-carousel-img"
                      />
                    </div>
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
