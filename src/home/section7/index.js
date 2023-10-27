import React from "react";
import "./styles.css";
import $ from "jquery";

export const CookieSection = () => {
   
    $(document).ready(function($) {    
      $(".dialog-close-button").click(function(){
          $('.exceed-cookiepopup').hide();
          localStorage.cookieaccept = "accepted"; 
      });

      $(".exceed-acceptcookie").click(function(){
        $('.exceed-cookiepopup').hide();
        localStorage.cookieaccept = "accepted"; 
      });

      $(".exceed-rejectcookie").click(function(){
        $('.exceed-cookiepopup').hide();
        localStorage.cookieaccept = "accepted"; 
      });
      
      if(localStorage.getItem("cookieaccept") === "accepted") {
        $('.exceed-cookiepopup').hide();
      }     
    });
    
  return (
    <>
      <section class="cookie-container">        
          <div class="exceed-cookiepopup dialog-widget dialog-lightbox-widget dialog-type-buttons dialog-type-lightbox elementor-popup-modal" id="elementor-popup-modal-3287"  role="document" tabindex="0"  >
            <div class="dialog-widget-content dialog-lightbox-widget-content animated">
              <div class="dialog-header dialog-lightbox-header"></div>
              <div class="dialog-message dialog-lightbox-message">
                <div data-elementor-type="popup" data-elementor-id="3287" class="elementor elementor-3287 elementor-location-popup" data-elementor-settings="{&quot;prevent_close_on_background_click&quot;:&quot;yes&quot;,&quot;a11y_navigation&quot;:&quot;yes&quot;,&quot;triggers&quot;:{&quot;page_load_delay&quot;:2,&quot;page_load&quot;:&quot;yes&quot;,&quot;click&quot;:&quot;yes&quot;,&quot;click_times&quot;:1},&quot;timing&quot;:{&quot;times_times&quot;:1,&quot;times_period&quot;:&quot;day&quot;,&quot;times&quot;:&quot;yes&quot;}}" >
                  <section class="elementor-section elementor-top-section elementor-element elementor-element-b1fc508 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="b1fc508" data-element_type="section">
                    <div class="elementor-container elementor-column-gap-default">
                      <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-aa8aa48" data-id="aa8aa48" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                          <div class="elementor-element elementor-element-c40e8c5 elementor-widget elementor-widget-text-editor" data-id="c40e8c5" data-element_type="widget" data-widget_type="text-editor.default">
                            <div class="elementor-widget-container">
                              <p>I am giving my explicit consent to process my personal data in accordance with the <a href="https://exeed-uae.com/privacy-policy-2/">privacy policy</a></p>
                              <p>I hereby consent to receive marketing communications from AG Auto Trading about its products and services via email, SMS, phone call, direct mail, and social media platforms in accordance with our <a href="https://exeed-uae.com/privacy-policy-2/">privacy policy</a>. I understand I can unsubscribe from any mailings at any time by following the instructions in the messages I receive from AG Auto Trading</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f1cfe43" data-id="f1cfe43" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                          <div class="elementor-element elementor-element-c1aaaac elementor-align-center elementor-widget__width-initial close-popup elementor-widget elementor-widget-button" data-id="c1aaaac" data-element_type="widget" id="acceptButton" data-widget_type="button.default">
                            <div class="elementor-widget-container">
                              <div class="elementor-button-wrapper">
                                <a class="exceed-acceptcookie elementor-button elementor-button-link elementor-size-sm" role="button"> <span class="elementor-button-content-wrapper">
                      <span class="elementor-button-text" >ACCEPT COOKIES</span> </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-element elementor-element-eed1f09 elementor-align-center elementor-widget__width-initial close-popup elementor-widget elementor-widget-button" data-id="eed1f09" data-element_type="widget" id="rejectButton" data-widget_type="button.default">
                            <div class="elementor-widget-container">
                              <div class="elementor-button-wrapper">
                                <a class="exceed-rejectcookie elementor-button elementor-button-link elementor-size-sm" role="button"> <span class="elementor-button-content-wrapper">
                      <span class="elementor-button-text">REJECT COOKIES</span> </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-element elementor-element-e71e3e6 elementor-widget elementor-widget-html" data-id="e71e3e6" data-element_type="widget" data-widget_type="html.default">
                            <div class="elementor-widget-container">
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div class="dialog-buttons-wrapper dialog-lightbox-buttons-wrapper"></div>
                <a role="button" tabindex="0" aria-label="Close"  class="dialog-close-button dialog-lightbox-close-button">                    
                  <i class="fa fa-close"></i>
                </a>
              </div>
          </div>
            
      </section>
    </>
  );
};
