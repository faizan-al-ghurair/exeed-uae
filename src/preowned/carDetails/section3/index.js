import React from "react";
import "../../../common/styles/headerStyles.css";
import "../../../common/styles/commonStyle.css";
import "../../../common/styles/preownedStyles.css";

export const Section3 = () => {
  return (
    <>
      <section class="section-black row aboutus-header">
        <div class="col-md-12 d-flex py-5">
          <div class="col-md-12 w-100 d-flex justify-content-center flex-column">
            <div class="aboutus-title row d-flex flex-column align-items-center ">
              <div class="car-details-container-styles col-md-10 col-sm-10 col-10 bg-color-black">
                <div class="car-details-sec1-header d-flex align-items-center">
                  <h1 class="title-orange">{"ENQUIRE NOW"}</h1>
                </div>

                <div class="car-details-form form-background">
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

                    <div class="col-lg-12 col-sm-12 col-12">
                      <div class="form-group pb-3 px-2">
                        <label class="text-inverse" for="selectCarShowroom">
                          Preferred Showroom
                        </label>
                        <select
                          class="custom-select d-block form-control"
                          id="selectCarShowroom"
                          required
                        >
                          <option value="PRESS INQUIRY">PRESS INQUIRY</option>
                          <option value="DUBAI SHOWROOM">DUBAI SHOWROOM</option>
                          <option value="ABUDHABI SHOWROOM">
                            ABUDHABI SHOWROOM
                          </option>
                        </select>
                        <div class="invalid-feedback">
                          Please selected any option.
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-12">
                      <div class="form-group pb-3 px-2">
                        <label
                          class="text-inverse"
                          for="termAndConditionsAgree"
                        >
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="termAndConditionsAgree"
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
                          <span class="">SUBMIT</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
