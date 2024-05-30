import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../css/home.css";
import { Link } from "react-router-dom";
import { BASE_URL_S } from "../components/ApiConfig/apiConfig";
import axios from "axios";
import Slider from "react-slick";
import "react-loading-skeleton/dist/skeleton.css";
import HomeSlider from "../components/slider/HomeSlider";
import DirectorySection from "../components/directory-section/DirectorySection";

function Home() {
  const arrivalsOptions = {
    slidesToShow: 3,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    infinite: true,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const recentStatus = {
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const [Newarrival, setNewarrival] = useState([]);
  //api banner
  useEffect(() => {
    axios
      .get(BASE_URL_S + "newarrival")
      .then((res) => res.data)
      .then((finalres) => {
        setNewarrival(finalres.newarrival);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="custom-cursor">
        <div className="page-wrapper">
          <Header />
          <HomeSlider />
          <DirectorySection />
          <section className="about-one">
            <div className="about-one-shape-2 float-bob-x" />
            <div className="about-one-wall">
              <img src="assets/images/shapes/about-one-wall.png" alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="about-one__left">
                    <div className="section-title text-left">
                      <span className="section-title__tagline">
                        About company
                      </span>
                      <h2 className="section-title__title">
                        We’re Providing Quality Wall Designs
                      </h2>
                      <div className="section-title__line" />
                    </div>
                    <p className="about-one__text-1">
                      We have 30+ years of experiences for give you better
                      quality results.
                    </p>
                    <ul className="list-unstyled about-one__points">
                      <li>
                        <div className="about-one__points-content-box">
                          <div className="about-one__points-icon">
                            <span className="icon-wallpaper" />
                          </div>
                          <div className="about-one__points-text-box">
                            <p className="about-one__points-text">
                              Smart &amp; Unique Wall Work
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="about-one__points-content-box">
                          <div className="about-one__points-icon">
                            <span className="icon-high-quality" />
                          </div>
                          <div className="about-one__points-text-box">
                            <p className="about-one__points-text">
                              The Best Quality Standards
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <p className="about-one__text-2">
                      Lorem ipsum dolor sit amet, consectetur notted adipisicing
                      elit sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua lonm andhn. Aenean tincidunt id mauris id
                      auctor donec at ligula lacus.
                    </p>
                    <div className="about-one__contact-us">
                      <div className="about-one__btn-box">
                        <Link
                          href="about.html"
                          className="thm-btn about-one__btn"
                        >
                          Read More About
                        </Link>
                      </div>
                      <div className="about-one__call">
                        <div className="about-one__call-icon">
                          <span className="icon-phone-call" />
                        </div>
                        <div className="about-one__call-text">
                          <p>Call anytime</p>
                          <Link href="tel:980009630">+ 98 (000) - 9630</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="about-one__right">
                    <div
                      className="about-one__img-box wow slideInRight"
                      data-wow-delay="100ms"
                      data-wow-duration="2500ms"
                    >
                      <div className="about-one__img">
                        <img
                          src="assets/images/resources/about-one-img-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="about-one__small-img">
                        <img
                          src="assets/images/resources/about-one-small-img.jpg"
                          alt=""
                        />
                      </div>
                      <div className="about-one__project">
                        <div className="about-one__project-icon">
                          <span className="icon-wallpaper-1" />
                        </div>
                        <div className="about-one__project-content">
                          <h3 className="odometer" data-count={3690}>
                            00
                          </h3>
                          <p className="about-one__project-text">
                            Successful Project
                          </p>
                        </div>
                      </div>
                      <div className="about-one__shape-1 float-bob-y" />
                      <div className="about-one__dot">
                        <img
                          src="assets/images/shapes/about-one-dots.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="feature-one">
            <div className="container">
              <ul className="list-unstyled feature-one__list">
                <li
                  className="feature-one__single wow fadeInLeft"
                  data-wow-delay="100ms"
                >
                  <div className="feature-one__content">
                    <div className="feature-one__shape-1">
                      <img
                        src="assets/images/shapes/feature-one-shape-1.png"
                        alt=""
                      />
                    </div>
                    <div className="feature-one__shape-2">
                      <img
                        src="assets/images/shapes/feature-one-shape-2.png"
                        alt=""
                      />
                    </div>
                    <div className="feature-one__icon">
                      <span className="icon-mind" />
                    </div>
                    <h3 className="feature-one__title">
                      <Link href="about.html">Smart Work</Link>
                    </h3>
                    <p className="feature-one__text">
                      There are many of pass of lorem ipsum available, but the
                      majority.
                    </p>
                    <div className="feature-one__arrow">
                      <Link href="about.html">
                        <i className="fa fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </li>

                <li
                  className="feature-one__single wow fadeInLeft"
                  data-wow-delay="200ms"
                >
                  <div className="feature-one__content">
                    <div className="feature-one__shape-1">
                      <img
                        src="assets/images/shapes/feature-one-shape-1.png"
                        alt=""
                      />
                    </div>
                    <div className="feature-one__shape-2">
                      <img
                        src="assets/images/shapes/feature-one-shape-2.png"
                        alt=""
                      />
                    </div>
                    <div className="feature-one__icon">
                      <span className="icon-wallpaper-2" />
                    </div>
                    <h3 className="feature-one__title">
                      <Link href="about.html">Unique Designs</Link>
                    </h3>
                    <p className="feature-one__text">
                      There are many of pass of lorem ipsum available, but the
                      majority.
                    </p>
                    <div className="feature-one__arrow">
                      <Link href="about.html">
                        <i className="fa fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </li>

                <li
                  className="feature-one__single wow fadeInLeft"
                  data-wow-delay="300ms"
                >
                  <div className="feature-one__content">
                    <div className="feature-one__shape-1">
                      <img
                        src="assets/images/shapes/feature-one-shape-1.png"
                        alt=""
                      />
                    </div>
                    <div className="feature-one__shape-2">
                      <img
                        src="assets/images/shapes/feature-one-shape-2.png"
                        alt=""
                      />
                    </div>
                    <div className="feature-one__icon">
                      <span className="icon-programmer" />
                    </div>
                    <h3 className="feature-one__title">
                      <Link href="team.html">Skilled Team</Link>
                    </h3>
                    <p className="feature-one__text">
                      There are many of pass of lorem ipsum available, but the
                      majority.
                    </p>
                    <div className="feature-one__arrow">
                      <Link href="team.html">
                        <i className="fa fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </li>

                <li
                  className="feature-one__single wow fadeInLeft"
                  data-wow-delay="400ms"
                >
                  <div className="feature-one__content">
                    <div className="feature-one__shape-1">
                      <img
                        src="assets/images/shapes/feature-one-shape-1.png"
                        alt=""
                      />
                    </div>
                    <div className="feature-one__shape-2">
                      <img
                        src="assets/images/shapes/feature-one-shape-2.png"
                        alt=""
                      />
                    </div>
                    <div className="feature-one__icon">
                      <span className="icon-best-price" />
                    </div>
                    <h3 className="feature-one__title">
                      <Link href="contact.html">Best Pricing</Link>
                    </h3>
                    <p className="feature-one__text">
                      There are many of pass of lorem ipsum available, but the
                      majority.
                    </p>
                    <div className="feature-one__arrow">
                      <Link href="contact.html">
                        <i className="fa fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="services-one">
            <div className="services-one-bg-box z-0">
              <div
                className="services-one-bg jarallax"
                data-jarallax=""
                data-speed="0.2"
                data-imgposition="50% 0%"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/services-one-bg.jpg)",
                }}
              />
            </div>
            <div className="container">
              <div className="section-title text-center">
                <span className="section-title__tagline">
                  GUJARAT TILES INFO
                </span>
                <h2 className="section-title__title">NEW ARRIVALS</h2>
                <div className="section-title__line" />
              </div>
              <div className="slider-container">
                <Slider {...arrivalsOptions} className="z-1">
                  {Newarrival.map((Nvalue, Nindex) => {
                    return (
                      <div className="slider-margin" key={Nindex}>
                        <div className="arrivals-slider">
                          <div
                            className="services-one__single wow fadeInUp"
                            data-wow-delay="100ms"
                          >
                            <div className="services-one__img">
                              <img
                                src={Nvalue.image_path}
                                alt={`Newarrival-${Nvalue.id}`}
                              />
                            </div>
                            <div className="services-one__content">
                              <h3 className="services-one__title">
                                <Link>{Nvalue.name}</Link>
                              </h3>
                              <p className="services-one__text">
                                {Nvalue.size}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </section>
          <section className="quality-work z-0">
            <div className="quality-work-shape-1 float-bob-x">
              <img src="assets/images/shapes/quality-work-shape-1.png" alt="" />
            </div>
            <div className="quality-work-shape-2 float-bob-y">
              <img src="assets/images/shapes/quality-work-shape-2.png" alt="" />
            </div>
            <div className="quality-work-shape-3 float-bob-x">
              <img src="assets/images/shapes/quality-work-shape-3.png" alt="" />
            </div>
            <div className="quality-work-shape-4">
              <img src="assets/images/shapes/quality-work-shape-4.png" alt="" />
            </div>
            <div className="quality-work-shape-5 float-bob-x">
              <img src="assets/images/shapes/quality-work-shape-5.png" alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="quality-work__left">
                    <div className="quality-work__img-box">
                      <div className="quality-work__img">
                        <img
                          src="assets/images/resources/quality-work-img-1.png"
                          alt=""
                        />
                      </div>
                      <div className="quality-work__small-img">
                        <img
                          src="assets/images/resources/quality-work-small-img.jpg"
                          alt=""
                        />
                      </div>
                      <div className="quality-work__video-box">
                        <div className="quality-work__curved-circle-box">
                          <div className="curved-circle">
                            <span className="curved-circle--item">
                              NEW COLLECTION 2022.
                            </span>
                          </div>

                          <div className="quality-work__video-link">
                            <Link
                              href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                              className="video-popup"
                            >
                              <div className="quality-work__video-icon">
                                <span className="fa fa-play" />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="quality-work__right">
                    <div className="section-title text-left">
                      <span className="section-title__tagline">
                        Interior designing
                      </span>
                      <h2 className="section-title__title">
                        Quality Work That Meets Your Expectations
                      </h2>
                      <div className="section-title__line" />
                    </div>
                    <p className="quality-work__text-1">
                      There are many variations of passages of lorem ipsum
                      available but the majority have suffered.
                    </p>
                    <ul className="list-unstyled quality-work__feature">
                      <li>
                        <div className="icon">
                          <span className="icon-image-gallery1" />
                        </div>
                        <div className="text">
                          <p>
                            Innovative <br />
                            Wallpaper Designs
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-wallpaper-5" />
                        </div>
                        <div className="text">
                          <p>
                            High Quality Wall <br />
                            Materials
                          </p>
                        </div>
                      </li>
                    </ul>
                    <p className="quality-work__text-2">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even.
                    </p>
                    <div className="quality-work__progress">
                      <div className="quality-work__progress-single">
                        <h4 className="quality-work__progress-title">
                          Interior Wall Design
                        </h4>
                        <div className="bar">
                          <div
                            className="bar-inner count-bar"
                            data-percent="88%"
                          >
                            <div className="count-text">88%</div>
                          </div>
                        </div>
                      </div>
                      <div className="quality-work__progress-single">
                        <h4 className="quality-work__progress-title">
                          Exterior Painting
                        </h4>
                        <div className="bar marb-0">
                          <div
                            className="bar-inner count-bar"
                            data-percent="60%"
                          >
                            <div className="count-text">60%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="blog-one">
            <div className="container">
              <div className="section-title text-center">
                <span className="section-title__tagline">COMPANY STATUS</span>
                <h2 className="section-title__title">RECENT STATUS</h2>
                <div className="section-title__line" />
              </div>
              <div className="row">
                <div className="slider-container">
                  <Slider {...recentStatus} className="z-1">
                    <div className="slider-margin">
                      <div
                        className="recentstatus wow fadeInUp"
                        data-wow-delay="100ms"
                      >
                        <div className="blog-one__single">
                          <div className="blog-one__img">
                            <img src="assets/images/blog/blog-1-2.jpg" alt="" />
                          </div>
                          <div className="blog-one__content">
                            <h3 className="blog-one__title">
                              <Link href="blog-details.html">
                                Learn the Right
                              </Link>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Nulla, quasi?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slider-margin">
                      <div
                        className="recentstatus wow fadeInUp"
                        data-wow-delay="100ms"
                      >
                        <div className="blog-one__single">
                          <div className="blog-one__img">
                            <img src="assets/images/blog/blog-1-2.jpg" alt="" />
                          </div>
                          <div className="blog-one__content">
                            <h3 className="blog-one__title">
                              <Link href="blog-details.html">
                                Learn the Right
                              </Link>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Nulla, quasi?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slider-margin">
                      <div
                        className="recentstatus wow fadeInUp"
                        data-wow-delay="100ms"
                      >
                        <div className="blog-one__single">
                          <div className="blog-one__img">
                            <img src="assets/images/blog/blog-1-2.jpg" alt="" />
                          </div>
                          <div className="blog-one__content">
                            <h3 className="blog-one__title">
                              <Link href="blog-details.html">
                                Learn the Right
                              </Link>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Nulla, quasi?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slider-margin">
                      <div
                        className="recentstatus wow fadeInUp"
                        data-wow-delay="100ms"
                      >
                        <div className="blog-one__single">
                          <div className="blog-one__img">
                            <img src="assets/images/blog/blog-1-2.jpg" alt="" />
                          </div>
                          <div className="blog-one__content">
                            <h3 className="blog-one__title">
                              <Link href="blog-details.html">
                                Learn the Right
                              </Link>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Nulla, quasi?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </section>
          <section className="post-one">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="section-title text-center">
                    <span className="section-title__tagline">LATEST</span>
                    <h2 className="section-title__title"> SELLER POST</h2>
                    <div className="section-title__line" />
                  </div>

                  <div className="main-seller-box">
                    <div className="main-seller-contain">
                      <div>
                        <div className="title-button">
                          <div className="seller-title">
                            <h4>GALAXY CERAMIC</h4>
                          </div>
                          <div className="seller-details__buttons">
                            <a href="cart.html" className="seller-thm-btn">
                              Dealer
                            </a>
                          </div>
                        </div>
                        <div className="title-description">
                          <p>Orissa Pan</p>
                          <div className="seller-title">
                            <h4>Standard</h4>
                          </div>
                          <p>Quantity: 500 Pcs</p>
                        </div>
                      </div>
                      <div className="main-seller-img-section">
                        <div className="main-seller-img">
                          <img src="assets/img/seller-post/demo.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-seller-box">
                    <div className="main-seller-contain">
                      <div>
                        <div className="title-button">
                          <div className="seller-title">
                            <h4>GALAXY CERAMIC</h4>
                          </div>
                          <div className="seller-details__buttons">
                            <a href="cart.html" className="seller-thm-btn">
                              Dealer
                            </a>
                          </div>
                        </div>
                        <div className="title-description">
                          <p>Orissa Pan</p>
                          <div className="seller-title">
                            <h4>Standard</h4>
                          </div>
                          <p>Quantity: 500 Pcs</p>
                        </div>
                      </div>
                      <div className="main-seller-img-section">
                        <div className="main-seller-img">
                          <img src="assets/img/seller-post/demo.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="main-seller-details">
                    <div className="seller-details_content">
                      <div className="seller-details__post-img">
                        <img src="assets/img/seller-post/demo.jpg" alt=" " />
                      </div>
                      <div className="title-button">
                        <div className="seller-title">
                          <h4>GALAXY CERAMIC</h4>
                        </div>
                        <div className="seller-details__buttons">
                          <a href="cart.html" className="seller-thm-btn">
                            Trader
                          </a>
                        </div>
                      </div>
                      <div className="title-description">
                        <p>Digital Parking Tiles</p>
                        <div className="seller-title">
                          <h4>Premium</h4>
                        </div>
                        <p>165 Per Box</p>
                      </div>
                    </div>
                  </div>
                  <div className="main-seller-details">
                    <div className="seller-details_content">
                      <div className="seller-details__post-img">
                        <img src="assets/img/seller-post/demo.jpg" alt=" " />
                      </div>
                      <div className="title-button">
                        <div className="seller-title">
                          <h4>GALAXY CERAMIC</h4>
                        </div>
                        <div className="seller-details__buttons">
                          <a href="cart.html" className="seller-thm-btn">
                            Trader
                          </a>
                        </div>
                      </div>
                      <div className="title-description">
                        <p>Digital Parking Tiles</p>
                        <div className="seller-title">
                          <h4>Premium</h4>
                        </div>
                        <p>165 Per Box</p>
                      </div>
                    </div>
                  </div>
                  <div className="main-seller-details">
                    <div className="seller-details_content">
                      <div className="seller-details__post-img">
                        <img src="assets/img/seller-post/demo.jpg" alt=" " />
                      </div>
                      <div className="title-button">
                        <div className="seller-title">
                          <h4>GALAXY CERAMIC</h4>
                        </div>
                        <div className="seller-details__buttons">
                          <a href="cart.html" className="seller-thm-btn">
                            Trader
                          </a>
                        </div>
                      </div>
                      <div className="title-description">
                        <p>Digital Parking Tiles</p>
                        <div className="seller-title">
                          <h4>Premium</h4>
                        </div>
                        <p>165 Per Box</p>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="section-title text-center">
                    <span className="section-title__tagline">LATEST</span>
                    <h2 className="section-title__title"> BUYER POST</h2>
                    <div className="section-title__line" />
                  </div>

                  <div className="main-seller-box">
                    <div className="main-seller-contain">
                      <div>
                        <div className="title-button">
                          <div className="seller-title">
                            <h4>GALAXY CERAMIC</h4>
                          </div>
                          <div className="seller-details__buttons">
                            <a href="cart.html" className="seller-thm-btn">
                              Dealer
                            </a>
                          </div>
                        </div>
                        <div className="title-description">
                          <p>Orissa Pan</p>
                          <div className="seller-title">
                            <h4>Standard</h4>
                          </div>
                          <p>Quantity: 500 Pcs</p>
                        </div>
                      </div>
                      <div className="main-seller-img-section">
                        <div className="main-seller-img">
                          <img src="assets/img/seller-post/demo.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-seller-box">
                    <div className="main-seller-contain">
                      <div>
                        <div className="title-button">
                          <div className="seller-title">
                            <h4>GALAXY CERAMIC</h4>
                          </div>
                          <div className="seller-details__buttons">
                            <a href="cart.html" className="seller-thm-btn">
                              Dealer
                            </a>
                          </div>
                        </div>
                        <div className="title-description">
                          <p>Orissa Pan</p>
                          <div className="seller-title">
                            <h4>Standard</h4>
                          </div>
                          <p>Quantity: 500 Pcs</p>
                        </div>
                      </div>
                      <div className="main-seller-img-section">
                        <div className="main-seller-img">
                          <img src="assets/img/seller-post/demo.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="main-seller-details">
                    <div className="seller-details_content">
                      <div className="seller-details__post-img">
                        <img src="assets/img/buyer-post/buyer.jpeg" alt=" " />
                      </div>
                      <div className="title-button">
                        <div className="seller-title">
                          <h4>Mir Trading Enterprises</h4>
                        </div>
                        <div className="seller-details__buttons">
                          <a href="cart.html" className="seller-thm-btn">
                            Dealer
                          </a>
                        </div>
                      </div>
                      <div className="title-description">
                        <p>Orissa Pan</p>
                        <div className="seller-title">
                          <h4>Standard</h4>
                        </div>
                        <p>Quantity: 500 Pcs</p>
                      </div>
                    </div>
                  </div>
                  <div className="main-seller-details">
                    <div className="seller-details_content">
                      <div className="seller-details__post-img">
                        <img src="assets/img/buyer-post/buyer.jpeg" alt=" " />
                      </div>
                      <div className="title-button">
                        <div className="seller-title">
                          <h4>Mir Trading Enterprises</h4>
                        </div>
                        <div className="seller-details__buttons">
                          <a href="cart.html" className="seller-thm-btn">
                            Dealer
                          </a>
                        </div>
                      </div>
                      <div className="title-description">
                        <p>Orissa Pan</p>
                        <div className="seller-title">
                          <h4>Standard</h4>
                        </div>
                        <p>Quantity: 500 Pcs</p>
                      </div>
                    </div>
                  </div>
                  <div className="main-seller-details">
                    <div className="seller-details_content">
                      <div className="seller-details__post-img">
                        <img src="assets/img/buyer-post/buyer.jpeg" alt=" " />
                      </div>
                      <div className="title-button">
                        <div className="seller-title">
                          <h4>Mir Trading Enterprises</h4>
                        </div>
                        <div className="seller-details__buttons">
                          <a href="cart.html" className="seller-thm-btn">
                            Dealer
                          </a>
                        </div>
                      </div>
                      <div className="title-description">
                        <p>Orissa Pan</p>
                        <div className="seller-title">
                          <h4>Standard</h4>
                        </div>
                        <p>Quantity: 500 Pcs</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
          <section className="project-one">
            <div className="container">
              <div className="team-one__top">
                <div className="row">
                  <div className="col-xl-7 col-lg-6">
                    <div className="team-one__top-left">
                      <div className="section-title text-left">
                        <span className="section-title__tagline">
                          Team members
                        </span>
                        <h2 className="section-title__title">
                          Meet the Expert Team
                        </h2>
                        <div className="section-title__line" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6">
                    <div className="team-one__top-right">
                      <p className="team-one__top-text">
                        Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
                        to incidut labore et dolore magna for aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-one__bottom">
                <div className="row">
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="team-one__single">
                      <div className="team-one__img-box">
                        <div className="team-one__img">
                          <img src="assets/images/team/team-1-1.jpg" alt="" />
                          <div className="team-one__social">
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
                      <div className="team-one__content">
                        <div className="team-one__title-box">
                          <div className="team-one__title-shape">
                            <img
                              src="assets/images/shapes/team-one-title-box-shape.png"
                              alt=""
                            />
                            <div className="team-one__title-text">
                              <p className="team-one__title">Designer</p>
                            </div>
                          </div>
                        </div>
                        <h3 className="team-one__name">
                          <Link href="team-details.html">David Cooper</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="team-one__single">
                      <div className="team-one__img-box">
                        <div className="team-one__img">
                          <img src="assets/images/team/team-1-2.jpg" alt="" />
                          <div className="team-one__social">
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
                      <div className="team-one__content">
                        <div className="team-one__title-box">
                          <div className="team-one__title-shape">
                            <img
                              src="assets/images/shapes/team-one-title-box-shape.png"
                              alt=""
                            />
                            <div className="team-one__title-text">
                              <p className="team-one__title">Designer</p>
                            </div>
                          </div>
                        </div>
                        <h3 className="team-one__name">
                          <Link href="team-details.html">Monica Manly</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="team-one__single">
                      <div className="team-one__img-box">
                        <div className="team-one__img">
                          <img src="assets/images/team/team-1-3.jpg" alt="" />
                          <div className="team-one__social">
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
                      <div className="team-one__content">
                        <div className="team-one__title-box">
                          <div className="team-one__title-shape">
                            <img
                              src="assets/images/shapes/team-one-title-box-shape.png"
                              alt=""
                            />
                            <div className="team-one__title-text">
                              <p className="team-one__title">Designer</p>
                            </div>
                          </div>
                        </div>
                        <h3 className="team-one__name">
                          <Link href="team-details.html">Kevin Martin</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="testimonial-one">
            <div className="testimonial-one-bg-box">
              <div
                className="testimonial-one-bg jarallax"
                data-jarallax=""
                data-speed="0.2"
                data-imgposition="50% 0%"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/testimonial-one-bg.jpg)",
                }}
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-3">
                  <div className="testimonial-one__left">
                    <div className="section-title text-left">
                      <span className="section-title__tagline">
                        testimonials
                      </span>
                      <h2 className="section-title__title">
                        What Our Customers Say?
                      </h2>
                      <div className="section-title__line" />
                    </div>
                    <p className="testimonial-one__text">
                      Lorem ipsum dolor sit amet elit, sed do eiusmod tempor to
                      incidut labore et dolore magna for aliqua.
                    </p>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="testimonial-one__right">
                    <div
                      className="owl-carousel owl-theme thm-owl__carousel testimonial-one__carousel"
                      data-owl-options='{
                          "loop": true,
                          "autoplay": false,
                          "margin": 30,
                          "nav": false,
                          "dots": true,
                          "smartSpeed": 500,
                          "autoplayTimeout": 10000,
                          "navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
                          "responsive": {
                              "0": {
                                  "items": 1
                              },
                              "768": {
                                  "items": 1
                              },
                              "992": {
                                  "items": 2
                              },
                              "1200": {
                                  "items": 2.25545
                              }
                          }
                      }'
                    >
                      <div className="testimonial-one__single">
                        <div className="testimonial-one__quote">
                          <span className="icon-quotation" />
                        </div>
                        <p className="testimonial-one__text-2">
                          Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
                          to incidut labore et dolore magna for aliqua. Quis
                          ipsum suspendisse.
                        </p>
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__img">
                            <img
                              src="assets/images/testimonial/testimonial-1-1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="testimonial-one__client-content">
                            <h4 className="testimonial-one__client-name">
                              John Smith
                            </h4>
                            <p className="testimonial-one__client-title">
                              Our Customer
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="testimonial-one__single">
                        <div className="testimonial-one__quote">
                          <span className="icon-quotation" />
                        </div>
                        <p className="testimonial-one__text-2">
                          Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
                          to incidut labore et dolore magna for aliqua. Quis
                          ipsum suspendisse.
                        </p>
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__img">
                            <img
                              src="assets/images/testimonial/testimonial-1-2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="testimonial-one__client-content">
                            <h4 className="testimonial-one__client-name">
                              Sarah Albert
                            </h4>
                            <p className="testimonial-one__client-title">
                              Our Customer
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="testimonial-one__single">
                        <div className="testimonial-one__quote">
                          <span className="icon-quotation" />
                        </div>
                        <p className="testimonial-one__text-2">
                          Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
                          to incidut labore et dolore magna for aliqua. Quis
                          ipsum suspendisse.
                        </p>
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__img">
                            <img
                              src="assets/images/testimonial/testimonial-1-3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="testimonial-one__client-content">
                            <h4 className="testimonial-one__client-name">
                              Kevin Martin
                            </h4>
                            <p className="testimonial-one__client-title">
                              Our Customer
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="testimonial-one__single">
                        <div className="testimonial-one__quote">
                          <span className="icon-quotation" />
                        </div>
                        <p className="testimonial-one__text-2">
                          Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
                          to incidut labore et dolore magna for aliqua. Quis
                          ipsum suspendisse.
                        </p>
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__img">
                            <img
                              src="assets/images/testimonial/testimonial-1-1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="testimonial-one__client-content">
                            <h4 className="testimonial-one__client-name">
                              John Smith
                            </h4>
                            <p className="testimonial-one__client-title">
                              Our Customer
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="testimonial-one__single">
                        <div className="testimonial-one__quote">
                          <span className="icon-quotation" />
                        </div>
                        <p className="testimonial-one__text-2">
                          Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
                          to incidut labore et dolore magna for aliqua. Quis
                          ipsum suspendisse.
                        </p>
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__img">
                            <img
                              src="assets/images/testimonial/testimonial-1-2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="testimonial-one__client-content">
                            <h4 className="testimonial-one__client-name">
                              Sarah Albert
                            </h4>
                            <p className="testimonial-one__client-title">
                              Our Customer
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="testimonial-one__single">
                        <div className="testimonial-one__quote">
                          <span className="icon-quotation" />
                        </div>
                        <p className="testimonial-one__text-2">
                          Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
                          to incidut labore et dolore magna for aliqua. Quis
                          ipsum suspendisse.
                        </p>
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__img">
                            <img
                              src="assets/images/testimonial/testimonial-1-3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="testimonial-one__client-content">
                            <h4 className="testimonial-one__client-name">
                              Kevin Martin
                            </h4>
                            <p className="testimonial-one__client-title">
                              Our Customer
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="testimonial-one__single">
                        <div className="testimonial-one__quote">
                          <span className="icon-quotation" />
                        </div>
                        <p className="testimonial-one__text-2">
                          Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
                          to incidut labore et dolore magna for aliqua. Quis
                          ipsum suspendisse.
                        </p>
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__img">
                            <img
                              src="assets/images/testimonial/testimonial-1-1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="testimonial-one__client-content">
                            <h4 className="testimonial-one__client-name">
                              John Smith
                            </h4>
                            <p className="testimonial-one__client-title">
                              Our Customer
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="testimonial-one__single">
                        <div className="testimonial-one__quote">
                          <span className="icon-quotation" />
                        </div>
                        <p className="testimonial-one__text-2">
                          Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
                          to incidut labore et dolore magna for aliqua. Quis
                          ipsum suspendisse.
                        </p>
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__img">
                            <img
                              src="assets/images/testimonial/testimonial-1-2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="testimonial-one__client-content">
                            <h4 className="testimonial-one__client-name">
                              Sarah Albert
                            </h4>
                            <p className="testimonial-one__client-title">
                              Our Customer
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="testimonial-one__single">
                        <div className="testimonial-one__quote">
                          <span className="icon-quotation" />
                        </div>
                        <p className="testimonial-one__text-2">
                          Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
                          to incidut labore et dolore magna for aliqua. Quis
                          ipsum suspendisse.
                        </p>
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__img">
                            <img
                              src="assets/images/testimonial/testimonial-1-3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="testimonial-one__client-content">
                            <h4 className="testimonial-one__client-name">
                              Kevin Martin
                            </h4>
                            <p className="testimonial-one__client-title">
                              Our Customer
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="brand-one">
            <div className="container">
              <div className="brand-one__inner">
                <div className="row">
                  <div className="col-xl-3">
                    <div className="brand-one__title">
                      <h2>Trusted by More then 8800 Most Popular Brands</h2>
                    </div>
                  </div>
                  <div className="col-xl-9">
                    <div className="brand-one__main-content">
                      <div
                        className="thm-swiper__slider swiper-container"
                        data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
                      "0": {
                          "spaceBetween": 30,
                          "slidesPerView": 2
                      },
                      "375": {
                          "spaceBetween": 30,
                          "slidesPerView": 2
                      },
                      "575": {
                          "spaceBetween": 30,
                          "slidesPerView": 3
                      },
                      "767": {
                          "spaceBetween": 50,
                          "slidesPerView": 4
                      },
                      "991": {
                          "spaceBetween": 50,
                          "slidesPerView": 5
                      },
                      "1199": {
                          "spaceBetween": 100,
                          "slidesPerView": 5
                      }
                  }}'
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <img
                              src="assets/images/brand/brand-1-1.png"
                              alt=""
                            />
                          </div>

                          <div className="swiper-slide">
                            <img
                              src="assets/images/brand/brand-1-2.png"
                              alt=""
                            />
                          </div>

                          <div className="swiper-slide">
                            <img
                              src="assets/images/brand/brand-1-3.png"
                              alt=""
                            />
                          </div>

                          <div className="swiper-slide">
                            <img
                              src="assets/images/brand/brand-1-4.png"
                              alt=""
                            />
                          </div>

                          <div className="swiper-slide">
                            <img
                              src="assets/images/brand/brand-1-5.png"
                              alt=""
                            />
                          </div>

                          <div className="swiper-slide">
                            <img
                              src="assets/images/brand/brand-1-1.png"
                              alt=""
                            />
                          </div>

                          <div className="swiper-slide">
                            <img
                              src="assets/images/brand/brand-1-2.png"
                              alt=""
                            />
                          </div>

                          <div className="swiper-slide">
                            <img
                              src="assets/images/brand/brand-1-3.png"
                              alt=""
                            />
                          </div>

                          <div className="swiper-slide">
                            <img
                              src="assets/images/brand/brand-1-4.png"
                              alt=""
                            />
                          </div>

                          <div className="swiper-slide">
                            <img
                              src="assets/images/brand/brand-1-5.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="blog-one">
            <div className="container">
              <div className="section-title text-center">
                <span className="section-title__tagline">
                  News &amp; Updates
                </span>
                <h2 className="section-title__title">News &amp; Articles</h2>
                <div className="section-title__line" />
              </div>
              <div className="row">
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="blog-one__single">
                    <div className="blog-one__img">
                      <img src="assets/images/blog/blog-1-1.jpg" alt="" />
                      <Link href="blog-details.html">
                        <span className="blog-one__plus" />
                      </Link>
                    </div>
                    <div className="blog-one__content">
                      <div className="blog-one__date">
                        <p>20 Feb, 2022</p>
                      </div>
                      <ul className="list-unstyled blog-one__meta">
                        <li>
                          <Link href="blog-details.html">
                            <i className="far fa-user-circle" /> by Admin
                          </Link>
                        </li>
                        <li>
                          <span>/</span>
                        </li>
                        <li>
                          <Link href="blog-details.html">
                            <i className="far fa-comments" /> 02 Comments
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-one__title">
                        <Link href="blog-details.html">
                          Learn the Right Way to Use Wall Sheet
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="blog-one__single">
                    <div className="blog-one__img">
                      <img src="assets/images/blog/blog-1-2.jpg" alt="" />
                      <Link href="blog-details.html">
                        <span className="blog-one__plus" />
                      </Link>
                    </div>
                    <div className="blog-one__content">
                      <div className="blog-one__date">
                        <p>20 Feb, 2022</p>
                      </div>
                      <ul className="list-unstyled blog-one__meta">
                        <li>
                          <Link href="blog-details.html">
                            <i className="far fa-user-circle" /> by Admin
                          </Link>
                        </li>
                        <li>
                          <span>/</span>
                        </li>
                        <li>
                          <Link href="blog-details.html">
                            <i className="far fa-comments" /> 02 Comments
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-one__title">
                        <Link href="blog-details.html">
                          Leverage agile frameworks to provide
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="blog-one__single">
                    <div className="blog-one__img">
                      <img src="assets/images/blog/blog-1-3.jpg" alt="" />
                      <Link href="blog-details.html">
                        <span className="blog-one__plus" />
                      </Link>
                    </div>
                    <div className="blog-one__content">
                      <div className="blog-one__date">
                        <p>20 Feb, 2022</p>
                      </div>
                      <ul className="list-unstyled blog-one__meta">
                        <li>
                          <Link href="blog-details.html">
                            <i className="far fa-user-circle" /> by Admin
                          </Link>
                        </li>
                        <li>
                          <span>/</span>
                        </li>
                        <li>
                          <Link href="blog-details.html">
                            <i className="far fa-comments" /> 02 Comments
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-one__title">
                        <Link href="blog-details.html">
                          Bring to the table win-win survival strategis
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
