import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { BASE_URL_S } from "../components/ApiConfig/apiConfig";
import { Link, useParams } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDirectoryContext } from "../context/directorycontext";

export const CompaniesDetails = () => {
  const { companiesId } = useParams();
  const {
    getCompaniesDetails,
    CompanieDetails,
    isLoading,
    CompaniesUsers,
    ProductGallery,
    CompanyGallery,
  } = useDirectoryContext();

  useEffect(() => {
    getCompaniesDetails(BASE_URL_S + `companies_profile&id=${companiesId}`);
    // eslint-disable-next-line
  }, [companiesId]);

  const [activeContent, setActiveContent] = useState("service-details");

  const handleGalleryClick = () => {
    document.documentElement.scrollTo({
      top: 500,
      behavior: "smooth",
    });
    setActiveContent("product-gallery");
  };
  const handleCompanyGalleryClick = () => {
    document.documentElement.scrollTo({
      top: 500,
      behavior: "smooth",
    });
    setActiveContent("company-gallery");
  };
  const handleAboutCompanyClick = () => {
    document.documentElement.scrollTo({
      top: 500,
      behavior: "smooth",
    });
    setActiveContent("about-company");
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
                  <li>
                    <Link to="/directory/companies">Companies</Link>
                  </li>
                  <li>
                    <span>/</span>
                  </li>
                  <li>{CompanieDetails.name}</li>
                </ul>
                <h2>{CompanieDetails.name}</h2>
              </div>
            </div>
          </section>
          {isLoading ? (
            <section className="testimonials-page">
              <div className="container">
                <div className="row">
                  <SkeletonTheme highlightColor="#dec6ba">
                    <div className="col-xl-4 col-lg-5">
                      <div className="service-details__left">
                        <div className="sidebar__single sidebar__tags ">
                          <h3 className="sidebar__title text-center">
                            <Skeleton />
                          </h3>
                          <div className="sidebar__tags-list text-center">
                            <div className="row">
                              <div className="col-xl-4 col-lg-5 p-2">
                                <Skeleton width={80} height={30} />
                              </div>
                              <div className="col-xl-4 col-lg-5 p-2">
                                <Skeleton width={80} height={30} />
                              </div>
                              <div className="col-xl-4 col-lg-5 p-2">
                                <Skeleton width={80} height={30} />
                              </div>
                              <div className="col-xl-4 col-lg-5 p-2">
                                <Skeleton width={80} height={30} />
                              </div>
                              <div className="col-xl-4 col-lg-5 p-2">
                                <Skeleton width={80} height={30} />
                              </div>
                              <div className="col-xl-4 col-lg-5 p-2">
                                <Skeleton width={80} height={30} />
                              </div>
                              <div className="col-xl-3 col-lg-5 mt-5">
                                <Skeleton
                                  circle={true}
                                  height={50}
                                  width={50}
                                />
                              </div>
                              <div className="col-xl-3 col-lg-5 mt-5">
                                <Skeleton
                                  circle={true}
                                  height={50}
                                  width={50}
                                />
                              </div>
                              <div className="col-xl-3 col-lg-5 mt-5">
                                <Skeleton
                                  circle={true}
                                  height={50}
                                  width={50}
                                />
                              </div>
                              <div className="col-xl-3 col-lg-5 mt-5">
                                <Skeleton
                                  circle={true}
                                  height={50}
                                  width={50}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-7">
                      <div className="service-details__right">
                        <div className="service-details__img">
                          <Skeleton className="p-5" height={344} />
                          <div className="service-details__icon">
                            <Skeleton width={100} height={100} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SkeletonTheme>
                </div>
              </div>
            </section>
          ) : (
            <section className="service-details">
              <div className="container">
                <div className="row">
                  <div className="col-xl-4 col-lg-5">
                    <div className="service-details__left">
                      <div className="sidebar__single sidebar__tags ">
                        <h3 className="sidebar__title text-center">
                          SOCIAL MEDIA
                        </h3>
                        <div className="sidebar__tags-list text-center">
                          <Link to={`tel:${CompanieDetails.contact}`}>
                            Call
                          </Link>
                          <Link to={`mailto:${CompanieDetails.email}`}>
                            Mail
                          </Link>
                          <Link to={CompanieDetails.website}>Website</Link>
                          <Link
                            to={`https://wa.me/${CompanieDetails.whatsapp}`}
                          >
                            Whatsapp
                          </Link>
                          <Link to={CompanieDetails.location_url}>
                            Google 360
                          </Link>
                        </div>
                        <div
                          className="contact-page__social justify-content-center"
                          style={{ paddingTop: "30px" }}
                        >
                          <Link
                            to={CompanieDetails.twitter}
                            className="bg-white"
                          >
                            <i className="fab fa-twitter"></i>
                          </Link>
                          <Link
                            to={CompanieDetails.facebook}
                            className="bg-white"
                          >
                            <i className="fab fa-facebook"></i>
                          </Link>
                          <Link
                            to={CompanieDetails.youtube}
                            className="bg-white"
                          >
                            <i className="fab fa-youtube"></i>
                          </Link>
                          <Link
                            to={CompanieDetails.instagram}
                            className="bg-white"
                          >
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="service-details__download">
                        <Link className="thm-btn service-details__download-btn mb-2">
                          Inquiry
                        </Link>
                        <Link
                          className="thm-btn service-details__download-btn mb-2"
                          onClick={handleGalleryClick}
                        >
                          Product Gallery
                        </Link>
                        <Link
                          className="thm-btn service-details__download-btn mb-2"
                          onClick={handleCompanyGalleryClick}
                        >
                          Company Photo
                        </Link>
                        <Link
                          className="thm-btn service-details__download-btn mb-2"
                          onClick={handleAboutCompanyClick}
                        >
                          About Company
                        </Link>
                        <Link
                          to={CompanieDetails.catalog_url}
                          target="_blank"
                          className="thm-btn service-details__download-btn mb-2"
                        >
                          Download categouge
                        </Link>
                      </div>
                    </div>
                  </div>
                  {activeContent === "service-details" && (
                    <div className="col-xl-8 col-lg-7">
                      <div className="service-details__right">
                        <div className="service-details__img">
                          <img src={CompanieDetails.banner} alt="" />
                          <div className="service-details__icon">
                            <img
                              src={CompanieDetails.logo}
                              alt="companies-logo"
                            />
                          </div>
                          {/* <div className="service-details__icon">
                        <span className="icon-wallpaper-4" />
                      </div> */}
                        </div>
                        <div className="service-details__content">
                          <h3 className="service-details__content-title">
                            {CompanieDetails.name}
                          </h3>
                        </div>
                        <div className="service-details__points-two">
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="service-details__points-two-single">
                                <div className="service-details__points-two-content">
                                  <div className="service-details__points-two-icon">
                                    <span className="icon-location" />
                                  </div>
                                  <h4>ADDRESS : </h4>
                                  <p>{CompanieDetails.address}</p>

                                  <div className="product-description__list_Companies">
                                    <ul className="list-unstyled">
                                      <li>
                                        <p>
                                          <span className="fas fa-long-arrow-alt-right"></span>
                                          City :{" "}
                                          <span className="companies-address">
                                            {CompanieDetails.city}
                                          </span>
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <span className="fas fa-long-arrow-alt-right"></span>
                                          District :{" "}
                                          <span className="companies-address">
                                            {CompanieDetails.district}
                                          </span>
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <span className="fas fa-long-arrow-alt-right"></span>
                                          State :{" "}
                                          <span className="companies-address">
                                            {CompanieDetails.state}
                                          </span>
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <span className="fas fa-long-arrow-alt-right"></span>
                                          Country :{" "}
                                          <span className="companies-address">
                                            {CompanieDetails.country}
                                          </span>
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                  <h4>ESTABLISHED YEAR : </h4>
                                  <p className="product-description__text1">
                                    {CompanieDetails.year}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="service-details__points-two-single">
                                <div className="service-details__points-two-content">
                                  <div className="service-details__points-two-icon">
                                    <span className="icon-wallpaper-8" />
                                  </div>
                                  <h4>PRODUCT AND SIZE : </h4>

                                  <h3 className="product-description__title_Companies">
                                    demo
                                  </h3>
                                  <p className="product-description__text1">
                                    {CompanieDetails.subcategory}
                                  </p>
                                  <div className="product-description__list_Companies">
                                    <ul className="list-unstyled">
                                      <li>
                                        <p>
                                          <span className="fas fa-long-arrow-alt-right"></span>
                                          300X300(12X12)
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <span className="fas fa-long-arrow-alt-right"></span>
                                          300X450 (18X12)
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <span className="fas fa-long-arrow-alt-right"></span>
                                          300X600(12X24)
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                  <h4>PRODUCT DESCRIPTION : </h4>
                                  <p className="product-description__text1">
                                    {CompanieDetails.product_description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="service-details__benefits">
                      <div className="companies-box">
                        <h4 className="mb-4">GROUP OF COMPANIES</h4>
                        <div className="row">
                          <div className="col-xl-4 col-lg-4 col-md-6">
                            <div
                              className="services-one__single wow fadeInUp"
                              data-wow-delay="100ms"
                            >
                              <div className="services-one__img">
                                <img src={CompanieDetails.logo} alt="" />
                              </div>
                              <div className="services-one__content p-2 text-center">
                                <p className="services-one__text">
                                  Morbi feugiat
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                        <div className="service-details__benefits">
                          <div className="companies-box">
                            <h4 className="mb-5">CONTACT PERSON</h4>
                            <div className="row">
                              {CompaniesUsers.length === 0 ? (
                                <div className="col-xl-6 col-lg-6 col-md-6 mb-3">
                                  <div className="testimonial-one__single">
                                    <div className="sidebar__tags-list text-center">
                                      <Link
                                        to="tel:+919978842000"
                                        className="bg-gray"
                                      >
                                        Call
                                      </Link>
                                      <Link
                                        to="mailto:eretosanitary@gmail.com"
                                        className="bg-gray"
                                      >
                                        Whatsapp
                                      </Link>
                                      <Link to="" className="bg-gray">
                                        Chat
                                      </Link>
                                    </div>
                                    <div className="testimonial-one__client-info">
                                      <div className="profile_img">
                                        <img
                                          src="https://www.gujarattilesinfo.com/backend/uploads/profile/91181621163201.jpg"
                                          alt="profile_img"
                                        />
                                      </div>
                                      <div className="testimonial-one__client-content">
                                        <h4 className="testimonial-one__client-name">
                                          Demo
                                        </h4>
                                        <p className="testimonial-one__client-title">
                                          Post
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                CompaniesUsers.map((v, i) => {
                                  return (
                                    <div
                                      className="col-xl-6 col-lg-6 col-md-6 mb-3"
                                      key={i}
                                    >
                                      <div className="testimonial-one__single">
                                        <div className="team-details__social justify-content-center mt-0">
                                          <Link to={`tel:${v.contact}`}>
                                            <i className="icon-phone-call" />
                                          </Link>
                                          <Link
                                            to={`https://wa.me/${v.whatsapp}`}
                                            target="_blank"
                                          >
                                            <i className="fab fa-whatsapp" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fab fa-rocketchat" />
                                          </Link>
                                        </div>
                                        <div className="testimonial-one__client-info">
                                          <div className="profile_img">
                                            <img
                                              src={v.profile}
                                              alt="profile-pic"
                                            />
                                          </div>
                                          <div className="testimonial-one__client-content">
                                            <h4 className="testimonial-one__client-name">
                                              {v.name}
                                            </h4>
                                            <p className="testimonial-one__client-title">
                                              {v.post}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeContent === "product-gallery" && (
                    <div className="col-xl-8 col-lg-7">
                      <div className="row">
                        {ProductGallery.map((v, i) => {
                          return (
                            <div className="col-xl-4 col-lg-6 col-md-6" key={i}>
                              <div className="gallery-page__single">
                                <div className="gallery-page__img">
                                  <img src={v.image} alt="" />
                                  <div className="gallery-page__icon">
                                    <a className="img-popup" href={v.image}>
                                      <span className="icon-plus-symbol"></span>
                                    </a>
                                  </div>
                                </div>
                                <div className="blog-one__content">
                                  <h3 className="blog-one__title">
                                    <Link>{v.title}</Link>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {activeContent === "company-gallery" && (
                    <div className="col-xl-8 col-lg-7">
                      <div className="row">
                        {CompanyGallery.map((v, i) => {
                          return (
                            <div className="col-xl-4 col-lg-6 col-md-6" key={i}>
                              <div className="gallery-page__single">
                                <div className="gallery-page__img">
                                  <img src={v.image} alt="" />
                                  <div className="gallery-page__icon">
                                    <Link className="img-popup" to={v.image}>
                                      <span className="icon-plus-symbol"></span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="blog-one__content">
                                  <h3 className="blog-one__title">
                                    <Link>{v.title}</Link>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {activeContent === "about-company" && (
                    <div className="col-xl-8 col-lg-7">
                      <div className="row">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: CompanieDetails.about_content,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}
          <Footer />
        </div>
      </div>
    </>
  );
};
