import React from "react";
import "../../../common/styles/headerStyles.css";
import "../../../common/styles/commonStyle.css";

export const Section4 = () => {
  return (
    <>
      <section class="section-black row">
        <div class="col-md-12 d-flex mt-5">
          <div class="col-md-10 w-100 d-flex justify-content-center flex-column mt-5">
            <div class="row d-flex justify-content-center align-items-start aboutus-section4">
              <div
                class="col-md-10 col-sm-10 col-10 abtus-section4-flex d-flex
                justify-content-center video-container"
              >
                <video controls>
                  <source
                    src="https://exeed-uae.com/wp-content/uploads/2023/07/80c3d609-8f12-49dd-a8ba-a900002424f4.mp4"
                    class="videoabout"
                    type="video/mp4"
                  ></source>
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
