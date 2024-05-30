import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { BASE_URL_S } from "../components/ApiConfig/apiConfig";
import "../css/companies.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/spinner/Spinner";
const Traders = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [spinner, setSpinner] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 9;

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = () => {
    axios
      .get(BASE_URL_S + `traders&itemsPerPage=${itemsPerPage}`)
      .then((res) => res.data)
      .then((finalres) => {
        setCompanies(finalres.companies);
        setTotalResults(finalres.companies_total_count);
        setLoading(false);
        setSpinner(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    axios
      .get(BASE_URL_S + `traders`)
      .then((res) => res.data)
      .then((finalres) => {
        const filteredData = finalres.companies.filter((company) =>
          company.name.toLowerCase().includes(query.toLowerCase())
        );
        setCompanies(finalres.companies);
        setTotalResults(filteredData.length);
        setSpinner(false);
      });
  };

  const fetchMoreData = async () => {
    setSpinner(true);
    axios
      .get(BASE_URL_S + `traders&itemsPerPage=${itemsPerPage}&page=${page + 1}`)
      .then((res) => res.data)
      .then((finalres) => {
        setPage(page + 1);
        setCompanies(companies.concat(finalres.companies));
        setTotalResults(finalres.companies_total_count);
        setSpinner(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

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

  const filteredCompanies = companies.filter((company) =>
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
                      onChange={handleSearch}
                    />
                    <div className="main-menu__search-box_icon">
                      <div className="main-menu__search_icon icon-magnifying-glass" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {loading ? (
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
              {spinner && <Spinner />}
              <InfiniteScroll
                dataLength={filteredCompanies.length}
                next={fetchMoreData}
                hasMore={filteredCompanies.length !== totalResults}
                loader={<Spinner />}
                scrollThreshold={0.5}
              >
                <section className="testimonials-page">
                  <div className="container">
                    <div className="row">
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
                            to={`/traders/${v.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}/${v.id}`}
                          >
                            <div className="testimonial-one__single">
                              <div className="testimonial-one__quote">
                                <span className="icon-phone-call" />
                              </div>
                              <p className="testimonial-one__text-2">
                                {v.role}
                              </p>
                              {/* <p className="testimonial-one__text-2">
                                {v.address}
                              </p> */}
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

export default Traders;
