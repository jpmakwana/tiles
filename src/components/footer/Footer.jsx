import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  let [SearchPopup, setSearchPopup] = useState(false);
  // document.body.style.overflow = 'hidden';

  function inquiryopen() {
    setSearchPopup(!SearchPopup);
    document.body.style.overflow = "hidden";
  }

  function inquiryclose() {
    setSearchPopup(!SearchPopup);
    document.body.style.overflow = "auto";
  }
  return (
    <>
      <section className="newsletter">
        <div className="container">
          <div
            className="newsletter__inner wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div
              className="newsletter-shape-1"
              style={{
                backgroundImage:
                  "url(assets/images/shapes/newsletter-shape-1.png)",
              }}
            />
            <div className="newsletter__left">
              <h3 className="newsletter__title">Join Our Newsletter</h3>
              <p className="newsletter__text">
                Lorem ipsum dolor amet, elit do eiusmod sed
              </p>
            </div>
            <div className="newsletter__right">
              <form className="newsletter__form">
                <div className="newsletter__input-box">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                  />
                  <button type="submit" className="thm-btn newsletter__btn">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div
          className="site-footer-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/site-footer-bg.jpg)",
          }}
        />
        <div className="site-footer__top">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__logo">
                    <Link href="index-2.html">
                      <img
                        src="assets/images/resources/footer-logo.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="footer-widget__about-text-box">
                    <p className="footer-widget__about-text">
                      We work with a passion of taking challenges and creating
                      new ones in advertising sector.
                    </p>
                  </div>
                  <div className="site-footer__social">
                    <Link href="#">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="#">
                      <i className="fab fa-facebook" />
                    </Link>
                    <Link href="#">
                      <i className="fab fa-pinterest-p" />
                    </Link>
                    <Link href="#">
                      <i className="fab fa-instagram" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__explore clearfix">
                  <h3 className="footer-widget__title">Explore</h3>
                  <ul className="footer-widget__explore-list list-unstyled clearfix">
                    <li>
                      <Link href="about.html">About</Link>
                    </li>
                    <li>
                      <Link href="contact.html">Contact</Link>
                    </li>
                    <li>
                      <Link href="team.html">Our Team</Link>
                    </li>
                    <li>
                      <Link href="services.html">Our Services</Link>
                    </li>
                    <li>
                      <Link href="projects.html">Latest Projects</Link>
                    </li>
                    <li>
                      <Link href="contact.html">Pricing &amp; Plans</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget__column footer-widget__services clearfix">
                  <h3 className="footer-widget__title">Services</h3>
                  <ul className="footer-widget__services-list list-unstyled clearfix">
                    <li>
                      <Link href="room-wallpapers.html">Room Wallpaper</Link>
                    </li>
                    <li>
                      <Link href="wall-painting.html">Wall Painting</Link>
                    </li>
                    <li>
                      <Link href="wall-sheets.html">Wall Sheets</Link>
                    </li>
                    <li>
                      <Link href="outdoor-design.html">Outdoor Designs</Link>
                    </li>
                    <li>
                      <Link href="pvc-panels.html">PVC Panels</Link>
                    </li>
                    <li>
                      <Link href="interior-designing.html">
                        Interior Design
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget__column footer-widget__contact clearfix">
                  <h3 className="footer-widget__title">Contact</h3>
                  <ul className="footer-widget__contact-list list-unstyled clearfix">
                    <li>
                      <div className="icon">
                        <span className="icon-phone-call" />
                      </div>
                      <div className="text">
                        <h5>Call anytime</h5>
                        <p>
                          <Link href="tel:980009630">+ 98 (000) - 9630</Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-message" />
                      </div>
                      <div className="text">
                        <h5>Send email</h5>
                        <p>
                          <Link href="mailto:ambed@company.com">
                            ambed@company.com
                          </Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-location" />
                      </div>
                      <div className="text">
                        <h5>380 St Kilda Road</h5>
                        <p>Melbourne, Australia</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="site-footer__bottom-inner">
                  <p className="site-footer__bottom-text">
                    © Copyright 2022 by <Link href="#">Ambed Template</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Link
        className="scroll-to-target scroll-to-top"
        style={{ bottom: "95px" }}
        onClick={scrollToTop}
      >
        <i className="fa fa-angle-up" />
      </Link>

      <div className="whatsapp_btn z-999">
        <Link
          to="https://api.whatsapp.com/send?phone=919723037928&amp;text=Hello"
          target="_blank"
        >
          <img
            src="assets/img/whatsapp.png"
            alt="chat with the Tiles"
            width={45}
          />
        </Link>
      </div>
      <div className="inquiry_btn z-999">
        <Link onClick={inquiryopen}>
          <img src="assets/img/inquiry.png" alt="inquiry" width={65} />
        </Link>
      </div>
      <div className={`inquiry-popup ${SearchPopup ? "active" : ""}`}>
        <div className="inquiry-popup__overlay" onClick={inquiryclose} />
        <div className="inquiry-section">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">GET BEST OFFER</h5>
              <button
                type="button"
                className="btn-close"
                onClick={inquiryclose}
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label d-block"
                  >
                    Requirement :
                  </label>
                  <div className="main-redio">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Tiles"
                        id="redio1"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="redio1">
                        Tiles
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Tiles"
                        id="redio2"
                      />
                      <label className="form-check-label" htmlFor="redio2">
                        Sanitary
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Tiles"
                        id="redio3"
                      />
                      <label className="form-check-label" htmlFor="redio3">
                        Various Products
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
