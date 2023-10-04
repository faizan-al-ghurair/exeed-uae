import React from "react";
import "../../common/styles/headerStyles.css";

const CarTile = ({ img,url }) => {
  return (
    <a href={url} class="d-flex justify-content-start ps-4 pb-2 pt-2">
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
              <p class="elementor-widget-container-font m-0 mb-1">
                {"EXEED TXL"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export const Header = () => {
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
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="main_nav">
          <ul class="navbar-nav mVW-5 header-nav-link">
            <li class="nav-item px-1 dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                {"MODELS"}
              </a>
              <ul class="dropdown-menu cars-dropdown">
                <div class="cars-header-modal">
                  <section
                    class="row"
                    data-id="32e3bca"
                    data-element_type="section"
                    data-image="img2"
                  >
                    <div class="col-md-4">
                      <CarTile
                        url="/exeed-vx/"
                        img={
                          "https://exeed-uae.com/wp-content/uploads/2023/07/VX-P.png"
                        }
                      />
                      <div class="border-bottom-bold"></div>
                      <CarTile
                        url="/exeed-txl/"
                        img={
                          "https://exeed-uae.com/wp-content/uploads/2023/07/TXL.png"
                        }
                      />
                      <div class="border-bottom-bold"></div>
                      <CarTile
                        url="/exeed-lx/"
                        img={
                          "https://exeed-uae.com/wp-content/uploads/2023/07/LX-Bule.png"
                        }
                      />
                      <div class="border-bottom-bold"></div>
                      <CarTile
                        url="/exeed-rx/"
                        img={
                          "https://exeed-uae.com/wp-content/uploads/2023/07/RX-45°-green-NEW-1-Recovered-1.png"
                        }
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="car-img-widget position-relative">
                        <div
                          class="car-specification-widget"
                          data-id="f14a721"
                          data-element_type="widget"
                          data-settings='{"_position":"absolute"}'
                          data-widget_type="image.default"
                        >
                          <div class="absolute-details-car">
                            <img
                              src="https://exeed-uae.com/wp-content/uploads/2023/07/vx-text.png"
                              class="w-100"
                              alt="Exeed VX Car Specs"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </ul>
            </li>
            <li class="nav-item px-1">
              <a class="nav-link" href="#">
                {"TEST DRIVE"}
              </a>
            </li>
            <li class="nav-item px-1 dropdown">
              <a
                class="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                {"SERVICES"}
              </a>
              <ul class="dropdown-menu other-dropdown bg-app-black ">
                <li class="p-2 ">
                  <a class="dropdown-item nav-font-color" href="#">
                    {"SERVICE CALCULATOR"}
                  </a>
                </li>
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="#">
                    {"BOOK SERVICE"}
                  </a>
                </li>
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="#">
                    {"SPARE PARTS"}
                  </a>
                </li>
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="#">
                    {"WARRANTY"}
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item px-1">
              <a class="nav-link" href="#">
                {"REQUEST QUOTE"}
              </a>
            </li>
            <li class="nav-item px-1 dropdown">
              <a
                class="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                {"SHOWROOM"}
              </a>
              <ul class="dropdown-menu other-dropdown bg-app-black">
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="#">
                    {"DUBAI"}
                  </a>
                </li>
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="#">
                    {"ABU DHABI "}
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item px-1 dropdown">
              <a
                class="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                {"FINANCIAL"}
              </a>
              <ul class="dropdown-menu other-dropdown bg-app-black">
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="#">
                    {"FINANCIAL CALCULATOR"}
                  </a>
                </li>
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="#">
                    {"LEASE RATE "}
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item px-1 dropdown">
              <a
                class="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                {"DISCOVER MORE"}
              </a>
              <ul class="dropdown-menu other-dropdown bg-app-black">
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="#">
                    {"ABOUT US"}
                  </a>
                </li>
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="#">
                    {"NEWS"}
                  </a>
                </li>
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="#">
                    {"CONTACT"}
                  </a>
                </li>
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="#">
                    {"FIND LOCATION"}
                  </a>
                </li>
                <li class="p-3">
                  <a class="dropdown-item nav-font-color" href="#">
                    {"PROMOTION"}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
