import React from "react";
import "../../../common/styles/headerStyles.css";
import "../../../common/styles/commonStyle.css";
import vidThumbOverlay from "../../../Video-play.jpg";
import $ from "jquery";

export const Section4 = () => {
  $(document).ready(function () {
    var video = $(".play-button")[0]; // Get the DOM element of the video

    $(video).click(function () {
      // Show the controls
      video.play = true;
      video.poster = false;
      video.controls = true;
    });
  });
  return (
    <>
      <section class="section-black row">
        <div class="col-md-12 d-flex my-5">
          <div class="col-md-10 w-100 d-flex justify-content-center flex-column mt-5">
            <div class="row d-flex justify-content-center align-items-start aboutus-section4">
              <div class="col-md-10 col-sm-10 col-10 d-flex flex-column justify-content-center aboutus-sec4.video-container">
                <video poster={vidThumbOverlay} class="play-button">
                  <source
                    src="https://exeed-uae.com/wp-content/uploads/2023/07/80c3d609-8f12-49dd-a8ba-a900002424f4.mp4"
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
