import React from "react";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import DirectorySection from "../components/directory-section/DirectorySection";

function Directory() {
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
                  <li>DIRECTORY</li>
                </ul>
                <h2>DIRECTORY</h2>
              </div>
            </div>
          </section>
          <DirectorySection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Directory;
