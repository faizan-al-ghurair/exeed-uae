import React from "react";
import $ from "jquery";

export const Section1 = () => {
  $(document).ready(function () {
    $("#financial-LeaseRate-carModel").on("change", function () {
      $(".finacialLease-InitialImageBox").hide();
      var img_path = $(this).find(":selected").attr("data-imagesrc");
      $("#finleaseImage").attr("src", img_path);
    });
  });

  // Function for calculating EMI per Month fro Lease
  window.onload = (event) => {
    //Calculation for EMI
    var vxCTA = document.getElementById("vxx");
    var txlCTA = document.getElementById("txlx");
    var lxCTA = document.getElementById("lxx");
    // var carValues = [LXC, LXL, LXF, TXLC, TXLL, TXLF, VXL, VXF, VXB];
    var carModel = document.getElementById("financial-LeaseRate-carModel");
    var selectedCar;
    var month = document.getElementById("financial-LeaseRate-months");
    var selectedMonth = 12;

    $("#carSelection").hide();

    carModel.addEventListener("change", () => {
      selectedCar = carModel.value;

      if (selectedCar.substring(0, 2) == "LX") {
        lxCTA.classList.add("selectedOption");
        txlCTA.style.opacity = 0;
        txlCTA.classList.remove("selectedOption");
        vxCTA.style.opacity = 0;
        vxCTA.classList.remove("selectedOption");
      }

      if (selectedCar.substring(0, 2) == "TX") {
        lxCTA.style.opacity = 0;
        lxCTA.classList.remove("selectedOption");
        txlCTA.classList.add("selectedOption");
        vxCTA.style.opacity = 0;
        vxCTA.classList.remove("selectedOption");
      }

      if (selectedCar.substring(0, 2) == "VX") {
        lxCTA.style.opacity = 0;
        lxCTA.classList.remove("selectedOption");
        txlCTA.style.opacity = 0;
        txlCTA.classList.remove("selectedOption");
        vxCTA.classList.add("selectedOption");
      }
    });

    month.addEventListener("change", () => {
      selectedMonth = parseInt(month.value);
    });

    const suvModels = {
      LXC: {
        48: 2260,
        36: 2499,
        24: 2949,
        12: 3399,
      },

      LXL: {
        48: 2389,
        36: 2656,
        24: 3122,
        12: 3609,
      },

      LXF: {
        48: 2699,
        36: 2999,
        24: 3536,
        12: 4099,
      },

      TXLC: {
        48: 2725,
        36: 3019,
        24: 3549,
        12: 4125,
      },

      TXLL: {
        48: 3113,
        36: 3464,
        24: 4099,
        12: 4767,
      },

      TXLF: {
        48: 3299,
        36: 3686,
        24: 4370,
        12: 5080,
      },

      VXL: {
        48: 3327,
        36: 3715,
        24: 4404,
        12: 5125,
      },

      VXF: {
        48: 3515,
        36: 3927,
        24: 4668,
        12: 5434,
      },

      VXB: {
        48: 3655,
        36: 4086,
        24: 4868,
        12: 5665,
      },
    };

    const errorLog = document.getElementById("carSelection");

    function calculatePrice() {
      if (carModel.value == "no") {
        errorLog.style.display = "block";
      } else {
        errorLog.style.display = "none";
      }

      if (carModel.value != "no") {
        var price = suvModels[selectedCar][selectedMonth];
      }

      const resultElement = document.getElementById("finacialLease-price");

      resultElement.innerHTML = price;
    }
    document.getElementById("LeaseRate-calcu").onclick = function () {
      calculatePrice();
    };
  };

  return (
    <>
      <section class="financial-LeaseRate">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="finacialLease-Left">
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="elementor-element elementor-element-7bb0f6b elementor-widget__width-initial elementor-widget elementor-widget-html"
                    data-id="7bb0f6b"
                    data-element_type="widget"
                    data-widget_type="html.default"
                  >
                    <div class="elementor-widget-container">
                      <label class="financialCalculator">Car</label>

                      <select id="financial-LeaseRate-carModel">
                        <option value="no" id="defaultOption">
                          Car
                        </option>
                        <option
                          value="LXC"
                          data-imagesrc="https://exeed-uae.com/wp-content/uploads/2023/07/lx-care-homepage-slider-1-1.png"
                        >
                          {" "}
                          Exeed LX 1.5T Comfort 5-Str SUV 2024YM{" "}
                        </option>
                        <option
                          value="LXL"
                          data-imagesrc="https://exeed-uae.com/wp-content/uploads/2023/07/lx-care-homepage-slider-1-1.png"
                        >
                          {" "}
                          Exeed LX 1.5T Luxury 5-Str SUV 2024YM{" "}
                        </option>
                        <option
                          value="LXF"
                          data-imagesrc="https://exeed-uae.com/wp-content/uploads/2023/07/lx-care-homepage-slider-1-1.png"
                        >
                          {" "}
                          Exeed LX 1.6T Flagship 5-Str AWD SUV 2024YM{" "}
                        </option>
                        <option
                          value="TXLC"
                          data-imagesrc="https://exeed-uae.com/wp-content/uploads/2023/07/TXL-Reality-images-11-2.jpg"
                        >
                          {" "}
                          Exeed TXL 1.6T Comfort 5-Str SUV 2024YM{" "}
                        </option>
                        <option
                          value="TXLL"
                          data-imagesrc="https://exeed-uae.com/wp-content/uploads/2023/07/TXL-Reality-images-11-2.jpg"
                        >
                          {" "}
                          Exeed TXL 2.0T Luxury 5-Str SUV 2024YM{" "}
                        </option>
                        <option
                          value="TXLF"
                          data-imagesrc="https://exeed-uae.com/wp-content/uploads/2023/07/TXL-Reality-images-11-2.jpg"
                        >
                          {" "}
                          Exeed TXL 2.0T Flagship 5-Str AWD SUV 2024YM{" "}
                        </option>
                        <option
                          value="VXL"
                          data-imagesrc="https://exeed-uae.com/wp-content/uploads/2023/07/vx-car-homepage-slider-1-1.png"
                        >
                          {" "}
                          Exeed VX 2.0L Luxury 7-Str AWD SUV 2024YM{" "}
                        </option>
                        <option
                          value="VXF"
                          data-imagesrc="https://exeed-uae.com/wp-content/uploads/2023/07/vx-car-homepage-slider-1-1.png"
                        >
                          {" "}
                          Exeed VX 2.0L Flagship 7-Str AWD SUV 2024 YM
                        </option>
                        <option
                          value="VXB"
                          data-imagesrc="https://exeed-uae.com/wp-content/uploads/2023/07/vx-car-homepage-slider-1-1.png"
                        >
                          {" "}
                          Exeed VX 2.0L Black Gold 7-Str AWD SUV 2024YM
                        </option>
                      </select>
                    </div>
                  </div>
                  <div
                    class="elementor-element elementor-element-5a34e8d4 elementor-widget__width-initial elementor-widget elementor-widget-html"
                    data-id="5a34e8d4"
                    data-element_type="widget"
                    data-widget_type="html.default"
                  >
                    <div class="elementor-widget-container">
                      <label id="carSelection">Please Select Car</label>
                    </div>
                  </div>
                  <div
                    class="elementor-element elementor-element-6903c9a2 elementor-widget elementor-widget-html"
                    data-id="6903c9a2"
                    data-element_type="widget"
                    data-widget_type="html.default"
                  >
                    <div class="elementor-widget-container">
                      <label class="financialCalculator">Month</label>
                      <select id="financial-LeaseRate-months">
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="36">36</option>
                        <option value="48">48</option>
                      </select>
                    </div>
                  </div>

                  <div class="btn-area">
                    <div class="calcbutton-parent">
                      <div class="elementor-widget-container">
                        <button id="LeaseRate-calcu">CALCULATE</button>
                      </div>
                    </div>
                    <div class="calc-price-parent">
                      <div class="elementor-widget-container">
                        <div id="finacialLease-price"></div>{" "}
                      </div>
                    </div>
                  </div>

                  <div
                    class="financial-LeaseRate-rateInfo"
                    data-id="7062f69"
                    data-element_type="widget"
                    data-widget_type="html.default"
                  >
                    <div class="elementor-widget-container">
                      {" "}
                      <small>
                        The rates are based on 40,000 kms mileage per annum and
                        T&amp;Cs applies.
                      </small>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div class="finacialLease-Right">
                <div class="finacialLease-InitialImageBox">
                  <div class="finacialLease__Img-wrapper">
                    <img src="https://exeed-uae.com/wp-content/uploads/2023/07/vx-car-homepage-slider-1-1.png"></img>
                  </div>
                  <div class="finacialLease__Img-wrapper">
                    <img src="https://exeed-uae.com/wp-content/uploads/2023/07/TXL-Reality-images-11-2.jpg"></img>
                  </div>
                  <div class="finacialLease__Img-wrapper">
                    <img src="https://exeed-uae.com/wp-content/uploads/2023/07/lx-care-homepage-slider-1-1.png"></img>
                  </div>
                </div>

                <img id="finleaseImage" alt="" src="" />

                <div id="vxx"></div>
                <div id="txlx"></div>
                <div id="lxx"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
