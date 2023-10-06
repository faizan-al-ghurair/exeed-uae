import React from "react";

export const Section6 = () => {
  return (
    <>
      <section
        class="dynamic-tabs"
        data-id="d27ecd7"
        data-element_type="section"
      >
        <form class="section-spacing" id="needs-validation" novalidate>
          <div class="container-fluid form-background section-spacing pt-5 pb-5">
            <div class="row pt-3 pb-5">
              <div class="col-lg-6 col-sm-12 col-12">
                <div class="form-group pb-3 px-2">
                  <label class="text-inverse" for="validationCustom01">
                    First Name
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
                  <label class="text-inverse " for="validationCustom02">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
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

              <div class="col-lg-6 col-sm-12 col-12">
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
                  <textarea class="form-control" rows="4" required></textarea>
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
                    I accept <a href='/terms-and-conditions' class='terms-and-conditions'>terms and conditions</a>
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
                    <span class="p-3">SUBMIT
                    </span>
                  </button>
                </div>


              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
