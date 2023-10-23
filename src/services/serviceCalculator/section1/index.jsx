import React from "react";
import $ from "jquery";
import { Footer } from "../../../home/section6";

export const Section1 = () => {
  $(document).ready(function () {
    const priceTable = {
      lx5: {
        1: 835,
        2: 1888,
        3: 2677,
        4: 4357,
        5: 6383,
        6: 6955,
        7: 7530,
      },
      lx6: {
        1: 976,
        2: 2147,
        3: 3069,
        4: 4765,
        5: 6701,
        6: 7363,
        7: 7979,
      },
      txl6: {
        1: 976,
        2: 2147,
        3: 3069,
        4: 4765,
        5: 6701,
        6: 7363,
        7: 7979,
      },
      txl2: {
        1: 1023,
        2: 2189,
        3: 3156,
        4: 5004,
        5: 7506,
        6: 8116,
        7: 8727,
      },
      vx: {
        1: 1066,
        2: 2240,
        3: 3246,
        4: 5098,
        5: 7708,
        6: 8315,
        7: 8954,
      },
    };

    //Code for SERVICE CONTRACT BY YEAR -- Calculation
    $("#servicecontractcalcu").on("click", function () {
      const carModel = document.getElementById("carModelY").value;
      const year = document.getElementById("yearY").value;
      const price = priceTable[carModel][year];
      const resultElement = document.getElementById("resultY");
      resultElement.innerHTML = price;
    });

    //Code for SERVICE CONTRACT BY KILOMETER -- Calculation
    const priceTableK = {
      lx5: {
        10000: 359.9,
        20000: 567.5,
        30000: 359.9,
        40000: 934,
        50000: 359.9,
        60000: 567.5,
        70000: 359.9,
        80000: 1937,
        90000: 1693.6,
        100000: 839.4,
        110000: 359.9,
        120000: 934,
        130000: 463.1,
        140000: 303.3,
        150000: 359.9,
        160000: 1937,
        170000: 359.9,
        180000: 567.5,
        190000: 359.9,
        200000: 839.4,
      },
      lx6: {
        10000: 393.5,
        20000: 691.1,
        30000: 393.5,
        40000: 1047.6,
        50000: 393.5,
        60000: 691.1,
        70000: 393.5,
        80000: 1952.6,
        90000: 1510.6,
        100000: 909,
        110000: 393.5,
        120000: 1047.6,
        130000: 517.7,
        140000: 303.3,
        150000: 393.5,
        160000: 1952.6,
        170000: 393.5,
        180000: 691.1,
        190000: 393.5,
        200000: 909,
      },
      txl: {
        10000: 407.8,
        20000: 728.8,
        30000: 407.8,
        40000: 1031.3,
        50000: 407.8,
        60000: 728.8,
        70000: 407.8,
        80000: 2134.3,
        90000: 1969.5,
        100000: 1157.8,
        110000: 407.8,
        120000: 1031.3,
        130000: 511,
        140000: 303.3,
        150000: 407.8,
        160000: 2134.3,
        170000: 407.8,
        180000: 728.8,
        190000: 407.8,
        200000: 1157.8,
      },
      vx: {
        10000: 425.3,
        20000: 758.9,
        30000: 425.3,
        40000: 1025.4,
        50000: 425.3,
        60000: 758.9,
        70000: 425.3,
        80000: 2128.4,
        90000: 2042.1,
        100000: 1220.3,
        110000: 425.3,
        120000: 1025.4,
        130000: 549.5,
        140000: 303.3,
        150000: 425.3,
        160000: 2128.4,
        170000: 425.3,
        180000: 758.9,
        190000: 425.3,
        200000: 1220.3,
      },
    };

    $("#servicecontractcalcu-kilometer").on("click", function () {
      const carModel = document.getElementById("carModelK").value;
      const year = document.getElementById("yearK").value;
      const price = priceTableK[carModel][year];
      const resultElement = document.getElementById("resultK");
      resultElement.innerHTML = price;
    });
  });

  return (
    <>
      <section class="section1" data-id="59fa9e7" data-element_type="section">
        <div class="elementor-background-overlay min-height-45 position-relative">
          <div class="img-section-calculator h-100 w-100 "></div>
        </div>
      </section>
      <section class="pb-5 pt-5 " data-id="80b2f29" data-element_type="section">
        <div class="container-fluid">
          <div class="row d-flex">
            <div class="col-md-12 justify-content-center text-center">
              <div class="">
                <h1 class="title-orange">{"SERVICE CONTRACTS"}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="elementor-section section-spacing mb-5"
        data-id="570be65"
        data-element_type="section"
      >
        <div class="elementor-container elementor-column-gap-no">
          <div
            class="container-fluid justify-content-center d-flex"
            data-id="103eea8"
            data-element_type="column"
          >
            <div class="row w-75 form-background-black">
              <div
                class="col-lg-6 col-md-6 col-sm-12"
                data-id="e231492"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div class="" data-id="103eea8" data-element_type="column">
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-e231492 elementor-widget elementor-widget-heading"
                      data-id="e231492"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div class="">
                        <h2 class="white-sub-title">
                          SERVICE CONTRACT BY YEAR
                        </h2>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12 d-flex flex-column  px-2">
                        <label class="text-inverse ">Car</label>
                        <select class="form-control" id="carModelY">
                          <option value="lx5" selected="">
                            LX 1.5
                          </option>
                          <option value="lx6">LX 1.6</option>
                          <option value="txl6">TXL 1.6</option>
                          <option value="txl2">TXL 2</option>
                          <option value="vx">VX</option>
                        </select>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 d-flex flex-column  px-2">
                        <label class="text-inverse ">Year</label>
                        <select class="form-control" id="yearY">
                          <option value="1" selected="">
                            1
                          </option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12 pt-4">
                        <div
                          class=""
                          data-id="0f11065"
                          data-element_type="widget"
                          data-widget_type="html.default"
                        >
                          <button
                            class="btn btn-outline-primary linkButton"
                            onclick="calculatePrice()"
                            id="servicecontractcalcu"
                          >
                            CALCULATE
                          </button>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 pt-4">
                        <span class="p-3 text-align-center">
                          <div class="text-inverse" id="resultY"></div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-6 col-md-6 col-sm-12"
                data-id="e231492"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div class="" data-id="103eea8" data-element_type="column">
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-e231492 elementor-widget elementor-widget-heading"
                      data-id="e231492"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div class="">
                        <h2 class="white-sub-title">
                          SERVICE CONTRACT BY KILOMETER
                        </h2>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12 d-flex flex-column px-2">
                        <label class="text-inverse ">Car</label>
                        <select class="form-control" id="carModelK">
                          <option value="lx5" selected="">
                            LX 1.5
                          </option>
                          <option value="lx6">LX 1.6</option>
                          <option value="txl6">TXL 1.6</option>
                          <option value="txl2">TXL 2</option>
                          <option value="vx">VX</option>
                        </select>
                      </div>

                      <div class="col-lg-6 col-md-6 col-sm-12 d-flex flex-column  px-2">
                        <label class="text-inverse ">Year</label>
                        <select class="form-control" id="yearK">
                          <option value="10000" selected>
                            10000
                          </option>
                          <option value="20000">20000</option>
                          <option value="30000">30000</option>
                          <option value="40000">40000</option>
                          <option value="50000">50000</option>
                          <option value="60000">60000</option>
                          <option value="70000">70000</option>
                          <option value="80000">80000</option>
                          <option value="90000">90000</option>
                          <option value="100000">100000</option>
                          <option value="110000">110000</option>
                          <option value="120000">120000</option>
                          <option value="130000">130000</option>
                          <option value="140000">140000</option>
                          <option value="150000">150000</option>
                          <option value="160000">160000</option>
                          <option value="170000">170000</option>
                          <option value="180000">180000</option>
                          <option value="190000">190000</option>
                          <option value="200000">200000</option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12 pt-4">
                        <div
                          class=""
                          data-id="0f11065"
                          data-element_type="widget"
                          data-widget_type="html.default"
                        >
                          <button
                            class="btn btn-outline-primary linkButton"
                            id="servicecontractcalcu-kilometer"
                          >
                            CALCULATE
                          </button>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 pt-4">
                        <span class="p-3 text-align-center">
                          <span class="text-inverse" id="resultK">
                            AED
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="pt-3 pb-5 section-spacing mt-5 "
        data-id="83e2e07"
        data-element_type="section"
      >
        <div class="container-fluid">
          <div class="row d-flex ">
            <div class="col-md-12">
              <div class="">
                <div class="">
                  <h1 class="title-orange">{"AFTER SALES PLEDGE"}</h1>
                </div>
              </div>
            </div>

            <div class="title-white-wrapper">
              <div class="">
                <div class="" data-id="b5c7aab" data-element_type="column">
                  <div class="">
                    <div
                      class=""
                      data-id="cebe0dd"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div class="title-white-wrapper">
                        <h2 class="title-white-bold">
                          ROADSIDE ASSISTANCE 24/7
                        </h2>{" "}
                      </div>
                    </div>
                    <div
                      class=""
                      data-id="f4cebe8"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="sp">
                          <div class="">
                            <div class="title-white">
                              Exeed by Al ghurair offers you 7 years of peace of
                              mind in the below cases:
                            </div>
                            <div class="title-white">
                              &nbsp;1. Running out of gasoline&nbsp;
                            </div>
                            <div class="title-white">
                              2. Charging battery&nbsp;
                            </div>
                            <div class="title-white">
                              3. Installing existing spare tire&nbsp;
                            </div>
                            <div class="title-white">
                              4. Opening locked out vehicles&nbsp;
                            </div>
                            <div class="title-white">5. Tow truck service.</div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                    <div
                      class="mt-5"
                      data-id="a32d36b"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div class="elementor-widget-container">
                        <h2 class="title-white-bold">COST OF OWNERSHIP</h2>{" "}
                      </div>
                    </div>
                    <div
                      class=""
                      data-id="bc77594"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="sp">
                          <div class="inspectLayerContent block inspectRow">
                            <div class="title-white">
                              Our 7 Years/200,000Km* Warranty provides you with
                              the reassurance that during the applicable period,
                              you will be comprehensively protected against any
                              unexpected repair costs at our authorized Exeed by
                              Al ghurair Service Center. When bringing your
                              vehicle to Exeed Service Center for any necessary
                              repair work under your warranty, you can benefit
                              from several advantages,&nbsp; such as
                              state-of-the-art workshops, Manufacturer-Approved
                              Parts, Accessories and qualified technicians.
                              There will also be 12 months or 20,000Km*.
                              Whichever comes first, guarantee on all purchased
                              parts from Exeed Retail Counter.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="pt-5"
                      data-id="3fc1bd4"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div class="elementor-widget-container">
                        <h2 class="title-white-bold">
                          MANUFACTURER VEHICLE WARRANTY
                        </h2>{" "}
                      </div>
                    </div>
                    <div
                      class=""
                      data-id="37b4db7"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="sp">
                          <div class="inspectLayerContent block inspectRow">
                            <div class="title-white">
                              Exeed Alghurair Vehicles Come With A 7 Year /
                              200,000 Km* Manufacturer Warranty (Whichever Comes
                              First)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="pt-5  d-flex justify-content-center align-items-center w-100"
        data-id="80b2f29"
        data-element_type="section"
      >
        <div class="row d-flex w-85">
          <div class="col-md-12">
            <div class="">
              <div class="">
                <h1 class="title-orange">{" Owner Manual"}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pb-5  d-flex justify-content-center align-items-center w-100">
        <div class="row d-flex w-85">
          <div
            class="col-lg-4 col-md-4 col-sm-12"
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
                    alt=""
                    decoding="async"
                    loading="lazy"
                    src="https://exeed-uae.com/wp-content/uploads/2023/07/Group-433-1.png"
                    class=""
                  />
                </div>
              </div>
              <div
                class="pt-4 justify-content-center d-flex"
                data-id="17e1424"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div class="">
                  <div class="out-line-btn-large ">
                    <a
                      class="btn btn-outline-primary linkButton"
                      href="https://exeed-uae.com/exeed-txl/"
                    >
                      <span class="">
                        <span class="elementor-button-text">
                          DOWNLOAD THE MANUAL
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-4 col-sm-12"
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
                    class=""
                    alt=""
                  />
                </div>
              </div>
              <div
                class="pt-4 justify-content-center d-flex"
                data-id="8ec8e12"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div class="">
                  <div class="out-line-btn-large ">
                    <a
                      class="btn btn-outline-primary linkButton"
                      href="https://exeed-uae.com/exeed-txl/"
                    >
                      <span class="">
                        <span class="elementor-button-text">
                          DOWNLOAD THE MANUAL
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-4 col-sm-12"
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
                    class=""
                    alt=""
                  />
                </div>
              </div>
              <div
                class="pt-4 justify-content-center d-flex"
                data-id="48e2246"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div class="">
                  <div class="out-line-btn-large ">
                    <a
                      class="btn btn-outline-primary linkButton"
                      href="https://exeed-uae.com/exeed-txl/"
                    >
                      <span class="">
                        <span class="elementor-button-text">
                          DOWNLOAD THE MANUAL
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
