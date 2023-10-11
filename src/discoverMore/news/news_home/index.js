import React from "react";
import "../../../common/styles/headerStyles.css";
import "../../../common/styles/commonStyle.css";
import { Header } from "../../../home/header";
import { Footer } from "../../../home/section6";
import newsImage from "../../../newsimage.png";
import banner from "../../../banner.webp";
import banner2 from "../../../photo-5.png";
import $ from "jquery";

export const NewsHome = () => {
  const Cards = ({ img }) => {
    return (
      <div
        class="bg-color-black p-4"
        data-id="c2856af"
        data-element_type="column"
      >
        <div class="">
          <div
            class=""
            data-id="01c9ab6"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div class="text-inverse">
              <p>Innovative showcase to two additional pop-up events</p>{" "}
            </div>
          </div>
          <div
            class=""
            data-id="9c6586b"
            data-element_type="widget"
            data-widget_type="image.default"
          >
            <div class="">
              <img
                decoding="async"
                loading="lazy"
                src={img}
                class="attachment-full size-full wp-image-3094"
              />{" "}
            </div>
          </div>
          <div
            class=""
            data-id="9986020"
            data-element_type="widget"
            data-widget_type="spacer.default"
          >
            <div class="">
              <div class="elementor-spacer">
                <div class=""></div>
              </div>
            </div>
          </div>
          <div class="" data-id="f7c2d9e" data-element_type="widget">
            <div class="pt-4">
              <div class="out-line-btn-large ">
                <a
                  href="/newsdetails"
                  type="submit"
                  class="btn btn-outline-primary linkButton"
                >
                  <span class="p-3">READ MORE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <Header></Header>
      <section class="section-black row news-details">
        <div class="col-md-12 d-flex pt-5">
          <div class="col-md-12 w-100 d-flex justify-content-center flex-column">
            <div class="row details-head d-flex flex-column align-items-center ">
              <div class="col-md-10 col-sm-12 col-10">
                <div class="title-white-wrapper">
                  <h2 class="title-white">{"ALL NEWS"}</h2>
                  <h1 class="title-orange">{"Latest happenings in EXEED"}</h1>
                </div>
              </div>

              <div class="col-md-10 col-sm-10 col-10">
                <div class="row pt-5">
                  <div class="col-lg-4 col-md-4 col-sm-12 col-12 px-3">
                    <Cards
                      img={
                        "https://exeed-uae.com/wp-content/uploads/2023/08/Ma-4.png"
                      }
                    />
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-12 px-3">
                    <Cards
                      img={
                        "https://exeed-uae.com/wp-content/uploads/2023/08/Ma-2.png"
                      }
                    />
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-12 px-3">
                    <Cards
                      img={
                        "https://exeed-uae.com/wp-content/uploads/2023/08/Ma-3.png"
                      }
                    />
                  </div>
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
