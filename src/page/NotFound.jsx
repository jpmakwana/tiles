import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <div className="custom-cursor">
        <div className="page-wrapper">
          <Header />
          <section className="page-header">
            <div
              className="page-header-bg"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/page-header-bg.jpg)",
              }}
            ></div>
            <div className="container">
              <div className="page-header__inner">
                <ul className="thm-breadcrumb list-unstyled">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <span>/</span>
                  </li>
                  <li>404 Error</li>
                </ul>
                <h2>404 Error</h2>
              </div>
            </div>
          </section>
          <section className="error-page">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="error-page__inner">
                    <div className="error-page__title-box">
                      <h2 className="error-page__title">404</h2>
                    </div>
                    <h3 className="error-page__tagline">
                      Sorry we can't find that page!
                    </h3>
                    <p className="error-page__text">
                      The page you are looking for was never existed.
                    </p>
                    <Link to="/" className="thm-btn error-page__btn mt-5">
                      Back to Home
                    </Link>
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
};
