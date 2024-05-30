import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

const BuyerPostCreate = () => {
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
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <span>/</span>
                  </li>
                  <li>Buyer Post Create</li>
                </ul>
                <h2>Buyer Post Create</h2>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default BuyerPostCreate;
