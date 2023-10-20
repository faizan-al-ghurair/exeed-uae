import React from "react";
import "./styles.css";

const CardsListItem = () => {
  return (
    <div
      class="col-md-4 col-sm-12 justify-content-center section-spacing bg-card-black pt-3"
      data-id="f5048f5"
      data-element_type="column"
    >
      <div class="">
        <div
          class=""
          data-id="36f0d74"
          data-element_type="widget"
          data-widget_type="text-editor.default"
        >
          <div class="">
            <p class="white-banner-text-value-card">
              Al Ghurair Investment and EXEED collaborate for a UAE premiere.
            </p>
          </div>
        </div>
        <div
          class=""
          data-id="306087e"
          data-element_type="widget"
          data-widget_type="image.default"
        >
          <div class="w-100">
            <img
              decoding="async"
              loading="lazy"
              src="https://exeed-uae.com/wp-content/uploads/2023/09/EXSSED2.webp"
              class="attachment-full"
              alt=""
            />
          </div>
        </div>
        <div
          class=""
          data-id="b59eb16"
          data-element_type="widget"
          data-widget_type="spacer.default"
        >
          <div class="">
            <div class="">
              <div class=""></div>
            </div>
          </div>
        </div>
        <div
          class="pt-4"
          data-id="fc792bc"
          data-element_type="widget"
          data-widget_type="button.default"
        >
          <div class="out-line-btn-large ">
            <a
              class="btn btn-outline-primary linkButton"
              href="https://exeed-uae.com/exeed-txl/"
            >
              <span class="">
                <span class="elementor-button-text">Read more</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Section5 = () => {
  return (
    <>
      <section
        class="elementor-section section-spacing position-relative pb-5"
        data-id="5277ec6"
        data-element_type="section"
      >
        <div class="row">
          <div class="col-md-12" data-id="100ae91" data-element_type="column">
            <div class="">
              <section class="" data-id="80b2f29" data-element_type="section">
                <div class="container-fluid">
                  <div class="row d-flex">
                    <div class="col-md-5 offset-md-1">
                      <div class="title-white-wrapper">
                        <h2 class="title-white">{"ABOUT US"}</h2>
                      </div>
                      <div class="">
                        <div class="">
                          <h1 class="title-orange">
                            {"Welcome to EXEED in UAE"}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 ml-auto d-flex align-items-end justify-content-end">
                      <div class="out-line-btn-large d-flex justify-content-end">
                        <a
                          class="btn btn-outline-primary linkButton"
                          href="/news-home"
                        >
                          <span class="">Discover more</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                class="container-fluid pt-5"
                data-id="649ee7e"
                data-element_type="section"
              >
                <div class="">
                  <div class="row justify-content-center">
                    <CardsListItem />
                    <CardsListItem />
                    <CardsListItem />
                  </div>
                </div>
              </section>
              <div
                class=""
                data-id="4d1b586"
                data-element_type="widget"
                data-widget_type="button.default"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
