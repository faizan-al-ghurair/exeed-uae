import React from "react";
import $ from "jquery";
import img1 from "../../../photo-INTERIOR-21-1.png";
import img2 from "../../../photo-INTERIOR-22.png";
import img3 from "../../../photo-INTERIOR-23.png";
import img4 from "../../../photo-EXTERIOR-24.png";
import img5 from "../../../photo-EXTERIOR-25.png";
import img6 from "../../../photo-EXTERIOR-26.png";
import img7 from "../../../photo-PERFORMANCE-1.png";
import img8 from "../../../photo-PERFORMANCE-2.png";
import img9 from "../../../photo-PERFORMANCE-3.png";
import safety1 from "../../../photo-SAFETY-1.png";
import safety2 from "../../../photo-SAFETY-2.png";
import safety3 from "../../../photo-SAFETY-3.png";
import safety4 from "../../../photo-SAFETY-4.png";
import safety5 from "../../../photo-SAFETY-5.png";
import safety6 from "../../../photo-SAFETY-6.png";
import techno1 from "../../../photo-TECHNOLOGY-1.png";
import techno2 from "../../../photo-TECHNOLOGY-2.png";
import techno3 from "../../../photo-TECHNOLOGY-3.png";
import techno4 from "../../../photo-TECHNOLOGY-4.png";

export const Section5 = () => {
  $(document).ready(function () {
    const $carouselContainer = $(".carousel-container-modal");
    const $prevBtn = $carouselContainer.find(".prev");
    const $nextBtn = $carouselContainer.find(".next");
    const $carousels = $carouselContainer.find(".carousel-modal");

    let isAnimating = false;

    function updatePagination($carousel, currentIndex) {
      const totalSlides = $carousel.find("li").length;
      $carousel
        .find(".carousel-pagination")
        .text(`${currentIndex + 1}/${totalSlides}`);
    }

    function toggleSlides($carousel) {
      const totalSlides = $carousel.find("li").length;
      if (totalSlides < 2) {
        $prevBtn.hide();
        $nextBtn.hide();
      } else {
        $prevBtn.show();
        $nextBtn.show();
      }
    }

    function updateCarousel($carousel, currentIndex) {
      const slideWidth = $carousel.find("li").width();
      const translateX = -currentIndex * slideWidth;
      $carousel.css("transform", `translateX(${translateX}px)`);
    }

    function initializeCarousel($carousel) {
      toggleSlides($carousel);
      updateCarousel($carousel, 0);
      updatePagination($carousel, 0);
      $(".modal-tag-btn:first").css("color", "#c28a6c");
    }

    $carousels.unbind().each(function () {
      initializeCarousel($(this));
    });

    $(".modal-tag-btn")
      .unbind()
      .on("click", function () {
        $(".modal-tag-btn").css("color", "white");
        $(this).css("color", "#c28a6c");
        const targetId = $(this).data("target");
        const $targetCarousel = $carouselContainer.find(targetId);

        if ($targetCarousel.length > 0) {
          $carousels.addClass("tag-hidden");
          $targetCarousel.removeClass("tag-hidden");
          updateCarousel($targetCarousel, 0);
          updatePagination($targetCarousel, 0);
        }
      });

    $prevBtn.unbind().on("click", function () {
      if (!isAnimating) {
        isAnimating = true;
        const $currentCarousel = $carouselContainer.find(
          ".carousel-modal:not(.tag-hidden)"
        );
        const currentIndex = $currentCarousel.data("current-index") || 0;
        $currentCarousel.css("transition", "transform 0.5s ease-in-out");
        const updatedIndex =
          (currentIndex - 1 + $currentCarousel.find("li").length) %
          $currentCarousel.find("li").length;
        updateCarousel($currentCarousel, updatedIndex);
        $currentCarousel.data("current-index", updatedIndex);
        updatePagination($currentCarousel, updatedIndex);
      }
    });

    $nextBtn.unbind().on("click", function () {
      if (!isAnimating) {
        isAnimating = true;
        const $currentCarousel = $carouselContainer.find(
          ".carousel-modal:not(.tag-hidden)"
        );
        const currentIndex = $currentCarousel.data("current-index") || 0;
        $currentCarousel.css("transition", "transform 0.5s ease-in-out");
        const updatedIndex =
          (currentIndex + 1) % $currentCarousel.find("li").length;
        updateCarousel($currentCarousel, updatedIndex);
        $currentCarousel.data("current-index", updatedIndex);
        updatePagination($currentCarousel, updatedIndex);
      }
    });

    $carouselContainer
      .unbind()
      .on("transitionend", ".carousel-modal:not(.tag-hidden)", function () {
        isAnimating = false;
        const $currentCarousel = $(this);
        $currentCarousel.css("transition", "none");
      });
  });

  return (
    <>
      <section class="section-black row news-details">
        <div class="col-md-12 d-flex pt-5">
          <div class="col-md-12 w-100 d-flex justify-content-center flex-column">
            <div class="details-head row d-flex flex-column align-items-center ">
              <div class="col-md-10 col-sm-10 col-10 pb-3">
                <div class="modal-tags d-flex justify-content-center align-items-center">
                  <button class="modal-tag-btn" data-target="#interiorTag">
                    INTERIOR
                  </button>

                  <button class="modal-tag-btn" data-target="#exteriorTag">
                    EXTERIOR
                  </button>

                  <button class="modal-tag-btn" data-target="#performanceTag">
                    PERFORMANCE
                  </button>

                  <button class="modal-tag-btn" data-target="#safetyTag">
                    SAFETY
                  </button>

                  <button class="modal-tag-btn" data-target="#technologyTag">
                    TECHNOLOGY
                  </button>
                </div>

                <div class="carousel-container-modal">
                  <ul
                    class="carousel-modal"
                    id="interiorTag"
                    data-current-index="0"
                  >
                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={img1} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>Leather seats</p>

                        <p>
                          The interior of the EXEED VX offers exclusive comfort
                          for everyone, thanks to premium materials and LEAR’s
                          unique anatomically shaped leather seats.
                        </p>
                      </div>
                    </li>

                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={img2} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>Panoramic Sunroof</p>

                        <p>
                          If you are driving in the rain, the sunroof will be
                          automatically closed as you just say “It’s raining”.
                          In addition to voice control, you can also apply
                          remote control on the sunroof via the mobile APP or
                          the key. The panoramic sunroof has a lighting area of
                          0.89m2, which allows for a panoramic view of starry
                          sky and clear sky.
                        </p>
                      </div>
                    </li>

                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={img3} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>Electric A/C Three Zone + Front seats ventilation</p>

                        <p>
                          All versions of the flagship space shuttle EXEED VX
                          are equipped with three-zone climate control with a
                          proprietary ionization and air purification system,
                          and seats with heating and ventilation functions.
                          Passengers in the second row of seats in the VX SUV
                          are entitled to their own climate control unit with
                          the ability to adjust the temperature.
                        </p>
                      </div>
                    </li>

                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={img3} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>Electric A/C Three Zone + Front seats ventilation</p>

                        <p>
                          All versions of the flagship space shuttle EXEED VX
                          are equipped with three-zone climate control with a
                          proprietary ionization and air purification system,
                          and seats with heating and ventilation functions.
                          Passengers in the second row of seats in the VX SUV
                          are entitled to their own climate control unit with
                          the ability to adjust the temperature.
                        </p>
                      </div>
                    </li>
                  </ul>

                  <ul
                    class="carousel-modal tag-hidden"
                    id="exteriorTag"
                    data-current-index="0"
                  >
                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={img4} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>20” Alloy Wheels</p>

                        <p>
                          The two-tone 20-inch alloy wheels are designed
                          specifically for the VX. All SUV versions are equipped
                          with Continental tires.
                        </p>
                      </div>
                    </li>

                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={img5} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>
                          Full LED headlamp + LED daytime running lamp (DRL)
                        </p>

                        <p>
                          The all-LED headlights on the VX SUV are complemented
                          by cornering lights and dynamic turn signals. The
                          daytime running lights below also feature LED
                          technology.
                        </p>
                      </div>
                    </li>

                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={img6} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>IHC- Intelligent high-beam control</p>

                        <p>
                          With the VX SUV, driving at night will be a pleasant
                          experience: all modifications of the car are equipped
                          with automatic high beam control. So the game called
                          “see everything and blind no one “is no longer your
                          concern.
                        </p>
                      </div>
                    </li>
                  </ul>

                  <ul
                    class="carousel-modal tag-hidden"
                    id="performanceTag"
                    data-current-index="0"
                  >
                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={img7} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>Super-powerful Engine 2.0 With 261 hp</p>

                        <p>
                          In the configurator of the flagship EXEED VX, a 2.0
                          engine with a return of 261 hp, provides a large SUV
                          with decent acceleration dynamics. The motor belongs
                          to the modern Acteco family. Able to turn off part of
                          the cylinders to save fuel with a uniform ride and
                          passed 2 million kilometers without comment. This is
                          equivalent to ten years of operation at high loads.
                        </p>
                      </div>
                    </li>

                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={img8} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>All wheel drive, 7 DCT</p>

                        <p>
                          The robotic preselective 7-speed DCT transmission with
                          two wet clutches is easily controlled with 385 Nm of
                          torque. And the presence of three modes Eco, Normal,
                          Sport, coupled with effective cooling, allows you to
                          achieve impressive dynamics and high fuel efficiency.
                        </p>
                      </div>
                    </li>

                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={img9} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>Adaptive Cruise Control (ACC)</p>

                        <p>
                          The adaptive cruise control of the VX SUV allows you
                          to maintain a certain distance from the car in front
                          of you, in addition to the set speed. The system is
                          activated when the speed reaches 30 km/h.
                        </p>
                      </div>
                    </li>
                  </ul>

                  <ul
                    class="carousel-modal tag-hidden"
                    id="safetyTag"
                    data-current-index="0"
                  >
                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={safety1} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>Front &#038; Rear Parking Sensor</p>

                        <p>
                          This feature can detect objects in front and back of
                          the car while parking, providing audible alerts if one
                          or more objects are detected.
                        </p>
                      </div>
                    </li>

                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={safety2} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>Brake Assist System (BAS)</p>

                        <p>
                          This safety function can substantially shorten your
                          car&#8217;s stopping distance. The system detects that
                          full braking power is needed and automatically boosts
                          the brake pressure up to the ABS threshold, and
                          continues to do so whilst you keep the brake pedal
                          pressed down.
                        </p>
                      </div>
                    </li>

                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={safety3} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>
                          Front Airbag (Driver &#038; Passenger) &#038; side +
                          Front &#038; Side curtain
                        </p>

                        <p>
                          In case of danger, we are not able to predict the
                          direction of collision. Don’t be scared because EXEED
                          provides you with all-round protection. Six air bags
                          include front driver and passenger airbags, front side
                          air bags, rear side curtain airbags, which can help to
                          buffer the collision and greatly reduce the impact
                          damage to people in the car.
                        </p>
                      </div>
                    </li>

                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={safety4} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>Tire Pressure Monitor</p>

                        <p>
                          Tire pressure monitoring system can will activate a
                          warning light when tire pressure drops, it also gives
                          a real-time pressure readings.
                        </p>
                      </div>
                    </li>

                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={safety5} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>Lane keeping assist (LKA)</p>

                        <p>
                          LKA is known as the “second driver”, When cameras
                          detect the vehicle is about to stray from its lane,
                          LKA system will warn the driver by vibrating steering
                          wheel or alarm. If the driver still falls to react, it
                          will steer the vehicle back to the lane automatically.
                        </p>
                      </div>
                    </li>

                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={safety6} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>Rear collision warning (RCW)</p>

                        <p>
                          The Rear Collision Warning (RCW) function can help the
                          driver to avoid being hit by a vehicle approaching
                          from behind.
                        </p>
                      </div>
                    </li>
                  </ul>

                  <ul
                    class="carousel-modal tag-hidden"
                    id="technologyTag"
                    data-target="#technologyTag"
                    data-current-index="0"
                  >
                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={techno1} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>Radio, Bluetooth, USB with audio system</p>

                        <p>
                          The feeling of premium interior is complemented by
                          acoustics on Arkamys and Sony components from 8
                          speakers. Regardless of the chosen configuration, the
                          audio system of the updated TXL will give the cabin
                          occupants a clear and detailed sound.
                        </p>
                      </div>
                    </li>

                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={techno2} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>Dual 12.3 inch capacitive touch screen</p>

                        <p>
                          The undisputed dominant of the front part of the cabin
                          is a multimedia cluster consisting of two widescreen
                          displays (the right one is touch-sensitive). The
                          diagonal of each is 12.3 inches, and the resolution is
                          1920 * 720 pixels.
                        </p>
                      </div>
                    </li>

                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={techno3} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>Wireless charge</p>

                        <p>
                          With the updated TXL, you can forget about charging
                          cables forever. Induction charging on the central
                          tunnel will quickly feed the gadget: from now on you
                          will always be online.
                        </p>
                      </div>
                    </li>

                    <li class="carousel-content-placeholder-modal d-flex flex-column">
                      <div class="carousel-img-placeholder-modal">
                        <img src={techno4} alt="Image 1" />
                      </div>

                      <div class="modal-carousel-text">
                        <p class="carousel-pagination"></p>

                        <p>HD 360° round view camera</p>

                        <p>
                          TXL updated version provides an HD 360° round view
                          camera.
                        </p>
                      </div>
                    </li>
                  </ul>

                  <button class="prev">&#10094;</button>
                  <button class="next">&#10095;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
