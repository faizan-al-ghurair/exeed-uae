import React from "react";
import $ from "jquery";

export const Section1 = () => {
  $(document).ready(function () {
    $("#carModel").on("change", function () {
      $(".finacialLease-InitialImageBox").hide();
      var img_path = $(this).find(":selected").attr("data-imagesrc");
      $("#finleaseImage").attr("src", img_path);
    });
  });


  window.onload = (event) => {  
        var vx = document.getElementById('vxx');
        var txl = document.getElementById('txlx');
        var lx = document.getElementById('lxx');
        
        const carModel = document.getElementById("carModel");
        var dO = document.getElementById('defaultOption');
        var vxO = document.getElementById('vxOption');
        var lxO = document.getElementById('lxOption');
        var txlO = document.getElementById('txlOption');
        
        var activeCar;
        
        
        var vxM = document.getElementById('modelVX');
        var txlM = document.getElementById('modelTXL');
        var lxM = document.getElementById('modelLX');
        
        var months = document.getElementById('months');
        var amountFinance;
        var monthsAmount = 12;
        
        
        function vxf() {        
          vx.classList.add('selectedOption');
          lx.style.opacity = 0;
          txl.style.opacity = 0;
        
          dO.removeAttribute('selected');
          vxO.setAttribute('selected', 'selected');
          activeCar = 0;
          modelAppear();        
        }
        
        function txlf() {        
          txl.classList.add('selectedOption');
          lx.style.opacity = 0;
          vx.style.opacity = 0;
          dO.removeAttribute('selected');
          txlO.setAttribute('selected', 'selected');
        
          activeCar = 1;
          modelAppear();        
        }
        
        function lxf() {        
          lx.classList.add('selectedOption');
          vx.style.opacity = 0;
          txl.style.opacity = 0;
          dO.removeAttribute('selected');
          lxO.setAttribute('selected', 'selected');
          activeCar = 2;
          modelAppear();
        }      
        
               
        vx.addEventListener('click', () => {
          vxf();
        });              
        
        txl.addEventListener('click', () => {
          txlf();
        });
        
        lx.addEventListener('click', () => {
          lxf();
        });
        
        vxM.addEventListener("change", totalAmount);
        txlM.addEventListener("change", totalAmount);
        lxM.addEventListener("change", totalAmount);
        months.addEventListener("change", amountToPay);
                     
        
        carModel.addEventListener("change", function() {
          const selectedOptionValue = carModel.value;
          const selectedOptionText = carModel.options[carModel.selectedIndex].text;
        
          console.log("Selected Value:", selectedOptionValue);
          console.log("Selected Text:", selectedOptionText);
        
          if (selectedOptionText == "VX") {
            vx.style.opacity = 1;
            vxf();
          } else if (selectedOptionText == "TXL") {
            txl.style.opacity = 1;
            txlf();
          } else if (selectedOptionText == "LX") {
            lx.style.opacity = 1;
            lxf();
          }       
        
        });
        
      
        function modelAppear() {
        
          var model = document.getElementById('model');
        
        
          model.style.display = "none";
          vxM.style.display = "none";
          txlM.style.display = "none";
          lxM.style.display = "none";
        
          if (activeCar == 0) {
            vxM.style.display = "block";
          } else if (activeCar == 1) {
            txlM.style.display = "block";
        
          } else if (activeCar == 2) {
            lxM.style.display = "block";
          }
        
          totalAmount();
        
        }
        
        
        
        
        
        function totalAmount() {        
          var totalPlaceholder = document.getElementById('total');
          var downPaymentPlaceholder = document.getElementById('downPayment');
          var amountFinancePlaceholder = document.getElementById('amountFinance');
        
          var selectedCarTotalAmount = 0;
        
        
          if (activeCar == 0) {
            selectedCarTotalAmount = parseInt(vxM.value);
          } else if (activeCar == 1) {
            selectedCarTotalAmount = parseInt(txlM.value);
        
          } else if (activeCar == 2) {
            selectedCarTotalAmount = parseInt(lxM.value);
          }
        
        
          totalPlaceholder.setAttribute("placeholder", selectedCarTotalAmount);
          var downPayment = 0;
          downPayment = Math.round(selectedCarTotalAmount * .2);
        
          downPaymentPlaceholder.setAttribute("placeholder", downPayment);
        
          amountFinance = 0;
          amountFinance = Math.round(selectedCarTotalAmount * .8);
        
          amountFinancePlaceholder.setAttribute("placeholder", amountFinance);
        
        
          return (selectedCarTotalAmount);        
        }
        
        function amountToPay() {        
          monthsAmount = parseInt(months.value);      
        }       
        
        var price = document.getElementById('price');
        var paymentValue;   
        var valueC;     
        
        function calculateAmount(valueA, valueB) {         
          if (valueB <= 12) {
            valueC = 0.035;
          } else if (valueB > 12 && valueB <= 24) {
            valueC = 0.07;
          } else if (valueB > 24 && valueB <= 36) {
            valueC = 0.105;
          } else if (valueB > 36 && valueB <= 48) {
            valueC = 0.14;
          } else if (valueB > 48 && valueB <= 60) {
            valueC = 0.175;
          }
        
          var paymentValue1 = ((valueA / valueB) + ((valueA / valueB) * valueC));   

          return (Math.round(paymentValue1));
        }
        

        $("#calcu").click(function(){
          price.innerHTML = calculateAmount(amountFinance, monthsAmount);    
        });
        
        paymentValue = calculateAmount(amountFinance, monthsAmount);        
        console.log(paymentValue);

  };

  return (
    <>
      <section class="financial-LeaseRate">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="finacial-calc-Left">
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
                          <option value="vx" id="vxOption" data-imagesrc="https://exeed-uae.com/wp-content/uploads/2023/07/vx-car-homepage-slider-1-1.png">VX</option>
                          <option value="txl" id="txlOption" data-imagesrc="https://exeed-uae.com/wp-content/uploads/2023/07/TXL-Reality-images-11-2.jpg">TXL</option>
                          <option value="lx" id="lxOption" data-imagesrc="https://exeed-uae.com/wp-content/uploads/2023/07/lx-care-homepage-slider-1-1.png">LX</option>
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
                      <div class="form-group  pb-3">
                        <label class="text-inverse" for="userPhone">
                          Down Payment 20%
                        </label>
                        <input type="text" id="downPayment" disabled placeholder="Total Amount"/>
                      </div>
                    </div>

                    <div class="col-lg-6 col-sm-12 col-12">
                      <div class="form-group  pb-3 px-2 pr-0">
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
                        <button  id="calcu">CALCULATE</button>
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
                    <img src="https://exeed-uae.com/wp-content/uploads/2023/07/vx-car-homepage-slider-1-1.png" alt=""></img>
                  </div>
                  <div class="finacialLease__Img-wrapper">
                    <img src="https://exeed-uae.com/wp-content/uploads/2023/07/TXL-Reality-images-11-2.jpg" alt=""></img>
                  </div>
                  <div class="finacialLease__Img-wrapper">
                    <img src="https://exeed-uae.com/wp-content/uploads/2023/07/lx-care-homepage-slider-1-1.png" alt=""></img>
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
