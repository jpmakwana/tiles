import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  let [Menustatus, setMenustatus] = useState(false);
  let [MenuDropdownstatus, setMenuDropdownstatus] = useState(false);
  let [SearchPopup, setSearchPopup] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsLoggedIn(true);
    }
    // eslint-disable-next-line
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };
  return (
    <>
      <header className="main-header clearfix">
        <div className="main-header__top">
          <div className="container">
            <div className="main-header__top-inner clearfix">
              <div className="main-header__logo">
                <Link to="/">
                  <img
                    src="assets/images/resources/logo-1.png"
                    alt=""
                    className="dark-logo"
                  />
                  <img
                    src="assets/images/resources/logo-2.png"
                    alt=""
                    className="light-logo"
                  />
                </Link>
              </div>
              <div className="main-header__top-right">
                <div className="main-header__top-right-content">
                  <div className="main-header__top-address-box">
                    <ul className="list-unstyled main-header__top-address">
                      <li>
                        <div className="icon">
                          <span className="icon-phone-call" />
                        </div>
                        <div className="content">
                          <p>Call anytime</p>
                          <h5>
                            <Link to="tel:980009630">+ 98 (000) - 9630</Link>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-message" />
                        </div>
                        <div className="content">
                          <p>Send email</p>
                          <h5>
                            <Link to="mailto:ambed@company.com">
                              ambed@company.com
                            </Link>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="icon icon--location">
                          <span className="icon-location" />
                        </div>
                        <div className="content">
                          <p>380 St Kilda Road</p>
                          <h5>Melbourne, Australia</h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="main-header__top-right-login-button">
                    <div className="text-right d-flex justify-content-end mt-2 thm-btn-login">
                      {isLoggedIn ? (
                        <Link className="thm-btn" onClick={handleLogout}>
                          Logout
                        </Link>
                      ) : (
                        <Link to="/auth" className="thm-btn">
                          Login
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="main-menu clearfix">
          <div className="main-menu__wrapper clearfix">
            <div className="container">
              <div className="main-menu__wrapper-inner clearfix">
                <div className="main-menu__left">
                  <div className="main-menu__main-menu-box">
                    <Link
                      className="mobile-nav__toggler"
                      onClick={() => setMenustatus(!Menustatus)}
                    >
                      <i className="fa fa-bars" />
                    </Link>
                    <ul className="main-menu__list">
                      <li
                        className={` ${
                          location.pathname === "/" ? "current" : ""
                        } `}
                      >
                        <Link to="/">
                          Home <span className="main-menu-border"></span>
                        </Link>
                      </li>
                      <li
                        className={` ${
                          location.pathname === "/directory" ? "current" : ""
                        } `}
                      >
                        <Link to="/directory">
                          Directory <span className="main-menu-border"></span>
                        </Link>
                      </li>
                      <li
                        className={` ${
                          location.pathname === "/traders" ? "current" : ""
                        } `}
                      >
                        <Link to="/traders">
                          Trader List <span className="main-menu-border"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/seller-posts">Seller Post List</Link>
                      </li>
                      <li>
                        <Link to="/buyer-posts">Buyer Post List </Link>
                      </li>
                      <li className="dropdown">
                        <Link>Tools</Link>
                        <ul>
                          <li>
                            <Link to="/specification">Specification</Link>
                          </li>
                          <li>
                            <Link to="/packing-details">Packing Details</Link>
                          </li>
                          <li>
                            <Link to="tiles-calculator">Tiles Calculator</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="main-menu__right">
                  <div className="main-menu__search-btn-box">
                    {/* <div className="main-menu__search-box">
                      <Link
                        to="#"
                        className="main-menu__search search-toggler icon-magnifying-glass"
                        onClick={() => setSearchPopup(!SearchPopup)}
                      />
                    </div> */}
                    <div className="main-menu__btn-box">
                      <Link
                        to="/seller-post-create"
                        className="thm-btn main-menu__btn mx-1"
                      >
                        SELLER POST
                      </Link>
                      <Link
                        to="/buyer-post-create"
                        className="thm-btn main-menu__btn"
                      >
                        BUYER POST
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div
        className={`stricky-header stricked-menu main-menu ${
          isSticky ? "stricky-fixed" : ""
        } `}
      >
        <div className="sticky-header__content">
          <div className="main-menu__wrapper clearfix">
            <div className="container">
              <div className="main-menu__wrapper-inner clearfix">
                <div className="main-menu__left">
                  <div className="main-menu__main-menu-box">
                    {/* <a href="#" className="mobile-nav__toggler">
                      <i className="fa fa-bars" /> 
                    </a> */}
                    <ul className="main-menu__list">
                      <li>
                        <Link to="/">
                          Home <span className="main-menu-border" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/directory">
                          Directory <span className="main-menu-border" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/traders">
                          Trader List <span className="main-menu-border" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/seller-posts">
                          Seller Post List <span className="main-menu-border" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/buyer-posts">
                          Buyer Post List <span className="main-menu-border" />
                        </Link>
                      </li>
                      <li className="dropdown">
                        <Link>
                          Tools <span className="main-menu-border" />
                        </Link>
                        <ul>
                          <li>
                            <Link to="/specification">Specification</Link>
                          </li>
                          <li>
                            <Link to="/packing-details">Packing Details</Link>
                          </li>
                          <li>
                            <Link to="tiles-calculator">Tiles Calculator</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="main-menu__right">
                  <div className="main-menu__search-btn-box">
                    <div className="main-menu__search-box">
                      <Link
                        to="#"
                        className="main-menu__search search-toggler icon-magnifying-glass"
                        onClick={() => setSearchPopup(!SearchPopup)}
                      />
                    </div>
                    <div className="main-menu__btn-box">
                      <a href="contact.html" className="thm-btn main-menu__btn">
                        Book Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-nav__wrapper ${Menustatus ? "expanded" : ""}`}>
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={() => setMenustatus(!Menustatus)}
        />
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={() => setMenustatus(!Menustatus)}
          >
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <Link to="/" aria-label="logo image">
              <img
                src="assets/images/resources/footer-logo.png"
                width={155}
                alt=""
              />
            </Link>
          </div>
          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li className="current">
                <Link to="/">
                  Home <span className="main-menu-border" />{" "}
                </Link>
              </li>
              <li className="current">
                <Link to="/directory">
                  Directory <span className="main-menu-border" />
                </Link>
              </li>
              <li className="current">
                <Link to="/traders">
                  Trader List <span className="main-menu-border" />
                </Link>
              </li>
              <li className="current">
                <Link to="/seller-posts">
                  Seller Post List <span className="main-menu-border" />
                </Link>
              </li>
              <li className="current">
                <Link to="/buyer-posts">
                  Buyer Post List <span className="main-menu-border" />
                </Link>
              </li>
              <li className="dropdown">
                <Link className={MenuDropdownstatus ? "expanded" : ""}>
                  Tools
                  <button
                    aria-label="dropdown toggler"
                    onClick={() => setMenuDropdownstatus(!MenuDropdownstatus)}
                    className={MenuDropdownstatus ? "expanded" : ""}
                  >
                    <i className="fa fa-angle-down" />
                  </button>
                  <span className="main-menu-border" />
                </Link>
                <ul style={{ display: MenuDropdownstatus ? "block" : "none" }}>
                  <li>
                    <Link to="/specification">Specification</Link>
                  </li>
                  <li>
                    <Link to="/packing-details">Packing Details</Link>
                  </li>
                  <li>
                    <Link to="tiles-calculator">Tiles Calculator</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <Link to="mailto:needhelp@packageName__.com">
                needhelp@ambed.com
              </Link>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <Link to="tel:666-888-0000">666 888 0000</Link>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link to="#" className="fab fa-twitter" />
              <Link to="#" className="fab fa-facebook-square" />
              <Link to="#" className="fab fa-pinterest-p" />
              <Link to="#" className="fab fa-instagram" />
            </div>
          </div>
        </div>
      </div>
      <div className={`search-popup ${SearchPopup ? "active" : ""}`}>
        <div
          className="search-popup__overlay search-toggler"
          onClick={() => setSearchPopup(!SearchPopup)}
        />
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              search here
            </label>
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="thm-btn"
            >
              <i className="icon-magnifying-glass" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Header;
