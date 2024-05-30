import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

function ForgetPassword() {
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
                    <a href="index-2.html">Home</a>
                  </li>
                  <li>
                    <span>/</span>
                  </li>
                  <li>FORGOT PASSWORD</li>
                </ul>
                <h2>FORGOT PASSWORD</h2>
              </div>
            </div>
          </section>
          <section className="checkout-page">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 offset-xl-3 offset-lg-3">
                  <div className="billing_details">
                    <div className="billing_title">
                      <p>
                        Returning Customer?
                        <span>
                          <Link to="/auth" className="Click-login">
                            {" "}
                            Click here to Login
                          </Link>
                        </span>
                      </p>
                      <h2>FORGOT PASSWORD</h2>
                    </div>
                    <form className="billing_details_form">
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="billing_input_box">
                            <input
                              type="email"
                              name="email"
                              defaultValue=""
                              placeholder="Email Address"
                              required=""
                              autoComplete="off"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-right d-flex mt-4">
                        <Link className="thm-btn">Forgot Password</Link>
                      </div>
                    </form>
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

export default ForgetPassword;
