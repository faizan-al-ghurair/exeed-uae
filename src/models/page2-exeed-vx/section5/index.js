import React from "react";

const CarouselItem = ({ active, id }) => {
  return (
    <div class={`carousel-item ${active}`}>
      <div>
        <img
          class="position-relative w-100"
          src="https://exeed-uae.com/wp-content/uploads/2023/07/photo-INTERIOR-22.png"
          alt="..."
        />
      </div>
      <div class="position-relative top-0 row d-flex w-100 h-100 justify-content-center align-items-center elementor-background-overlay-gradient">
        <div
          class="section-spacing col-md-12 h-100 d-flex align-items-end  justify-content-center"
          data-id="788e685a"
          data-element_type="column"
        >
          <div
            class="w-100"
            data-id="5d7c2b4f"
            data-element_type="widget"
            data-widget_type="icon-box.default"
          ></div>
        </div>
      </div>
      <div class="z-index-max section-spacing col-md-12 row justify-content-center align-items-center">
        <div class="elementor-icon-box-content col-md-12 ">
          <div class="justify-content-center">
            <h3 class="justify-content-start">
              <p class="white-banner-text-label">{`1/${id}`}</p>
              <p class="white-banner-text-label">Leather seats</p>
              <p class="white-banner-text-label">
                The interior of the EXEED VX offers exclusive comfort for
                everyone, thanks to premium materials and LEAR’s unique
                anatomically shaped leather seats.
              </p>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const CarousalComponent = ({ id, active }) => {
  return (
    <div class={`tab-pane fade show ${active}`} id={id}>
      <section
        class="elementor-section"
        data-id="7934254d"
        data-element_type="section"
        data-settings=""
      >
        <div class="">
          <div
            data-bs-interval="false"
            id={`carouselExampleControlsModal-${id}`}
            class="carousel slide"
            data-bs-ride="carousel"
            data-pause="hover"
          >
            <div class="carousel-inner">
              <CarouselItem active={"active"} id={1} />
              <CarouselItem active={""} id={2} />
              <CarouselItem active={""} id={3} />
              <CarouselItem active={""} id={4} />
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target={`#carouselExampleControlsModal-${id}`}
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>

            <button
              class="carousel-control-next"
              type="button"
              data-bs-target={`#carouselExampleControlsModal-${id}`}
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Section5 = () => {
  return (
    <>
      <section
        class="dynamic-tabs"
        data-id="d27ecd7"
        data-element_type="section"
      >
        <div class="m-4">
          <ul class="nav nav-tabs" id="myTab">
            <li class="nav-item px-1 w-10">
              <a href="#INTERIOR" class="nav-link active" data-bs-toggle="tab">
                INTERIOR
              </a>
            </li>
            <li class="nav-item px-1 w-10">
              <a href="#EXTERIOR" class="nav-link" data-bs-toggle="tab">
                EXTERIOR
              </a>
            </li>
            <li class="nav-item px-1 w-10">
              <a href="#PERFORMANCE" class="nav-link" data-bs-toggle="tab">
                PERFORMANCE
              </a>
            </li>
            <li class="nav-item px-1 w-10">
              <a href="#SAFETY" class="nav-link" data-bs-toggle="tab">
                SAFETY
              </a>
            </li>
            <li class="nav-item px-1 w-10">
              <a href="#TECHNOLOGY" class="nav-link" data-bs-toggle="tab">
                TECHNOLOGY
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <CarousalComponent id="INTERIOR" active="active" />
            <CarousalComponent id="EXTERIOR" active="" />
            <CarousalComponent id="PERFORMANCE" active="" />
            <CarousalComponent id="SAFETY" active="" />
            <CarousalComponent id="TECHNOLOGY" active="" />
          </div>
        </div>
      </section>
    </>
  );
};

// import React from "react";
// import $ from "jquery";

// const CarouselItem = ({ active, id }) => {
//   return (
//     <div class={`carousel-item ${active}`}>
//       <div>
//         <img
//           class="position-relative w-100"
//           src="https://exeed-uae.com/wp-content/uploads/2023/07/photo-INTERIOR-22.png"
//           alt="..."
//         />
//       </div>
//       <div class="position-relative top-0 row d-flex w-100 h-100 justify-content-center align-items-center elementor-background-overlay-gradient">
//         <div
//           class="section-spacing col-md-12 h-100 d-flex align-items-end  justify-content-center"
//           data-id="788e685a"
//           data-element_type="column"
//         >
//           <div
//             class="w-100"
//             data-id="5d7c2b4f"
//             data-element_type="widget"
//             data-widget_type="icon-box.default"
//           ></div>
//         </div>
//       </div>
//       <div class="z-index-max section-spacing col-md-12 row justify-content-center align-items-center">
//         <div class="elementor-icon-box-content col-md-12 ">
//           <div class="justify-content-center">
//             <h3 class="justify-content-start">
//               <p class="white-banner-text-label">{`1/${id}`}</p>
//               <p class="white-banner-text-label">Leather seats</p>
//               <p class="white-banner-text-label">
//                 The interior of the EXEED VX offers exclusive comfort for
//                 everyone, thanks to premium materials and LEAR’s unique
//                 anatomically shaped leather seats.
//               </p>
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ModalCarouselItem = ({ id }) => {
//   return (
//     <li class="carousel-img-placeholder-modal">
//       <div class="d-flex">
//         <div class="modal-carousel-placeholder">
//           <img
//             src="https://exeed-uae.com/wp-content/uploads/2023/07/photo-INTERIOR-22.png"
//             alt="..."
//           />
//           <div class="position-absolute top-0 row d-flex w-100 h-100 justify-content-center align-items-center elementor-background-overlay-gradient">
//             <div
//               class="section-spacing col-md-12 h-100 d-flex align-items-end  justify-content-center"
//               data-id="788e685a"
//               data-element_type="column"
//             >
//               <div
//                 class="w-100"
//                 data-id="5d7c2b4f"
//                 data-element_type="widget"
//                 data-widget_type="icon-box.default"
//               ></div>
//             </div>
//           </div>
//         </div>

//         <div class="z-index-max">
//           <div class="elementor-icon-box-content col-md-12 ">
//             <div class="justify-content-center">
//               <h3 class="justify-content-start">
//                 <p class="white-banner-text-label">{`1/${id}`}</p>
//                 <p class="white-banner-text-label">Leather seats</p>
//                 <p class="white-banner-text-label">
//                   The interior of the EXEED VX offers exclusive comfort for
//                   everyone, thanks to premium materials and LEAR’s unique
//                   anatomically shaped leather seats.
//                 </p>
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   );
// };

// const CarousalComponent = ({ id, active }) => {
//   return (
//     <div class={`tab-pane fade show ${active}`} id={id}>
//       <section
//         class="elementor-section"
//         // data-id="7934254d"
//         // data-element_type="section"
//         // data-settings=""
//       >
//         {/* <div class=""> */}
//         <div
//           // data-bs-interval="false"
//           id={`carouselExampleControlsModal-${id}`}
//           // class="carousel slide"
//           class="carousel-container-modal"
//           // data-bs-ride="carousel"
//           // data-pause="hover"
//         >
//           {/* <div class="carousel-inner">
//             <CarouselItem active={"active"} id={1} />
//             <CarouselItem active={""} id={2} />
//             <CarouselItem active={""} id={3} />
//             <CarouselItem active={""} id={4} />
//           </div> */}

//           <ul class="carousel">
//             <ModalCarouselItem id={1} />
//             <ModalCarouselItem id={2} />
//             <ModalCarouselItem id={3} />
//             <ModalCarouselItem id={4} />
//           </ul>
//           {/* <button
//               class="carousel-control-prev"
//               type="button"
//               data-bs-target={`#carouselExampleControlsModal-${id}`}
//               data-bs-slide="prev"
//             >
//               <span
//                 class="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="visually-hidden">Previous</span>
//             </button>

//             <button
//               class="carousel-control-next"
//               type="button"
//               data-bs-target={`#carouselExampleControlsModal-${id}`}
//               data-bs-slide="next"
//             >
//               <span
//                 class="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="visually-hidden">Next</span>
//             </button> */}
//           <button class="prev">&#8672;</button>
//           <button class="next">&#8674;</button>
//         </div>
//         {/* </div> */}
//       </section>
//     </div>
//   );
// };

// export const Section5 = () => {
//   $(document).ready(function () {
//     const $carousel = $(".carousel");
//     const $prevBtn = $(".prev");
//     const $nextBtn = $(".next");

//     let currentIndex = 0;
//     const totalSlides = $carousel.find("li").length;
//     let isAnimating = false;

//     function toggleSlides() {
//       if (totalSlides < 2) {
//         $prevBtn.hide();
//         $nextBtn.hide();
//       } else {
//         $prevBtn.show();
//         $nextBtn.show();
//       }
//     }

//     toggleSlides();

//     $prevBtn.on("click", function () {
//       if (!isAnimating) {
//         isAnimating = true;
//         $carousel.css("transition", "transform 0.5s ease-in-out");
//         currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//         updateCarousel();
//       }
//     });

//     $nextBtn.on("click", function () {
//       if (!isAnimating) {
//         isAnimating = true;
//         $carousel.css("transition", "transform 0.5s ease-in-out");
//         currentIndex = (currentIndex + 1) % totalSlides;
//         updateCarousel();
//       }
//     });

//     $carousel.on("transitionend", function () {
//       isAnimating = false;
//       $carousel.css("transition", "none");
//       if (currentIndex === -1) {
//         currentIndex = totalSlides - 1;
//       } else if (currentIndex === totalSlides) {
//         currentIndex = 0;
//       }
//       updateCarousel();
//     });

//     function updateCarousel() {
//       const slideWidth = $carousel.find("li").width();
//       const translateX = -currentIndex * slideWidth;

//       $carousel.css("transform", `translateX(${translateX}px)`);
//     }
//   });
//   return (
//     <>
//       <section
//         class="dynamic-tabs"
//         data-id="d27ecd7"
//         data-element_type="section"
//       >
//         <div class="m-4">
//           <ul class="nav nav-tabs" id="myTab">
//             <li class="nav-item px-1 w-10">
//               <a href="#INTERIOR" class="nav-link active" data-bs-toggle="tab">
//                 INTERIOR
//               </a>
//             </li>
//             <li class="nav-item px-1 w-10">
//               <a href="#EXTERIOR" class="nav-link" data-bs-toggle="tab">
//                 EXTERIOR
//               </a>
//             </li>
//             <li class="nav-item px-1 w-10">
//               <a href="#PERFORMANCE" class="nav-link" data-bs-toggle="tab">
//                 PERFORMANCE
//               </a>
//             </li>
//             <li class="nav-item px-1 w-10">
//               <a href="#SAFETY" class="nav-link" data-bs-toggle="tab">
//                 SAFETY
//               </a>
//             </li>
//             <li class="nav-item px-1 w-10">
//               <a href="#TECHNOLOGY" class="nav-link" data-bs-toggle="tab">
//                 TECHNOLOGY
//               </a>
//             </li>
//           </ul>
//           <div class="tab-content">
//             <CarousalComponent id="INTERIOR" active="active" />
//             <CarousalComponent id="EXTERIOR" active="" />
//             <CarousalComponent id="PERFORMANCE" active="" />
//             <CarousalComponent id="SAFETY" active="" />
//             <CarousalComponent id="TECHNOLOGY" active="" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
