import React from "react";
import "../../../common/styles/headerStyles.css";
import "../../../common/styles/commonStyle.css";
import { Header } from "../../../home/header";
import { Footer } from "../../../home/section6";
import newsImage from "../../../images/newsimage.png";
import banner from "../../../images/banner.webp";
import banner2 from "../../../images/photo-5.png";
import $ from "jquery";

// khadija
export const NewsHome = () => {
  const Cards = ({ img }) => {
    return (
      <div class="card-cont">
        <div class="mb-2 card-img">
          <img
            decoding="async"
            loading="lazy"
            src={img}
            class="attachment-full size-full wp-image-3094"
          />{" "}
        </div>
        <div class="text-inverse text-disappear">
          <p class="ptest">
            Innovative showcase to two additional pop-up events
          </p>{" "}
        </div>

        <div class="out-line-btn-large ">
          <a
            href="/newsdetails"
            type="submit"
            class="btn btn-outline-primary linkButton"
          >
            <span class="">READ MORE</span>
          </a>
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
