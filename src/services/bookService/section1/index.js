import React from "react";

export const Section1 = () => {
  return (
    <>
      <section
        class="elementor-section section-spacing"
        data-id="83e2e07"
        data-element_type="section"
      >
        <div class="">
          <div class="" data-id="f2dc371" data-element_type="column">
            <section
              class="pb-5 pt-5"
              data-id="80b2f29"
              data-element_type="section"
            >
              <div class="container-fluid">
                <div class="row d-flex">
                  <div class="col-md-5">
                    <div class="">
                      <div class="">
                        <h1 class="title-orange">{"BOOK A SERVICE"}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div
            class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-13955ed"
            data-id="13955ed"
            data-element_type="column"
          >
            <div class="elementor-widget-wrap"></div>
          </div>
        </div>
      </section>
      <section
        class="elementor-section section-spacing pt-3 pb-5"
        data-id="83e2e07"
        data-element_type="section"
      >
        <div class="container-fluid">
          <div class="row d-flex section-spacing">
            <form class="section-spacing" id="needs-validation" novalidate>
              <div class="container-fluid form-background section-spacing pt-5 pb-5">
                <div class="row pt-3 pb-5">
                  <div class="col-lg-12 col-sm-12 col-12">
                    <div class="form-group pb-3 px-2">
                      <label class="text-inverse" for="select-menu">
                        Title
                      </label>
                      <select
                        class="custom-select d-block form-control"
                        id="image"
                        required
                      >
                        <option value="">SELECT TITLE</option>
                        <option value="1">Mr</option>
                        <option value="2">Ms</option>
                        <option value="3">Mrs</option>
                      </select>
                      <div class="invalid-feedback">
                        Please selected any option.
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-12 col-12">
                    <div class="form-group pb-3 px-2">
                      <label class="text-inverse" for="validationCustom01">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationCustom01"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-12 col-12">
                    <div class="form-group  pb-3 px-2">
                      <label class="text-inverse" for="validationCustom02">
                        Phone (05xxxxxxxx)
                      </label>
                      <input
                        maxLength={10}
                        class="form-control"
                        id="validationCustom02"
                        type="tel"
                        pattern="^0\d{9}$"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-sm-12 col-12">
                    <div class="form-group pb-3 px-2">
                      <label class="text-inverse" for="inputEmail4">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        required
                      />
                      <div class="invalid-feedback">
                        Please provide a valid Email.
                      </div>
                    </div>
                  </div>

                  {/* <div class="col-lg-6 col-sm-12 col-12">
                    <div class="form-group pb-3 px-2">
                      <label class="text-inverse" for="validationCustom03">
                        Car Model
                      </label>
                      <input
                        value="EXEED VX"
                        type="text"
                        class="form-control"
                        id="validationCustom03"
                        required
                        disabled
                      />
                      <div class="invalid-feedback">EXEED VX</div>
                    </div>
                  </div> */}
                  <div class="col-lg-6 col-sm-12 col-12">
                    <div class="form-group pb-3 px-2">
                      <label class="text-inverse" for="select-menu">
                        Location
                      </label>
                      <select
                        class="custom-select d-block form-control"
                        id="image"
                        required
                      >
                        <option value="1">DUBAI</option>
                        <option value="2">ABU DHABI</option>
                      </select>
                      <div class="invalid-feedback">
                        Please selected any option.
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-12 col-12">
                    <div class="form-group pb-3 px-2">
                      <label class="text-inverse" for="inputEmail4">
                        Preferred Appointment Date
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        required
                      />
                      <div class="invalid-feedback">
                        Please provide a valid Email.
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-12 col-12">
                    <div class="form-group pb-3 px-2">
                      <label class="text-inverse" for="inputEmail4">
                        Vechile Registration Number
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
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
                        Vechile Model
                      </label>
                      <select
                        class="custom-select d-block form-control"
                        id="image"
                        required
                      >
                        <option value="1">EXEED TXL</option>
                        <option value="2">EXEED VX</option>
                        <option value="3">EXEED LX</option>
                        <option value="4">EXEED RX</option>
                      </select>
                      <div class="invalid-feedback">
                        Please selected any option.
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-12 col-12">
                    <div class="form-group pb-3 px-2">
                      <label class="text-inverse" for="inputEmail4">
                        Vehicle Mileage
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        required
                      />
                      <div class="invalid-feedback">
                        Please provide a valid Email.
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
      </section>
    </>
  );
};
