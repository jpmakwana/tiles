import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";

const SellerPostCreate = () => {
  const [selectedOption, setSelectedOption] = useState("tiles");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
                  <li>Seller Post Create</li>
                </ul>
                <h2>Seller Post Create</h2>
              </div>
            </div>
          </section>
          <section className="checkout-page">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                  <div className="billing_details">
                    <div className="billing_title">
                      <h2>SALLER POST</h2>
                    </div>
                    <form
                      className="billing_details_form"
                      // onSubmit={handleRegister}
                    >
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="billing_input_box">
                            <input
                              type="radio"
                              name="option"
                              value="tiles"
                              checked={selectedOption === "tiles"}
                              onChange={handleOptionChange}
                            />{" "}
                            Tiles
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="billing_input_box">
                            <input
                              type="radio"
                              name="option"
                              value="sanitary"
                              checked={selectedOption === "sanitary"}
                              onChange={handleOptionChange}
                            />{" "}
                            Sanitary & Various
                          </div>
                        </div>

                        {selectedOption === "tiles" && (
                          <>
                            <div className="col-xl-6">
                              <div className="billing_input_box">
                                <input
                                  type="text"
                                  name="rate"
                                  placeholder="Rate"
                                />
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="billing_input_box select-box customerStyle">
                                <select className="nice-select wide mb-0 float-none selectCustomer">
                                  <option value="" className="list option">
                                    Select unit
                                  </option>
                                  <option className="list option">Box</option>
                                  <option className="list option">
                                    Sq. Mtr.
                                  </option>
                                  <option className="list option">
                                    Sq. Ft.
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="billing_input_box select-box customerStyle">
                                <select className="nice-select wide mb-0 float-none selectCustomer">
                                  <option value="" className="list option">
                                    Select Tax
                                  </option>
                                  <option className="list option">
                                    Tax Paid
                                  </option>
                                  <option className="list option">
                                    Tax Extra
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="billing_input_box select-box customerStyle">
                                <select className="nice-select wide mb-0 float-none selectCustomer">
                                  <option value="" className="list option">
                                    Select Product Name
                                  </option>
                                  <option value="" hidden>
                                    Select Product Name
                                  </option>
                                  <option value="1">Ordinary Wall Tiles</option>
                                  <option value="2">Digital Wall Tiles</option>
                                  <option value="3">Ceramic Floor Tiles</option>
                                  <option value="4">Slab Marble Tiles</option>
                                  <option value="7">
                                    Polished Glaze Vitrified Tiles
                                  </option>
                                  <option value="8">
                                    Digital Parking Tiles
                                  </option>
                                  <option value="9">Porcelain tiles</option>
                                  <option value="14">
                                    Ivory Terracotta Parking
                                  </option>
                                  <option value="17">
                                    Double charge Vitrfied Tiles
                                  </option>
                                  <option value="18">
                                    Nano Vitrified Tiles
                                  </option>
                                  <option value="19">
                                    Full Body Vitrified Tiles
                                  </option>
                                  <option value="20">
                                    High depth Elevation tiles
                                  </option>
                                  <option value="21">
                                    Subway Mosaic Tiles
                                  </option>
                                  <option value="22">Wodden Strip Tiles</option>
                                  <option value="23">GSVT</option>
                                </select>
                              </div>
                            </div>
                          </>
                        )}

                        {selectedOption === "sanitary" && (
                          <>
                            <div className="col-xl-6">
                              <div className="billing_input_box">
                                <input
                                  type="text"
                                  name="rate"
                                  placeholder="Rate"
                                />
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="billing_input_box select-box customerStyle">
                                <select
                                  // value={selectedCountry}
                                  // onChange={handleCountryChange}
                                  className="nice-select wide mb-0 float-none selectCustomer"
                                >
                                  <option value="" className="list option">
                                    Select unit
                                  </option>

                                  <option className="list option">Pcs</option>
                                  <option className="list option">Set</option>
                                  <option className="list option">
                                    Bundle
                                  </option>
                                </select>
                              </div>
                            </div>
                          </>
                        )}

                        <div className="col-xl-12">
                          <div className="billing_input_box select-box customerStyle">
                            <select
                              className="nice-select wide mb-0 float-none selectCustomer"
                              // value={SelectedRole}
                              // onChange={(e) => {
                              //   setSelectedRole(e.target.value);
                              // }}
                            >
                              <option value="" className="list option">
                                Please Select Role
                              </option>
                              {/* {RegisterRole.map((v, i) => (
                                <option
                                  className="list option"
                                  key={i}
                                  value={v.id}
                                >
                                  {v.name}
                                </option>
                              ))} */}
                            </select>
                            {/* {formErrors.SelectedRole && (
                              <label className="error error-color">
                                {formErrors.SelectedRole}
                              </label>
                            )} */}
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="billing_input_box">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              // value={Email}
                              // onChange={(e) => {
                              //   setEmail(e.target.value);
                              // }}
                              // readOnly={readOnly}
                              // onFocus={() => setReadOnly(false)}
                              // onBlur={() => setReadOnly(true)}
                            />
                            {/* {formErrors.Email && (
                              <label className="error error-color">
                                {formErrors.Email}
                              </label>
                            )} */}
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="billing_input_box">
                            <input
                              type="password"
                              name="password"
                              placeholder="password"
                              // value={Password}
                              // onChange={(e) => {
                              //   setPassword(e.target.value);
                              // }}
                            />
                            {/* {formErrors.Password && (
                              <label className="error error-color">
                                {formErrors.Password}
                              </label>
                            )} */}
                          </div>
                        </div>
                      </div>
                      <div className="row bs-gutter-x-20">
                        <div className="col-xl-6">
                          <div className="billing_input_box">
                            <input
                              type="text"
                              name="company_name"
                              placeholder="Company Name"
                              required=""
                              // value={companyName}
                              // onChange={(e) => {
                              //   setcompanyName(e.target.value);
                              // }}
                            />
                            {/* {formErrors.companyName && (
                              <label className="error error-color">
                                {formErrors.companyName}
                              </label>
                            )} */}
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="billing_input_box">
                            <input
                              type="text"
                              name="phone_no"
                              placeholder="Phone Number"
                              required=""
                              // value={phoneNo}
                              // onChange={(e) => {
                              //   const onlyDigits = e.target.value.replace(
                              //     /\D/g,
                              //     ""
                              //   );
                              //   setphoneNo(onlyDigits);
                              // }}
                            />
                            {/* {formErrors.phoneNo && (
                              <label className="error error-color">
                                {formErrors.phoneNo}
                              </label>
                            )} */}
                          </div>
                        </div>
                      </div>
                      <div className="row bs-gutter-x-20">
                        <div className="col-xl-6">
                          <div className="billing_input_box">
                            <input
                              type="tel"
                              name="whatsapp_no"
                              minLength="10"
                              maxLength="10"
                              placeholder="Whatsapp Number"
                              required=""
                              // value={whatsappNo}
                              // onChange={(e) => {
                              //   const onlyDigits = e.target.value.replace(
                              //     /\D/g,
                              //     ""
                              //   );
                              //   setwhatsappNo(onlyDigits);
                              // }}
                            />
                            {/* {formErrors.whatsappNo && (
                              <label className="error error-color">
                                {formErrors.whatsappNo}
                              </label>
                            )} */}
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="billing_input_box select-box customerStyle">
                            <select
                              // value={selectedCountry}
                              // onChange={handleCountryChange}
                              className="nice-select wide mb-0 float-none selectCustomer"
                            >
                              <option value="" className="list option">
                                Please Select Country
                              </option>
                              {/* {countries.map((v, i) => (
                                <option
                                  className="list option"
                                  key={i}
                                  value={v.id}
                                >
                                  {v.name}
                                </option>
                              ))} */}
                            </select>
                            {/* {formErrors.selectedCountry && (
                              <label className="error error-color">
                                {formErrors.selectedCountry}
                              </label>
                            )} */}
                          </div>
                        </div>
                      </div>
                      <div className="row bs-gutter-x-20">
                        <div className="col-xl-6">
                          <div className="billing_input_box select-box customerStyle">
                            <select
                              // value={selectedState}
                              // onChange={handleStateChange}
                              className="nice-select wide mb-0 float-none selectCustomer"
                            >
                              <option value="" className="list option">
                                Please Select State
                              </option>
                              {/* {states.map((v, i) => (
                                <option
                                  className="list option"
                                  key={i}
                                  value={v.id}
                                >
                                  {v.name}
                                </option>
                              ))} */}
                            </select>
                            {/* {formErrors.selectedState && (
                              <label className="error error-color">
                                {formErrors.selectedState}
                              </label>
                            )} */}
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="billing_input_box select-box customerStyle">
                            <select
                              className="nice-select wide mb-0 float-none selectCustomer"
                              // value={SelectedDistrict}
                              // onChange={(e) => {
                              //   setSelectedDistrict(e.target.value);
                              // }}
                            >
                              <option value="" className="list option">
                                Please Select District
                              </option>
                              {/* {districts.map((v, i) => (
                                <option
                                  key={v.id}
                                  value={v.id}
                                  className="list option"
                                >
                                  {v.name}
                                </option>
                              ))} */}
                            </select>
                            {/* {formErrors.SelectedDistrict && (
                              <label className="error error-color">
                                {formErrors.SelectedDistrict}
                              </label>
                            )} */}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="billing_input_box">
                            <input
                              type="text"
                              name="address"
                              placeholder="Address"
                              // value={Address}
                              // onChange={(e) => {
                              //   setAddress(e.target.value);
                              // }}
                            />
                            {/* {formErrors.Address && (
                              <label className="error error-color">
                                {formErrors.Address}
                              </label>
                            )} */}
                          </div>
                        </div>
                      </div>
                      <div className="text-right d-flex justify-content-end mt-4">
                        <button type="submit" className="thm-btn">
                          Register
                        </button>
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
};

export default SellerPostCreate;
