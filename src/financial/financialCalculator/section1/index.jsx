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
                    class="row"
                    data-id="7bb0f6b"
                    data-element_type="widget"
                    data-widget_type="html.default"
                  >
                    <div class="col-lg-6 col-sm-12 col-12 px-1">
                      <label class="financialCalculator">Car</label>
                        <select id="carModel">
                          <option value="" id="defaultOption" disabled="" selected="">Car</option>
                          <option value="vx" id="vxOption">VX</option>
                          <option value="txl" id="txlOption">TXL</option>
                          <option value="lx" id="lxOption">LX</option>
                        </select>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-12 px-1">                     
                          
                      <div class="elementor-widget-container">
                          <label class="financialCalculator">Model</label>
                          <input type="text" id="model" disabled="" placeholder="Choose model"  class=""/>

                          <select id="modelVX" class="input-hide">
                            <option value="129999" selected="">2.0TGDI Luxury (2024)</option>
                            <option value="144999">2.0TGDI Flagship (2024)</option>
                            <option value="149999">2.0TGDI Blackgold (2024)</option>
                          </select>

                          <select id="modelTXL"  class="input-hide">
                            <option value="104999" selected="">1.6TGDI Comfort (2024)</option>
                            <option value="124999">2.0TGDI Luxury (2024)</option>
                            <option value="134999">2.0TGDI Flagship (2024)</option>
                          </select>

                          <select id="modelLX"  class="input-hide">
                            <option value="84999" selected="">1.5TCL Comfort (2024)</option>
                            <option value="89999">1.5TCL Luxury (2024)</option>
                            <option value="104999">1.6TGDI Flagship (2024)</option>
                          </select>		
                       </div>

                    </div>

                    <div class="col-lg-12 col-sm-12 col-12 pt-3 px-1">
                      <div class="form-group  pb-3 ">
                        <label class="text-inverse" for="userPhone">
                          Total Amount (AED)
                        </label>
                         <input type="text" id="total" disabled placeholder="Total Amount"/>
                      </div>
                    </div>

                    <div class="col-lg-6 col-sm-12 col-12">
                      <div class="form-group  pb-3 px-2">
                        <label class="text-inverse" for="userPhone">
                          Down Payment 20%
                        </label>
                        <input type="text" id="downPayment" disabled placeholder="Total Amount"/>
                      </div>
                    </div>

                    <div class="col-lg-6 col-sm-12 col-12">
                      <div class="form-group  pb-3 px-2">
                        <label class="text-inverse" for="userPhone">
                          Amount Finance 80%
                        </label>
                        <input type="text" id="amountFinance" disabled placeholder="Total Amount"/>
                      </div>
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
                      <select id="months">
                        <option value="12" selected="">12</option>
                        <option value="24">24</option>
                        <option value="36">36</option>
                        <option value="48">48</option>
                        <option value="60">60</option>
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
                        <div id="price"></div>
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
                        Monthy Instalment based on average banking rate terms
                        and conditions applies
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
