import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import "../css/auth.css";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import axios from "axios";
import { BASE_URL, BASE_URL_S } from "../components/ApiConfig/apiConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [RegisterRole, setRegisterRole] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [SelectedRole, setSelectedRole] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [SelectedDistrict, setSelectedDistrict] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [whatsappNo, setwhatsappNo] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Address, setAddress] = useState("");

  const [emailLogin, setemailLogin] = useState("");
  const [passwordLogin, setpasswordLogin] = useState("");

  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [loginformErrors, setloginformErrors] = useState({});
  // localStorage.clear();

  // const userDetail = JSON.parse(localStorage.getItem("login_id"));
  // {
  //   userDetail && navigate("/");
  // }

  const handleLogin = (e) => {
    e.preventDefault();
    const loginerrors = loginvalidateForm();
    if (Object.keys(loginerrors).length === 0) {
      try {
        var formData = new FormData();
        formData.append("service", "login");
        formData.append("email", emailLogin);
        formData.append("password", passwordLogin);
        axios
          .post(BASE_URL, formData)
          .then((response) => {
            setloginformErrors(loginerrors);
            if (response.data.ack !== 0) {
              localStorage.setItem("login_id", response.data.register.id);
              localStorage.setItem(
                "user",
                JSON.stringify(response.data.register)
              );
              localStorage.setItem(
                "login_role_id",
                response.data.register.register_role_id
              );

              // navigate("/", { state: { message: response.data.ack_msg } });
              navigate("/", {
                state: { message: response.data.ack_msg },
              });
              setemailLogin("");
              setpasswordLogin("");
            } else {
              toast.error(response.data.ack_msg, { autoClose: 1000 });
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      setloginformErrors(loginerrors);
    }
  };
  let handleRegister = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        var formData = new FormData();
        formData.append("service", "register");
        formData.append("register_role_id", SelectedRole);
        formData.append("company_name", companyName);
        formData.append("whatsapp_no", whatsappNo);
        formData.append("phone_no", phoneNo);
        formData.append("email", Email);
        formData.append("password", Password);
        formData.append("country_id", selectedCountry);
        formData.append("state_id", selectedState);
        formData.append("district_id", SelectedDistrict);
        formData.append("address", Address);
        await axios
          .post("http://192.168.1.13/tiles-backend/api.php", formData)
          .then((response) => {
            setFormErrors(errors);
            if (response.data.ack !== 0) {
              toast.success(response.data.ack_msg, { autoClose: 1000 });
              localStorage.setItem("register_id", response.data.register.id);
              localStorage.setItem(
                "register_role_id",
                response.data.register.register_role_id
              );
              setSelectedRole("");
              setcompanyName("");
              setwhatsappNo("");
              setphoneNo("");
              setEmail("");
              setPassword("");
              setSelectedCountry("");
              setSelectedState("");
              setSelectedDistrict("");
              setAddress("");
              // navigate("/");
            } else {
              toast.error(response.data.ack_msg, { autoClose: 1000 });
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      setFormErrors(errors);
    }
  };

  // const storedData = localStorage.getItem("register_id");
  // console.log(storedData);

  useEffect(() => {
    axios
      .get(BASE_URL_S + "register_role")
      .then((res) => res.data)
      .then((finalres) => {
        if (finalres.ack !== 0) {
          setRegisterRole(finalres.register_role);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    axios
      .get(BASE_URL_S + "countries")
      .then((res) => res.data)
      .then((finalres) => {
        if (finalres.ack !== 0) {
          setCountries(finalres.countries);
        }
      });
  }, []);

  const fetchStates = (countryId) => {
    axios
      .get(BASE_URL_S + `states&country_id=${countryId}`)
      .then((res) => res.data)
      .then((finalres) => {
        if (finalres.ack !== 0) {
          setStates(finalres.states);
        }
      });
  };

  const fetchDistricts = (stateId) => {
    axios
      .get(BASE_URL_S + `cities&state_id=${stateId}`)
      .then((res) => res.data)
      .then((finalres) => {
        if (finalres.ack !== 0) {
          setDistricts(finalres.cities);
        }
      });
  };

  const handleCountryChange = (e) => {
    const countryId = e.target.value;
    if (countryId !== "") {
      setSelectedCountry(countryId);
      setSelectedState("");
      fetchStates(countryId);
    }
  };

  const handleStateChange = (e) => {
    const stateId = e.target.value;
    if (stateId !== "") {
      setSelectedState(stateId);
      fetchDistricts(stateId);
    }
  };
  const [readOnly, setReadOnly] = useState(true);

  const validateForm = () => {
    const errors = {};
    if (!SelectedRole) {
      errors.SelectedRole = "Role is required";
    }
    if (!companyName) {
      errors.companyName = "Company Name is required";
    }
    if (!whatsappNo) {
      errors.whatsappNo = "Whatsapp Num is required";
    }
    if (!phoneNo) {
      errors.phoneNo = "Phone Num is required";
    }
    if (!Email) {
      errors.Email = "Email is required";
    } else if (!validateEmail(Email)) {
      errors.Email = "Invalid email format";
    }
    if (!Password) {
      errors.Password = "Password is required";
    }
    if (!selectedCountry) {
      errors.selectedCountry = "Country is required";
    }
    if (!selectedState) {
      errors.selectedState = "State is required";
    }
    if (!SelectedDistrict) {
      errors.SelectedDistrict = "District is required";
    }
    if (!Address) {
      errors.Address = "Address is required";
    }
    return errors;
  };

  const loginvalidateForm = () => {
    const loginerrors = {};
    if (!emailLogin) {
      loginerrors.emailLogin = "Email is required";
    } else if (!validateEmail(emailLogin)) {
      loginerrors.emailLogin = "Invalid email format";
    }
    if (!passwordLogin) {
      loginerrors.passwordLogin = "Password is required";
    }
    return loginerrors;
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
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
                    <a href="index-2.html">Home</a>
                  </li>
                  <li>
                    <span>/</span>
                  </li>
                  <li>Login</li>
                </ul>
                <h2>Login - Register</h2>
              </div>
            </div>
          </section>
          <section className="checkout-page">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="billing_details">
                    <div className="billing_title">
                      <h2>LOGIN</h2>
                    </div>
                    <form
                      onSubmit={handleLogin}
                      className="billing_details_form"
                    >
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="billing_input_box">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              readOnly={readOnly}
                              onFocus={() => setReadOnly(false)}
                              onBlur={() => setReadOnly(true)}
                              value={emailLogin}
                              onChange={(e) => setemailLogin(e.target.value)}
                            />
                            {loginformErrors.emailLogin && (
                              <label className="error error-color">
                                {loginformErrors.emailLogin}
                              </label>
                            )}
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="billing_input_box">
                            <input
                              type="password"
                              name="password"
                              placeholder="Password"
                              value={passwordLogin}
                              onChange={(e) => setpasswordLogin(e.target.value)}
                            />
                            {loginformErrors.passwordLogin && (
                              <label className="error error-color">
                                {loginformErrors.passwordLogin}
                              </label>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right d-flex justify-content-end">
                        <Link to="/forgot-password" className="Forgot-Password">
                          <span>Forgot Password ?</span>
                        </Link>
                      </div>
                      <div className="text-right d-flex justify-content-end mt-2">
                        <button type="submit" className="thm-btn">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="billing_details">
                    <div className="billing_title">
                      <h2>REGISTER</h2>
                    </div>
                    <form
                      className="billing_details_form"
                      onSubmit={handleRegister}
                    >
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="billing_input_box select-box customerStyle">
                            <select
                              className="nice-select wide mb-0 float-none selectCustomer"
                              value={SelectedRole}
                              onChange={(e) => {
                                setSelectedRole(e.target.value);
                              }}
                            >
                              <option value="" className="list option">
                                Please Select Role
                              </option>
                              {RegisterRole.map((v, i) => (
                                <option
                                  className="list option"
                                  key={i}
                                  value={v.id}
                                >
                                  {v.name}
                                </option>
                              ))}
                            </select>
                            {formErrors.SelectedRole && (
                              <label className="error error-color">
                                {formErrors.SelectedRole}
                              </label>
                            )}
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="billing_input_box">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              value={Email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              readOnly={readOnly}
                              onFocus={() => setReadOnly(false)}
                              onBlur={() => setReadOnly(true)}
                            />
                            {formErrors.Email && (
                              <label className="error error-color">
                                {formErrors.Email}
                              </label>
                            )}
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="billing_input_box">
                            <input
                              type="password"
                              name="password"
                              placeholder="password"
                              value={Password}
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            />
                            {formErrors.Password && (
                              <label className="error error-color">
                                {formErrors.Password}
                              </label>
                            )}
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
                              value={companyName}
                              onChange={(e) => {
                                setcompanyName(e.target.value);
                              }}
                            />
                            {formErrors.companyName && (
                              <label className="error error-color">
                                {formErrors.companyName}
                              </label>
                            )}
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="billing_input_box">
                            <input
                              type="text"
                              name="phone_no"
                              placeholder="Phone Number"
                              required=""
                              value={phoneNo}
                              onChange={(e) => {
                                const onlyDigits = e.target.value.replace(
                                  /\D/g,
                                  ""
                                );
                                setphoneNo(onlyDigits);
                              }}
                            />
                            {formErrors.phoneNo && (
                              <label className="error error-color">
                                {formErrors.phoneNo}
                              </label>
                            )}
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
                              value={whatsappNo}
                              onChange={(e) => {
                                const onlyDigits = e.target.value.replace(
                                  /\D/g,
                                  ""
                                );
                                setwhatsappNo(onlyDigits);
                              }}
                            />
                            {formErrors.whatsappNo && (
                              <label className="error error-color">
                                {formErrors.whatsappNo}
                              </label>
                            )}
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="billing_input_box select-box customerStyle">
                            <select
                              value={selectedCountry}
                              onChange={handleCountryChange}
                              className="nice-select wide mb-0 float-none selectCustomer"
                            >
                              <option value="" className="list option">
                                Please Select Country
                              </option>
                              {countries.map((v, i) => (
                                <option
                                  className="list option"
                                  key={i}
                                  value={v.id}
                                >
                                  {v.name}
                                </option>
                              ))}
                            </select>
                            {formErrors.selectedCountry && (
                              <label className="error error-color">
                                {formErrors.selectedCountry}
                              </label>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row bs-gutter-x-20">
                        <div className="col-xl-6">
                          <div className="billing_input_box select-box customerStyle">
                            <select
                              value={selectedState}
                              onChange={handleStateChange}
                              className="nice-select wide mb-0 float-none selectCustomer"
                            >
                              <option value="" className="list option">
                                Please Select State
                              </option>
                              {states.map((v, i) => (
                                <option
                                  className="list option"
                                  key={i}
                                  value={v.id}
                                >
                                  {v.name}
                                </option>
                              ))}
                            </select>
                            {formErrors.selectedState && (
                              <label className="error error-color">
                                {formErrors.selectedState}
                              </label>
                            )}
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="billing_input_box select-box customerStyle">
                            <select
                              className="nice-select wide mb-0 float-none selectCustomer"
                              value={SelectedDistrict}
                              onChange={(e) => {
                                setSelectedDistrict(e.target.value);
                              }}
                            >
                              <option value="" className="list option">
                                Please Select District
                              </option>
                              {districts.map((v, i) => (
                                <option
                                  key={v.id}
                                  value={v.id}
                                  className="list option"
                                >
                                  {v.name}
                                </option>
                              ))}
                            </select>
                            {formErrors.SelectedDistrict && (
                              <label className="error error-color">
                                {formErrors.SelectedDistrict}
                              </label>
                            )}
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
                              value={Address}
                              onChange={(e) => {
                                setAddress(e.target.value);
                              }}
                            />
                            {formErrors.Address && (
                              <label className="error error-color">
                                {formErrors.Address}
                              </label>
                            )}
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
}

export default Auth;
