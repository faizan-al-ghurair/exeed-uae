import React from "react";
import $ from "jquery";

const CarousalComponent = ({ id, active }) => {
  $(document).ready(function () {
    // Attach a click event handler to the title element
    $("#openStep2")
      .unbind("click")
      .click("click", function (e) {
        $(".target-1").slideToggle();
        $(".target-2").slideDown();
        e.stopPropagation();
        // alert("hi")
      });

    $("#openStep1")
      .unbind("click")
      .click("click", function (e) {
        $(".target-1").slideDown();
        $(".target-2").slideUp();
        e.stopPropagation();
        // alert("hi")
      });

    $("#openStep3")
      .unbind("click")
      .click("click", function (e) {
        $(".target-3").slideDown();
        $(".target-2").slideUp();
        e.stopPropagation();
        // alert("hi")
      });

    $("#openStep2From3")
      .unbind("click")
      .click("click", function (e) {
        $(".target-2").slideDown();
        $(".target-3").slideUp();
        e.stopPropagation();
        // alert("hi")
      });
  });

  return (
    <div class={`tab-pane fade show ${active}`} id={id}>
      <div class="line-white mb-4"></div>
      <section class="container-fluid text-inverse border-left-white border-right-white border-top-white">
        <div class="row pt-3">
          <div class="col-lg-2 col-md-2 px-3 col-sm-12">
            <div class="">
              <p class="p-small">NAME</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-3 px-3 col-sm-12">
            <div class="">
              <div class="elementor-widget-container">
                <p class="p-small">ADDRESS</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-12 px-3 ">
            <div class="">
              <p class="p-small">OPENING HOURS</p>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-12 px-3 ">
            <div class="">
              <p class="p-small">PHONE / EMAIL</p>
            </div>
          </div>

          <div class="col-lg-2 col-md-2 col-sm-12 px-3 ">
            <div class="">
              <p class="p-small">SERVICES</p>
            </div>
          </div>
        </div>
      </section>
      <div class="line-white mb-3"></div>

      <section
        class="elementor-section"
        data-id="7934254d"
        data-element_type="section"
        data-settings=""
      >
        <div class="">
          {(id === "SERVICECENTER" || id === "NEWCARS" || id === "ALL") && (
            <>
              <section class="container-fluid text-inverse">
                <div class="row">
                  <div class="col-lg-2 col-md-2 px-3 col-sm-12">
                    <div class="">
                      <p class="p-small">DUBAI </p>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 px-3 col-sm-12">
                    <div class="">
                      <div class="elementor-widget-container">
                        <p class="p-small">
                          EXEED Car Showroom, Service Centre &amp; Spare Parts,
                          Al Khabeesi, Al Ittihad Road
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-12 px-3 ">
                    <div class="">
                      <p class="p-small">
                        Service center Reception &amp; Delivery Area
                        <br />
                        -Weekday Timings: 8am to 6Pm
                        <br />
                        -Saturday: 8am to 5Pm
                        <br />
                        <br />
                        Exeed Showroom:
                        <br />
                        -Weekday Timings : 9am to 8Pm
                        <br />
                        -Saturday: 9am to 8Pm
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-12 px-3 ">
                    <div class="">
                      <p class="p-small">
                        exeed.uae@al-ghurair.com
                        <br />
                        +971 4 3995661
                      </p>
                    </div>
                  </div>

                  <div class="col-lg-2 col-md-2 col-sm-12 px-3 ">
                    <div class="">
                      <p class="p-small">
                        • Showroom
                        <br />
                        • Service Center
                        <br />• Spare Parts
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <div class="line-white mb-4"></div>
              <section class="container-fluid text-inverse">
                <div class="row">
                  <div class="col-lg-2 col-md-2 px-3 col-sm-12">
                    <div class="">
                      <p class="p-small">ABU DHABI</p>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 px-3 col-sm-12">
                    <div class="">
                      <div class="elementor-widget-container">
                        <p class="p-small">Coming Soon</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-12 px-3 ">
                    <div class="">
                      <p class="p-small">Coming Soon</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-12 px-3 ">
                    <div class="">
                      <p class="p-small">Coming Soon</p>
                    </div>
                  </div>

                  <div class="col-lg-2 col-md-2 col-sm-12 px-3 ">
                    <div class="">
                      <p class="p-small">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </section>
              <div class="line-white mt-2"></div>

              <div class="elementor-widget-wrap mt-4 mb-3">
                <div class="row w-85 pt-1 pb-5">
                  <div class="elementor-widget-wrap pt-3">
                    <span id="openStep3" class="p-3 linkButton">
                      <span class="elementor-button-text">Next step 3</span>
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export const Section2 = () => {
  return (
    <>
      <section
        class="elementor-section section-spacing"
        data-id="83e2e07"
        data-element_type="section"
      >
        <section class="flex flex-column justify-content-center align-items-center w-100 bg-color-black">
          <div class="row flex w-85 pt-4">
            <p class="text-inverse">1 Vehicle Please Select The Vehicle</p>
            <div class="target-1 flex direction-column">
              <div class="flex">
                <div
                  class="col-lg-4 col-md-4 col-sm-12 pt-3"
                  data-id="90c8e18"
                  data-element_type="column"
                >
                  <div class="">
                    <div
                      class=""
                      data-id="39cc3f7"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div class="">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="https://exeed-uae.com/wp-content/uploads/2023/07/Group-433-1.png"
                          class="test-drive-images"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-4 col-sm-12 pt-3"
                  data-id="9966c5f"
                  data-element_type="column"
                >
                  <div class="">
                    <div
                      class=""
                      data-id="13be543"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div class="elementor-widget-container">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="https://exeed-uae.com/wp-content/uploads/2023/08/Group-432-1.png"
                          class="test-drive-images"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-4 col-sm-12 pt-3"
                  data-id="6bca915"
                  data-element_type="column"
                >
                  <div class="">
                    <div
                      class=""
                      data-id="0ff9c46"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div class="elementor-widget-container">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="https://exeed-uae.com/wp-content/uploads/2023/07/Group-431-1.png"
                          class="test-drive-images"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row w-85 pt-4 pb-3" data-element_type="column">
                <div class="elementor-widget-wrap">
                  <span id="openStep2" class="p-3 linkButton">
                    <span class="elementor-button-text">NEXT STEP to 2</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section
        class="elementor-section section-spacing mt-4 "
        data-id="83e2e07"
        data-element_type="section"
      >
        {/* 2rd section */}
        <section class="pb-1 flex flex-column justify-content-center align-items-center w-100 bg-color-black ">
          <div class="row flex w-85 pt-3 ">
            <p class="text-inverse">
              2 Showroom Locations Please Select The Showroom Locations
            </p>
          </div>

          <div class="row flex  w-100 ">
            <div class="target-2 term-hidden" id="">
              <div class="bg-color-black flex flex-column justify-content-center align-items-center">
                <div
                  class="row w-85 pt-1 pb-5"
                  data-id="13955ed"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap">
                    <div
                      class=""
                      data-id="0f11065"
                      data-element_type="widget"
                      data-widget_type="html.default"
                    >
                      <div class="elementor-widget-wrap pt-3">
                        <span id="openStep1" class="p-3 linkButton">
                          <span class="elementor-button-text">
                            PREVIOUS to 1
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="w-100"
                  data-id="c103e62"
                  data-element_type="column"
                  data-settings='{"background_background":"classic"}'
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <section
                      class="elementor-section elementor-inner-section elementor-element elementor-element-7b60417 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                      data-id="7b60417"
                      data-element_type="section"
                    >
                      <div class="elementor-container elementor-column-gap-no">
                        <div
                          class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-9225565"
                          data-id="9225565"
                          data-element_type="column"
                        ></div>
                      </div>
                    </section>

                    <section
                      class="dynamic-tabs-test-drive justify-content-center align-items-center d-flex"
                      data-id="d27ecd7"
                      data-element_type="section"
                    >
                      <div class="section-spacing w-85">
                        <div class="">
                          <div
                            class=""
                            data-id="cceeb84"
                            data-element_type="widget"
                            data-widget_type="icon.default"
                          >
                            <div class="">
                              <div class="">
                                <div class="elementor-icon">
                                  <i
                                    aria-hidden="true"
                                    class="fas fa-search"
                                  ></i>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="d-flex w-100  ">
                            <div class="elementor-widget-container">
                              <div class="bg-color-black form-background">
                                <input
                                  id="searchInput"
                                  class="form-control bg-color-black mb-3 text-inverse"
                                  placeholder="Enter Zipcode, Dealer Name, City Name"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul class="nav nav-tabs mb-4 " id="myTab">
                          <li class="nav-item px-1 col-lg-2 text-align-center border-right-white pt-2 pb-2">
                            <a
                              href="#ALL"
                              class="nav-link-test-drive active"
                              data-bs-toggle="tab"
                            >
                              ALL
                            </a>
                          </li>
                          <li class="nav-item px-1 col-lg-2 text-align-center border-right-white pt-2 pb-2">
                            <a
                              href="#NEWCARS"
                              class="nav-link-test-drive"
                              data-bs-toggle="tab"
                            >
                              NEW CARS
                            </a>
                          </li>
                          <li class="nav-item px-1 col-lg-2 text-align-center border-right-white pt-2 pb-2">
                            <a
                              href="#USEDCARS"
                              class="nav-link-test-drive"
                              data-bs-toggle="tab"
                            >
                              USED CARS
                            </a>
                          </li>
                          <li class="nav-item px-1 col-lg-2 text-align-center border-right-white pt-2 pb-2">
                            <a
                              href="#AFTERSALES"
                              class="nav-link-test-drive"
                              data-bs-toggle="tab"
                            >
                              AFTER SALES
                            </a>
                          </li>
                          <li class="nav-item px-1 col-lg-2 text-align-center  pt-2 pb-2">
                            <a
                              href="#TRADEIN"
                              class="nav-link-test-drive"
                              data-bs-toggle="tab"
                            >
                              TRADE IN
                            </a>
                          </li>
                          <li class="nav-item px-1 col-lg-2 text-align-center border-left-white pt-2 pb-2">
                            <a
                              href="#SERVICECENTER"
                              class="nav-link-test-drive"
                              data-bs-toggle="tab"
                            >
                              SERVICE CENTER
                            </a>
                          </li>
                        </ul>
                        <div class="tab-content">
                          <CarousalComponent id="ALL" active="active" />
                          <CarousalComponent id="NEWCARS" active="" />
                          <CarousalComponent id="USEDCARS" active="" />
                          <CarousalComponent id="AFTERSALES" active="" />
                          <CarousalComponent id="TRADEIN" active="" />
                          <CarousalComponent id="SERVICECENTER" active="" />
                        </div>
                      </div>
                    </section>

                    <section
                      class="elementor-section elementor-inner-section elementor-element elementor-element-bdddd60 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                      data-id="bdddd60"
                      data-element_type="section"
                    >
                      <div class="elementor-container elementor-column-gap-no">
                        <div
                          class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3cd4fd1"
                          data-id="3cd4fd1"
                          data-element_type="column"
                        >
                          <div class="">
                            <div
                              class="elementor-element elementor-element-96e2262 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                              data-id="96e2262"
                              data-element_type="widget"
                              data-widget_type="divider.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-divider">
                                  <span class="elementor-divider-separator"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3rd section */}
      </section>
      <section
        class="elementor-section section-spacing mt-4  "
        data-id="83e2e07"
        data-element_type="section"
      >
        <section class="pb-1 flex flex-column justify-content-center align-items-center w-100 bg-color-black ">
          <div class="row flex w-85 pt-3 ">
            <p class="text-inverse">
              3 My Information Please Inter Your Information
            </p>
          </div>

          <div class="row flex  w-100 ">
            <div class="target-3 term-hidden" id="">
              <div class="bg-color-black flex flex-column justify-content-center align-items-center">
                <div
                  class="row w-85 pt-1 pb-5"
                  data-id="13955ed"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap">
                    <div class="">
                      <div class="elementor-widget-wrap pt-3">
                        <span id="openStep2From3" class="p-3 linkButton">
                          <span class="elementor-button-text">
                            PREVIOUS to 2
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form">
                  <form
                    class="section-spacing"
                    id="needs-validation"
                    novalidate
                  >
                    <div class="container-fluid form-background section-spacing pb-5">
                      <div class="row pb-5">
                        <div class="col-lg-6 col-sm-12 col-12">
                          <div class="form-group pb-3 px-2">
                            <label class="text-inverse" for="userFirstName">
                              First Name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="userFirstName"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-sm-12 col-12">
                          <div class="form-group  pb-3 px-2">
                            <label class="text-inverse " for="userLastName">
                              Last Name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="userLastName"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-sm-12 col-12">
                          <div class="form-group  pb-3 px-2">
                            <label class="text-inverse" for="userPhone">
                              Phone (05xxxxxxxx)
                            </label>
                            <input
                              maxLength={10}
                              class="form-control"
                              id="userPhone"
                              type="tel"
                              pattern="^0\d{9}$"
                              required
                            />
                          </div>
                        </div>

                        <div class="col-lg-6 col-sm-12 col-12">
                          <div class="form-group pb-3 px-2">
                            <label class="text-inverse" for="userEmail">
                              Email
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="userEmail"
                              required
                            />
                            <div class="invalid-feedback">
                              Please provide a valid Email.
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12 col-sm-12 col-12">
                          <div class="form-group pb-3 px-2">
                            <label class="text-inverse" for="userMessage">
                              Leave A Message
                            </label>
                            <textarea
                              class="form-control"
                              rows="4"
                              id="userMessage"
                              required
                            ></textarea>
                          </div>
                          <p class="text-inverse">
                            {" "}
                            Exeed Motors strive to protect your online privacy
                            while providing you with an unforgettable experience
                            full of useful products and services.
                          </p>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-12">
                          <div class="form-group pb-3 px-2">
                            <label
                              class="text-inverse"
                              for="termAndConditionsAgree"
                            >
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="termAndConditionsAgree"
                                required
                              />
                              <span class="custom-control-indicator"></span>
                              <span class="custom-control-description px-3">
                                I accept{" "}
                                <a
                                  href="/terms-and-conditions"
                                  class="terms-and-conditions"
                                >
                                  terms and conditions
                                </a>
                              </span>
                            </label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="out-line-btn-large ">
                            <button
                              type="submit"
                              class="btn btn-outline-primary linkButton"
                            >
                              <span class="p-3">SUBMIT</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
