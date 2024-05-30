import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { BASE_URL_S } from "../components/ApiConfig/apiConfig";
import "../css/companies.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/spinner/Spinner";
import { useDirectoryContext } from "../context/directorycontext";

export const Companies = () => {
  const { directoryId } = useParams();
  const { directoryname } = useParams();
  const itemsPerPage = 9;
  const {
    getSubDirectory,
    getfetchMoreData,
    handleSearch,
    Companies,
    TotalResults,
    isLoading,
    isSpinner,
    searchQuery,
  } = useDirectoryContext();
  useEffect(() => {
    getSubDirectory(
      `${BASE_URL_S}companies&itemsPerPage=${itemsPerPage}&directories_id=${directoryId}`
    );
    // eslint-disable-next-line
  }, []);

  const elements = Array.from({ length: 3 }, (_, index) => (
    <div
      key={index}
      className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
      data-wow-delay="100ms"
    >
      <div className="blog-one__single">
        <div className="blog-one__img">
          <Skeleton className="p-5" height={250} />
          <Link>
            <span className="blog-one__plus" />
          </Link>
        </div>
        <div className="blog-one__content blog-one__content-c">
          <h3 className="blog-one__title">
            <Skeleton />
          </h3>
        </div>
      </div>
    </div>
  ));

  const filteredCompanies = Companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                  <li>Companies</li>
                </ul>
                <h2>Companies</h2>
              </div>
            </div>
          </section>
          <div className="w-100 position-absolute">
            <div className="container">
              <div className="row">
                <div
                  className="shop-search product__sidebar-single"
                  style={{ top: "-30px", zIndex: "3" }}
                >
                  <div className="search-input d-flex">
                    <input
                      type="text"
                      placeholder="Search Companies..."
                      value={searchQuery}
                      onChange={(event) =>
                        handleSearch(
                          event.target.value,
                          BASE_URL_S + `companies&directories_id=${directoryId}`
                        )
                      }
                    />
                    <div className="main-menu__search-box_icon">
                      <div className="main-menu__search_icon icon-magnifying-glass" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isLoading ? (
            <section className="testimonials-page">
              <div className="container">
                <div className="row">
                  <SkeletonTheme highlightColor="#dec6ba">
                    {elements}
                  </SkeletonTheme>
                </div>
              </div>
            </section>
          ) : (
            <>
              {isSpinner && <Spinner />}
              <InfiniteScroll
                dataLength={filteredCompanies.length}
                next={() =>
                  getfetchMoreData(
                    `${BASE_URL_S}companies&itemsPerPage=${itemsPerPage}&directories_id=${directoryId}&page=`
                  )
                }
                hasMore={filteredCompanies.length !== TotalResults}
                loader={<Spinner />}
                scrollThreshold={0.5}
              >
                <section className="testimonials-page">
                  <div className="container">
                    <div className="row">
                      {/* <div className="col-xl-12">
                        <div
                          className="product__showing-result justify-content-end"
                          style={{ top: "-75px" }}
                        >
                          <div className="product__showing-text-box">
                            <p className="product__showing-text">
                              Showing 1–9 of {totalResults} Results
                            </p>
                          </div>
                          <div className="product__showing-sort">
                            <div className="shop-search product__sidebar-single">
                              <div className="search-input">
                                <input
                                  type="text"
                                  placeholder="Search Companies..."
                                  value={searchQuery}
                                  onChange={handleSearch}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {filteredCompanies.length === 0 ? (
                        <div className="col-12">
                          <p>No results found.</p>
                        </div>
                      ) : (
                        ""
                      )}
                      {filteredCompanies.map((v, i) => (
                        <div className="col-xl-4 col-lg-6 col-md-6" key={i}>
                          <Link
                            to={`/directory/${directoryname}/${directoryId}/${v.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}/${v.id}`}
                          >
                            <div className="testimonial-one__single">
                              <div className="testimonial-one__quote">
                                <span className="icon-phone-call" />
                              </div>
                              <p className="testimonial-one__text-2">
                                {v.subcategory}
                              </p>
                              <p className="testimonial-one__text-2">
                                {v.size}
                              </p>
                              <div className="testimonial-one__client-info">
                                <div className="companies__img">
                                  <img src={v.logo} alt="" />
                                </div>
                                <div className="testimonial-one__client-content">
                                  <h4 className="testimonial-one__client-name">
                                    {v.name}
                                  </h4>
                                  <p className="testimonial-one__client-title">
                                    {v.city}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </InfiniteScroll>
            </>
          )}
          ;
          <Footer />
        </div>
      </div>
    </>
  );
};
