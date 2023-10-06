import React from "react";
import "./styles.css";
import linkedinLogo from "../../linkedin white.svg";

export const Footer = () => {
  return (
    <>
      <div class="newsletter fluid-container">
        <div class="newsletter-inner col-md-10 col-sm-10 col-10 d-flex align-items-center justify-content-between">
          <div class="newsletter-text col-sm-4">
            <h2>Subscribe for Exclusive Updates!</h2>
          </div>
          <div class="newsletter-email col-sm-8">
            <form action="post">
              <input type="email" placeholder="Enter Your Email Address" />
              <button type="submit" class="newsletter-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="footer-container container-fluid">
        <div class=" footer-container-middle  d-flex justify-content-between align-items-start ">
          <div class="col-sm-3 footer-column">
            <a href="https://exeed-uae.com">
              <img
                src="https://exeed-uae.com/wp-content/uploads/2023/07/Exeed.png"
                class="footer-logo-img"
                alt="exeed cars logo"
              />
            </a>
            <p>
              At EXEED Al Ghurair, we understand that modern drivers seek not
              only performance but also efficiency.
            </p>
          </div>

          <div class="footer-links col-sm-8 d-flex justify-content-between footer-column">
            <div class="col-sm-2">
              <h5 class="footer-section-titles">Company</h5>
              <a href="#">
                <p>Home</p>
              </a>
              <a href="#">
                <p>News</p>
              </a>
              <a href="#">
                <p>Promotion</p>
              </a>
              <a href="#">
                <p>Sitemaps</p>
              </a>
            </div>
            <div class="col-sm-2 ">
              <h5 class="footer-section-titles">SERVICES</h5>
              <a href="#">
                <p>Test Drive</p>
              </a>
              <a href="#">
                <p>Book Service</p>
              </a>
              <a href="#">
                <p>Request A Quote</p>
              </a>
            </div>
            <div class="col-sm-2  ">
              <h5 class="footer-section-titles">models</h5>
              <a href="#">
                <p>EXEED RX</p>
              </a>
              <a href="#">
                <p>EXEED VX</p>
              </a>
              <a href="#">
                <p>EXEED TXL</p>
              </a>
              <a href="#">
                <p>EXEED LX</p>
              </a>
            </div>
            <div class="col-sm-4  ">
              <h5 class="footer-section-titles">CONTACT</h5>
              <a href="tel:+97143995661">
                <p>+971 4 3995661</p>
              </a>
              <a href="mailto:exeed.UAE@al-ghurair.com">
                <p>exeed.UAE@al-ghurair.com</p>
              </a>
              <a href="https://exeed-uae.com/">
                <p>exeed-uae.com</p>
              </a>
            </div>
          </div>
        </div>
        <div class="footer-lower">
          <div class="copyright col-sm-5">
            <p>© Copyright 2023 Exeed.All Right Reserved.</p>
          </div>
          <div class="footer-policy col-sm-4">
            <a href="#">Privacy Policy</a>
          </div>
          <div class="col-sm-1"></div>
          <div class="socialmedia col-sm-2">
            <ul class="d-flex">
              <a>
                <li>
                  <img src={linkedinLogo} alt="Linkedin Logo"></img>
                </li>
              </a>
              <a>
                <li>
                  <img src={linkedinLogo} alt="Linkedin Logo"></img>
                </li>
              </a>
              <a>
                <li>
                  <img src={linkedinLogo} alt="Linkedin Logo"></img>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
