import React from "react";

export const Section4 = () => {
  return (
    <>
      <section
        class="dynamic-tabs"
        data-id="d27ecd7"
        data-element_type="section"
      >
        <div class="m-4">
          <ul class="nav nav-tabs" id="myTab">
            <li class="nav-item px-1">
              <a href="#home" class="nav-link active" data-bs-toggle="tab">
              INTERIOR
              </a>
            </li>
            <li class="nav-item px-1">
              <a href="#profile" class="nav-link" data-bs-toggle="tab">
                Profile
              </a>
            </li>
            <li class="nav-item px-1">
              <a href="#profile" class="nav-link" data-bs-toggle="tab">
              EXTERIOR
              </a>
            </li>
            <li class="nav-item px-1">
              <a href="#profile" class="nav-link" data-bs-toggle="tab">
              PERFORMANCE
              </a>
            </li>
            <li class="nav-item px-1">
              <a href="#messages" class="nav-link" data-bs-toggle="tab">
              SAFETY
              </a>
            </li>
            <li class="nav-item px-1">
              <a href="#messages" class="nav-link" data-bs-toggle="tab">
              TECHNOLOGY
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="home">
              <h4 class="mt-2">Home tab content</h4>
              <p>
                Aliquip placeat salvia cillum iphone. Seitan aliquip quis
                cardigan american apparel, butcher voluptate nisi qui. Raw denim
                you probably haven't heard of them jean shorts Austin. Nesciunt
                tofu stumptown aliqua, retro synth master cleanse. Mustache
                cliche tempor, williamsburg carles vegan helvetica.
                Reprehenderit butcher retro keffiyeh dreamcatcher synth.
              </p>
            </div>
            <div class="tab-pane fade" id="profile">
              <h4 class="mt-2">Profile tab content</h4>
              <p>
                Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.
                Vivamus nibh urna, ornare id gravida ut, mollis a magna. Aliquam
                porttitor condimentum nisi, eu viverra ipsum porta ut. Nam
                hendrerit bibendum turpis, sed molestie mi fermentum id. Aenean
                volutpat velit sem. Sed consequat ante in rutrum convallis. Nunc
                facilisis leo at faucibus adipiscing.
              </p>
            </div>
            <div class="tab-pane fade" id="messages">
              <h4 class="mt-2">Messages tab content</h4>
              <p>
                Donec vel placerat quam, ut euismod risus. Sed a mi suscipit,
                elementum sem a, hendrerit velit. Donec at erat magna. Sed
                dignissim orci nec eleifend egestas. Donec eget mi consequat
                massa vestibulum laoreet. Mauris et ultrices nulla, malesuada
                volutpat ante. Fusce ut orci lorem. Donec molestie libero in
                tempus imperdiet. Cum sociis natoque penatibus et magnis.
              </p>
            </div>
          </div>
          <hr />
          <p>
            <button type="button" class="btn btn-primary" id="myBtn">
              Get or Create Home Tab Instance
            </button>
          </p>
        </div>
      </section>
    </>
  );
};
