import React from "react";
import "../../common/styles/headerStyles.css";
import "../../common/styles/commonStyle.css";
import { Header } from "../../home/header";
import { Footer } from "../../home/section6";

export const Contact = () => {
  // code working but scroll back to first image

  return (
    <>
      <Header></Header>
      <section class="section-black row">
        <div class="col-md-12 col-sm-12 col-12">
          <div class="contact-sec1-banner"></div>
        </div>
        <div class="col-md-12 d-flex py-5">
          <div class="col-md-10 w-100 d-flex justify-content-center flex-column ">
            <div class="row d-flex justify-content-center contact-section2">
              <div class="col-md-3 col-sm-10 col-10 contact-section-flex">
                <div class="title-white-wrapper">
                  <h2 class="title-white">{"CONTACT US"}</h2>
                  <h1 class="title-orange">
                    {"Register With Exeed Al Ghurair"}
                  </h1>
                </div>
              </div>

              <div class="col-md-7 col-sm-10 col-10 d-flex justify-content-evenly contact-section-flex">
                <form class="section-spacing" id="needs-validation" novalidate>
                  <div class="container-fluid form-background section-spacing pt-5 pb-5">
                    <div class="row pt-3 pb-5">
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

                      <div class="col-lg-6 col-sm-12 col-12">
                        <div class="form-group pb-3 px-2">
                          <label class="text-inverse" for="select-menu">
                            Car Model
                          </label>
                          <select
                            class="custom-select d-block form-control"
                            id="carModel-contact"
                            required
                          >
                            <option value="1">EXEED TXL</option>
                            <option value="2">EXEED VX</option>
                            <option value="3">EXEED LX</option>
                          </select>
                          <div class="invalid-feedback">
                            Please selected any option.
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-12 col-12">
                        <div class="form-group pb-3 px-2">
                          <label class="text-inverse" for="select-menu">
                            Inquiry Type
                          </label>
                          <select
                            class="custom-select d-block form-control"
                            id="image"
                            required
                          >
                            <option value="1">PRESS INQUIRY</option>
                            <option value="2">INFLUENCER INQUIRY</option>
                            <option value="3">OTHER INQUIRY</option>
                          </select>
                          <div class="invalid-feedback">
                            Please selected any option.
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-12 col-sm-12 col-12">
                        <div class="form-group pb-3 px-2">
                          <label class="text-inverse" for="select-menu">
                            Leave A Message
                          </label>
                          <textarea
                            class="form-control"
                            rows="4"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-6 col-12">
                        <div class="form-group pb-3 px-2">
                          <label class="text-inverse">
                            <input
                              type="checkbox"
                              class="custom-control-input"
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
      <Footer></Footer>
    </>
  );
};
