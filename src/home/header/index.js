import React from "react";
import "../../common/styles/headerStyles.css";
import img2 from "../../images/banner-txl-resized.png";
import img3 from "../../images/banner-lx-resized.png";
import img4 from "../../images/banner-rx-resized.jpg";
import $ from "jquery";

const CarTile = ({ img, url, id, name }) => {
  return (
    <a
      href={url}
      class="d-flex justify-content-start ps-4 pb-2 pt-2 car-tile"
      id={id}
    >
      <div class="" data-id="ba7709e" data-element_type="column">
        <div class="">
          <div
            class=""
            data-id="7a5023e"
            data-element_type="widget"
            data-widget_type="image.default"
          >
            <div class="">
              <img
                width="178"
                height="88"
                src={img}
                class="attachment-full size-full wp-image-2993"
                alt="Exeed TXL cars in UAE"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="align-self-center"
        data-id="347633e"
        data-element_type="column"
      >
        <div class="ps-3 car-tile-font">
          <div
            class=""
            data-id="0858de8"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div class="elementor-widget-container">
              <p class="elementor-widget-container-font m-0 mb-1">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export const Header = () => {
  $(document).ready(function () {
    var valuesArray = []; // Create an empty array to store the values

    // Iterate through elements with a specific class and add their values to the array
    $(".myClass").each(function () {
      var value = $(this).text(); // Get the text (or value) of the element
      valuesArray.push(value); // Add the value to the array
    });
    // Define data for different car tiles
    var carTiles = [
      {
        id: "exeed-vx-modal",
        imgURL: "https://exeed-uae.com/wp-content/uploads/2023/07/vx-im.png",
        specs: ["5", "1.6L TGDL", "197"],
      },
      {
        id: "exeed-txl-modal",
        imgURL: img2,
        specs: ["4", "1.5L TGDL", "195"],
      },
      {
        id: "exeed-lx-modal",
        imgURL: img3,
        specs: ["6", "2.0L Engine", "210"],
      },
      {
        id: "exeed-rx-modal",
        imgURL: img4,
        specs: ["7", "3.0L Hybrid", "250"],
      },
    ];

    var $modalPreviewImg = $(".car-img-widget");
    var $modalPreviewSpecsDiv = $(".modal-specs-values");

    // Function to update the preview based on the selected car tile
    function updatePreview(tileID) {
      var carTile = carTiles.find(function (tile) {
        return tile.id === tileID;
      });

      if (carTile) {
        $modalPreviewImg.css("background-image", "url(" + carTile.imgURL + ")");
        $modalPreviewSpecsDiv.each(function (index) {
          $(this).text(carTile.specs[index]);
        });
      }
    }

    // Attach hover event to car tiles
    $(".car-tile").hover(function () {
      var tileID = $(this).attr("id");
      updatePreview(tileID);
    });

    // Initialize the preview with the first car tile
    updatePreview(carTiles[0].id);

    // Function to add the class when the screen width is less than 768px
    function addClassOnResize() {
      var screenWidth = $(window).width();
      if (screenWidth < 992) {
        // Add the class to the div
        $(".car-models-nav-dropdown").addClass("other-dropdown bg-app-black");
        $(".car-models-nav-dropdown").removeClass("cars-dropdown");
      } else {
        // Remove the class if the screen width is greater or equal to 768px
        $(".car-models-nav-dropdown").removeClass(
          "other-dropdown bg-app-black"
        );
        $(".car-models-nav-dropdown").addClass("cars-dropdown");
      }
    }

    // Call the function on page load and window resize
    addClassOnResize();
    $(window).on("resize", addClassOnResize);

    // Get a reference to the div element by its ID
    const hamburgerIcon = $(".navbar-toggler");
    var openNav = false;

    // Add a click event listener to the div
    // $(".navbar-close").css("display", "none");
    hamburgerIcon.on("click", function () {
      // Change the background color when the div is clicked

      hamburgerIcon.css("background-color", "#c28a6c"); // You can set your desired color
      if (openNav === false) {
        // Show the "x" and hide the default Bootstrap icon
        $(".navbar-close").addClass("show-navbar-close");
        $(".navbar-toggler-icon").hide();
        openNav = true;
      } else {
        // Show the default Bootstrap icon and hide the "x"

        openNav = false;
        $(".navbar-toggler-icon").show();
        $(".navbar-close").removeClass("show-navbar-close");
      }
    });
  });

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary header ">
        <div class="ms-5">
          <a href="/">
            <img
              src="https://exeed-uae.com/wp-content/uploads/2023/07/Exeed.png"
              class="attachment-large size-large wp-image-41 padding-right-sm"
              alt="exeed cars logo"
            />
          </a>
        </div>
        <div class="px-2">
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-close ">&#x2715;</span>
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="main_nav">
          <ul class="navbar-nav mVW-5">
            <li class="nav-item  dropdown header-nav-link">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                {"MODELS"}
              </a>
              <ul class="dropdown-menu cars-dropdown car-models-nav-dropdown drop-down-margin">
                <div class="cars-header-modal">
                  <section
                    class="row"
                    data-id="32e3bca"
                    data-element_type="section"
                    data-image="img2"
                  >
                    <div class="col-md-4 car-tiles-container">
                      <CarTile
                        url="/exeed-vx/"
                        id="exeed-vx-modal"
                        img={
                          "https://exeed-uae.com/wp-content/uploads/2023/07/VX-P.png"
                        }
                        name="EXEED VX"
                      />
                      <div class="border-bottom-bold"></div>

                      <CarTile
                        url="/exeed-txl/"
                        id="exeed-txl-modal"
                        img={
                          "https://exeed-uae.com/wp-content/uploads/2023/07/TXL.png"
                        }
                        name="EXEED TXL"
                      />
                      <div class="border-bottom-bold"></div>

                      <CarTile
                        url="/exeed-lx/"
                        id="exeed-lx-modal"
                        img={
                          "https://exeed-uae.com/wp-content/uploads/2023/07/LX-Bule.png"
                        }
                        name="EXEED LX"
                      />
                      <div class="border-bottom-bold"></div>

                      <CarTile
                        url="/exeed-rx/"
                        id="exeed-rx-modal"
                        img={
                          "https://exeed-uae.com/wp-content/uploads/2023/07/RX-45°-green-NEW-1-Recovered-1.png"
                        }
                        name="EXEED RX"
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="car-img-widget position-relative">
                        <div>
                          <div class="absolute-details-car d-flex w-100 align-items-center">
                            <div class="col-md-4 modal-specs-border">
                              <div>
                                <div class=" row justify-content-center align-items-center">
                                  <div class="elementor-icon-box-wrapper text-center col-md-3">
                                    <div class="w-100">
                                      <span class="">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          class="information-svg-modal"
                                          width="39.897"
                                          height="69.15"
                                          viewBox="0 0 39.897 69.15"
                                        >
                                          <g
                                            id="_4118398_baby_car_child_safety_seat_icon"
                                            data-name="4118398_baby_car_child_safety_seat_icon"
                                            transform="translate(313 40.167)"
                                          >
                                            <path
                                              id="Path_18"
                                              data-name="Path 18"
                                              d="M54.659,48.847H52.93l.922-1.9a19.865,19.865,0,0,0,1.532-12.7L52.251,19.4A7.788,7.788,0,0,0,45.2,13.551a2.834,2.834,0,0,0,.236-1.11V4.12A3.307,3.307,0,0,0,41.977,1H28.141a3.307,3.307,0,0,0-3.459,3.12v8.321a2.838,2.838,0,0,0,.236,1.11A7.789,7.789,0,0,0,17.867,19.4L14.734,34.239a19.868,19.868,0,0,0,1.532,12.705l.905,1.9H15.459A3.307,3.307,0,0,0,12,51.967v8.321a5.511,5.511,0,0,0,5.765,5.2H52.353a5.511,5.511,0,0,0,5.765-5.2V51.967A3.307,3.307,0,0,0,54.659,48.847ZM49.985,19.789l3.134,14.84a17.975,17.975,0,0,1-1.386,11.5l-1.562,3.3-.138.25a2.976,2.976,0,0,0-1.138,2.3v2.55A12.492,12.492,0,0,0,46.589,52.8V16A5.343,5.343,0,0,1,49.985,19.789ZM25.835,21.8H44.283v4.161H25.835ZM44.283,43.215l-2.405-2.17,2.405-2.17ZM35.059,28.474l3.558,3.21-3.558,3.21L31.5,31.684Zm-5.188,1.739-2.405-2.17h4.81Zm7.972-2.17h4.81l-2.405,2.17Zm-4.414,8.321-3.558,3.21-3.558-3.21,3.558-3.21Zm1.63,1.471,3.558,3.21-3.558,3.21L31.5,41.046Zm1.63-1.471,3.558-3.21,3.558,3.21-3.558,3.21Zm7.593-2.511-2.405-2.17,2.405-2.17ZM25.835,29.514l2.405,2.17-2.405,2.17Zm0,9.361,2.405,2.17-2.405,2.17Zm4.035,3.64,2.405,2.17h-4.81Zm10.377,0,2.405,2.17h-4.81Zm4.035-26.954v4.161H25.835V15.562H44.283Zm-18.447,31.2H44.283v4.965a13.835,13.835,0,0,0-4.612-.8H30.447a13.836,13.836,0,0,0-4.612.8ZM26.988,4.12a1.1,1.1,0,0,1,1.153-1.04H41.977A1.1,1.1,0,0,1,43.13,4.12v8.321a1.1,1.1,0,0,1-1.153,1.04H28.141a1.1,1.1,0,0,1-1.153-1.04ZM17,34.629l3.134-14.84A5.341,5.341,0,0,1,23.53,16V52.8a12.492,12.492,0,0,0-2.306,1.716v-2.55a2.979,2.979,0,0,0-1.116-2.282l-1.721-3.56A17.965,17.965,0,0,1,17,34.629ZM55.812,60.288a3.307,3.307,0,0,1-3.459,3.12H17.765a3.307,3.307,0,0,1-3.459-3.12V51.967a1.1,1.1,0,0,1,1.153-1.04h2.306a1.1,1.1,0,0,1,1.153,1.04v5.2H21.8l.346-.415a10.845,10.845,0,0,1,8.3-3.746h9.224a10.845,10.845,0,0,1,8.3,3.746l.346.415H51.2v-5.2a1.1,1.1,0,0,1,1.153-1.04h2.306a1.1,1.1,0,0,1,1.153,1.04Z"
                                              transform="translate(-325 -41.167)"
                                              fill="#bcbdc0"
                                            ></path>
                                          </g>
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                  <div class="elementor-icon-box-content-header-icons header-modal-specs col-md-8 ">
                                    <div class="justify-content-center">
                                      <h3 class="justify-content-start">
                                        <span class="white-banner-text-label ">
                                          Seat Capcity
                                        </span>
                                      </h3>
                                    </div>
                                    <span class="white-banner-text-value modal-specs-values"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-4 modal-specs-border">
                              <div
                                class="w-100"
                                data-id="5d7c2b4f"
                                data-element_type="widget"
                                data-widget_type="icon-box.default"
                              >
                                <div class="row justify-content-center align-items-center">
                                  <div class="elementor-icon-box-wrapper text-center  col-md-3">
                                    <div class="w-100">
                                      <span class="">
                                        <svg
                                          class="information-svg-modal"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="39.897"
                                          height="69.15"
                                          viewBox="0 0 39.897 69.15"
                                        >
                                          <path
                                            id="_4118382_car_engine_parts_spare_starter_icon"
                                            data-name="4118382_car_engine_parts_spare_starter_icon"
                                            d="M70.15,34.748H65.689v-1.9H61.227V31.423L56.022,28.1H52.3V17.649a3.132,3.132,0,0,0-3.346-2.85H47.843v-.95A3.132,3.132,0,0,0,44.5,11H13.269a3.349,3.349,0,0,0-3.141,1.9H1v5.7H9.923v3.974a2.919,2.919,0,0,0-2.231,2.675V31.9H1V47.1H7.692v.95a3.132,3.132,0,0,0,3.346,2.85H44.5A3.349,3.349,0,0,0,47.638,49h1.321A3.349,3.349,0,0,0,52.1,47.1h3.924l5.2-3.325V42.348h4.461v-1.9H70.15ZM45.613,13.85v.95H41.152v7.6H16.614V12.9H44.5A1.044,1.044,0,0,1,45.613,13.85ZM13.269,12.9h1.115v9.5H12.153V13.85A1.044,1.044,0,0,1,13.269,12.9ZM3.231,16.7V14.8H9.923v1.9ZM7.692,33.8v2.428a4.975,4.975,0,0,0-4.461,0V33.8Zm0,5.7a2.087,2.087,0,0,1-2.231,1.9,1.924,1.924,0,1,1,0-3.8A2.087,2.087,0,0,1,7.692,39.5ZM3.231,45.2V42.769a4.975,4.975,0,0,0,4.461,0V45.2Zm42.382,2.85A1.044,1.044,0,0,1,44.5,49H16.614V27.149H14.384V49H11.038a1.044,1.044,0,0,1-1.115-.95v-22.8a1.044,1.044,0,0,1,1.115-.95H38.921V47.1h2.231V24.3H44.5a1.044,1.044,0,0,1,1.115.95Zm4.461-1.9a1.044,1.044,0,0,1-1.115.95H47.843V25.249A3.132,3.132,0,0,0,44.5,22.4H43.382V16.7h5.577a1.044,1.044,0,0,1,1.115.95ZM59,42.823,55.279,45.2H52.3V30h2.975L59,32.373Zm4.461-2.375H61.227v-5.7h2.231Zm4.461-1.9H65.689v-1.9h2.231Z"
                                            transform="translate(-11 70.15) rotate(-90)"
                                            fill="#bcbdc0"
                                          ></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                  <div class="elementor-icon-box-content-header-icons header-modal-specs col-md-8 ">
                                    <div class="justify-content-center">
                                      <h3 class="justify-content-start">
                                        <span class="white-banner-text-label">
                                          Engine Capacity
                                        </span>
                                      </h3>
                                    </div>
                                    <span class="white-banner-text-value modal-specs-values"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-4 modal-specs-border">
                              <div
                                class="w-100"
                                data-id="5d7c2b4f"
                                data-element_type="widget"
                                data-widget_type="icon-box.default"
                              >
                                <div class="row justify-content-center align-items-center">
                                  <div class="elementor-icon-box-wrapper text-center col-md-3">
                                    <div class="w-100">
                                      <span class="">
                                        <svg
                                          US
                                          class="information-svg-modal"
                                          xmlns="http://www.w3.org/2000/svg"
                                          xlink="http://www.w3.org/1999/xlink"
                                          width="60"
                                          height="60"
                                          viewBox="0 0 60 60"
                                        >
                                          <defs>
                                            <clipPath id="clip-path">
                                              <rect
                                                width="60"
                                                height="60"
                                                fill="none"
                                              ></rect>
                                            </clipPath>
                                          </defs>
                                          <g
                                            id="Expanded"
                                            clip-path="url(#clip-path)"
                                          >
                                            <g
                                              id="Expanded-2"
                                              data-name="Expanded"
                                            >
                                              <g
                                                id="Group_40"
                                                data-name="Group 40"
                                              >
                                                <g
                                                  id="Group_26"
                                                  data-name="Group 26"
                                                >
                                                  <path
                                                    id="Path_19"
                                                    data-name="Path 19"
                                                    d="M30,60A30,30,0,1,1,60,30,30.035,30.035,0,0,1,30,60ZM30,2.5A27.5,27.5,0,1,0,57.5,30,27.531,27.531,0,0,0,30,2.5Z"
                                                    fill="#bcbdc0"
                                                  ></path>
                                                </g>
                                                <g
                                                  id="Group_27"
                                                  data-name="Group 27"
                                                  transform="translate(25 25)"
                                                >
                                                  <path
                                                    id="Path_20"
                                                    data-name="Path 20"
                                                    d="M25,30a5,5,0,1,1,5-5A5.005,5.005,0,0,1,25,30Zm0-7.5A2.5,2.5,0,1,0,27.5,25,2.5,2.5,0,0,0,25,22.5Z"
                                                    transform="translate(-20 -20)"
                                                    fill="#bcbdc0"
                                                  ></path>
                                                </g>
                                                <g
                                                  id="Group_28"
                                                  data-name="Group 28"
                                                  transform="translate(31.402 13.725)"
                                                >
                                                  <path
                                                    id="Path_21"
                                                    data-name="Path 21"
                                                    d="M26.372,25.854a1.25,1.25,0,0,1-.884-2.134L37.862,11.346a1.25,1.25,0,1,1,1.768,1.767L27.256,25.488A1.251,1.251,0,0,1,26.372,25.854Z"
                                                    transform="translate(-25.122 -10.98)"
                                                    fill="#bcbdc0"
                                                  ></path>
                                                </g>
                                                <g
                                                  id="Group_29"
                                                  data-name="Group 29"
                                                  transform="translate(5 28.75)"
                                                >
                                                  <path
                                                    id="Path_22"
                                                    data-name="Path 22"
                                                    d="M10.25,25.5h-5a1.25,1.25,0,1,1,0-2.5h5a1.25,1.25,0,1,1,0,2.5Z"
                                                    transform="translate(-4 -23)"
                                                    fill="#bcbdc0"
                                                  ></path>
                                                </g>
                                                <g
                                                  id="Group_30"
                                                  data-name="Group 30"
                                                  transform="translate(6.808 35.925)"
                                                >
                                                  <path
                                                    id="Path_23"
                                                    data-name="Path 23"
                                                    d="M6.7,33.154a1.25,1.25,0,0,1-.478-2.4l4.62-1.913a1.25,1.25,0,1,1,.955,2.31l-4.62,1.912A1.265,1.265,0,0,1,6.7,33.154Z"
                                                    transform="translate(-5.447 -28.74)"
                                                    fill="#bcbdc0"
                                                  ></path>
                                                </g>
                                                <g
                                                  id="Group_31"
                                                  data-name="Group 31"
                                                  transform="translate(46.072 35.923)"
                                                >
                                                  <path
                                                    id="Path_24"
                                                    data-name="Path 24"
                                                    d="M42.726,33.154a1.242,1.242,0,0,1-.478-.1l-4.619-1.914a1.25,1.25,0,1,1,.957-2.31l4.619,1.914a1.25,1.25,0,0,1-.48,2.405Z"
                                                    transform="translate(-36.858 -28.739)"
                                                    fill="#bcbdc0"
                                                  ></path>
                                                </g>
                                                <g
                                                  id="Group_32"
                                                  data-name="Group 32"
                                                  transform="translate(47.499 28.75)"
                                                >
                                                  <path
                                                    id="Path_25"
                                                    data-name="Path 25"
                                                    d="M44.249,25.5h-5a1.25,1.25,0,1,1,0-2.5h5a1.25,1.25,0,0,1,0,2.5Z"
                                                    transform="translate(-37.999 -23)"
                                                    fill="#bcbdc0"
                                                  ></path>
                                                </g>
                                                <g
                                                  id="Group_33"
                                                  data-name="Group 33"
                                                  transform="translate(46.072 19.663)"
                                                >
                                                  <path
                                                    id="Path_26"
                                                    data-name="Path 26"
                                                    d="M38.108,20.142a1.25,1.25,0,0,1-.478-2.405l4.619-1.911a1.25,1.25,0,1,1,.955,2.31l-4.619,1.911A1.261,1.261,0,0,1,38.108,20.142Z"
                                                    transform="translate(-36.858 -15.731)"
                                                    fill="#bcbdc0"
                                                  ></path>
                                                </g>
                                                <g
                                                  id="Group_34"
                                                  data-name="Group 34"
                                                  transform="translate(35.926 6.81)"
                                                >
                                                  <path
                                                    id="Path_27"
                                                    data-name="Path 27"
                                                    d="M29.99,12.566a1.25,1.25,0,0,1-1.154-1.729L30.75,6.219a1.25,1.25,0,0,1,2.31.958l-1.914,4.617A1.255,1.255,0,0,1,29.99,12.566Z"
                                                    transform="translate(-28.741 -5.448)"
                                                    fill="#bcbdc0"
                                                  ></path>
                                                </g>
                                                <g
                                                  id="Group_35"
                                                  data-name="Group 35"
                                                  transform="translate(28.75 5.001)"
                                                >
                                                  <path
                                                    id="Path_28"
                                                    data-name="Path 28"
                                                    d="M24.25,11.5h0A1.25,1.25,0,0,1,23,10.25v-5A1.25,1.25,0,0,1,24.251,4h0a1.25,1.25,0,0,1,1.25,1.25v5A1.25,1.25,0,0,1,24.25,11.5Z"
                                                    transform="translate(-23 -4.001)"
                                                    fill="#bcbdc0"
                                                  ></path>
                                                </g>
                                                <g
                                                  id="Group_36"
                                                  data-name="Group 36"
                                                  transform="translate(19.663 6.808)"
                                                >
                                                  <path
                                                    id="Path_29"
                                                    data-name="Path 29"
                                                    d="M18.892,12.566a1.248,1.248,0,0,1-1.155-.771L15.826,7.176a1.25,1.25,0,0,1,2.31-.958l1.911,4.619a1.251,1.251,0,0,1-1.155,1.729Z"
                                                    transform="translate(-15.731 -5.446)"
                                                    fill="#bcbdc0"
                                                  ></path>
                                                </g>
                                                <g
                                                  id="Group_37"
                                                  data-name="Group 37"
                                                  transform="translate(11.958 11.956)"
                                                >
                                                  <path
                                                    id="Path_30"
                                                    data-name="Path 30"
                                                    d="M14.351,15.6a1.252,1.252,0,0,1-.885-.366L9.932,11.7A1.25,1.25,0,1,1,11.7,9.931l3.534,3.536a1.25,1.25,0,0,1-.884,2.134Z"
                                                    transform="translate(-9.566 -9.565)"
                                                    fill="#bcbdc0"
                                                  ></path>
                                                </g>
                                                <g
                                                  id="Group_38"
                                                  data-name="Group 38"
                                                  transform="translate(6.808 19.659)"
                                                >
                                                  <path
                                                    id="Path_31"
                                                    data-name="Path 31"
                                                    d="M11.316,20.143a1.252,1.252,0,0,1-.479-.1L6.218,18.133a1.25,1.25,0,0,1,.958-2.31l4.619,1.915a1.25,1.25,0,0,1-.479,2.405Z"
                                                    transform="translate(-5.447 -15.727)"
                                                    fill="#bcbdc0"
                                                  ></path>
                                                </g>
                                                <g
                                                  id="Group_39"
                                                  data-name="Group 39"
                                                  transform="translate(17.5 40)"
                                                >
                                                  <path
                                                    id="Path_32"
                                                    data-name="Path 32"
                                                    d="M37.75,42H15.25A1.25,1.25,0,0,1,14,40.75v-7.5A1.25,1.25,0,0,1,15.25,32h22.5A1.25,1.25,0,0,1,39,33.25v7.5A1.25,1.25,0,0,1,37.75,42ZM16.5,39.5h20v-5h-20Z"
                                                    transform="translate(-14 -32)"
                                                    fill="#bcbdc0"
                                                  ></path>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                  <div class="elementor-icon-box-content-header-icons header-modal-specs col-md-8 ">
                                    <div class="justify-content-center">
                                      <h3 class="justify-content-start">
                                        <span class="white-banner-text-label">
                                          Horse Power
                                        </span>
                                      </h3>
                                    </div>
                                    <span class="white-banner-text-value modal-specs-values"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div class="cars-header-modal-mobile">
                  <li class="p-3 ">
                    <a class="dropdown-item nav-font-color" href="/exeed-vx">
                      {"EXEED VX"}
                    </a>
                  </li>
                  <li class="p-3">
                    <a class="dropdown-item nav-font-color" href="/exeed-txl">
                      {"EXEED TXL"}
                    </a>
                  </li>
                  <li class="p-3">
                    <a
                      base
                      class="dropdown-item nav-font-color"
                      href="/exeed-lx"
                    >
                      {"EXEED LX"}
                    </a>
                  </li>
                  <li class="p-3">
                    <a class="dropdown-item nav-font-color" href="/exeed-rx">
                      {"EXEED RX"}
                    </a>
                  </li>
                </div>
              </ul>
            </li>
            <li class="nav-item header-nav-link">
              <a class="nav-link" href="test-drive">
                {"TEST DRIVE"}
              </a>
            </li>
            <li class="nav-item  dropdown header-nav-link">
              <a
                class="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                {"SERVICES"}
              </a>
              <ul class="dropdown-menu other-dropdown bg-app-black ">
                <li class="">
                  <a
                    class="dropdown-item nav-font-color"
                    href="service-calculator"
                  >
                    {"SERVICE CALCULATOR"}
                  </a>
                </li>
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="book-service">
                    {"BOOK SERVICE"}
                  </a>
                </li>
                <li class="p-3">
                  <a
                    base
                    class="dropdown-item nav-font-color"
                    href="spare-parts"
                  >
                    {"SPARE PARTS"}
                  </a>
                </li>
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="/warranty">
                    {"WARRANTY"}
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item  header-nav-link">
              <a class="nav-link" href="#">
                {"REQUEST QUOTE"}
              </a>
            </li>
            <li class="nav-item  dropdown header-nav-link">
              <a
                class="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                {"SHOWROOM"}
              </a>
              <ul class="dropdown-menu other-dropdown bg-app-black">
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="dubai-showroom">
                    {"DUBAI"}
                  </a>
                </li>
                <li class="p-3">
                  <a
                    class="dropdown-item nav-font-color"
                    href="abu-dhabi-showroom"
                  >
                    {"ABU DHABI "}
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item  dropdown header-nav-link">
              <a
                class="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                {"FINANCIAL"}
              </a>
              <ul class="dropdown-menu other-dropdown bg-app-black">
                <li class="p-3">
                  <a
                    class="dropdown-item nav-font-color"
                    href="/financial-calculator"
                  >
                    {"FINANCIAL CALCULATOR"}
                  </a>
                </li>
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="lease-rate">
                    {"LEASE RATE "}
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item  dropdown header-nav-link">
              <a
                class="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                {"DISCOVER MORE"}
              </a>
              <ul class="dropdown-menu other-dropdown bg-app-black">
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="/aboutus">
                    {"ABOUT US"}
                  </a>
                </li>
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="/news-home">
                    {"NEWS"}
                  </a>
                </li>
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="/contact">
                    {"CONTACT"}
                  </a>
                </li>
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="#">
                    {"FIND LOCATION"}
                  </a>
                </li>
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="/promotion">
                    {"PROMOTION"}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <a class="whats-app" href="http://wa.me/+971545105685" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
      </a>
    </>
  );
};
