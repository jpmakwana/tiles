import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { BASE_URL_S } from "../components/ApiConfig/apiConfig";
import "../css/companies.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/spinner/Spinner";

export const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [spinner, setSpinner] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 9;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Simulated API call or local data fetching
    // Replace this with your actual data fetching logic
    const fakeData = [
      { name: "Company A", city: "City A", logo: "logo-url-a" },
      { name: "Company B", city: "City B", logo: "logo-url-b" },
      { name: "Company C", city: "City C", logo: "logo-url-c" },
      // Add more companies here
    ];

    setCompanies(fakeData);
    setTotalResults(fakeData.length);
    setLoading(false);
    setSpinner(false); 
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render skeleton elements while loading
  const elements = Array.from({ length: 3 }, (_, index) => (
    <div
      key={index}
      className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
      data-wow-delay="100ms"
    >
      {/* Skeleton UI */}
    </div>
  ));

  return (
    <>
      <div className="custom-cursor">
        <div className="page-wrapper">
          <Header />
          <section className="page-header">
            {/* Page header content */}
          </section>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search companies..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          {loading ? (
            <section className="testimonials-page">
              {/* Skeleton loading UI */}
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
                      {filteredCompanies.map((company, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                          {/* Render company card */}
                          <Link to={`/directory/companies/${company.name.toLowerCase().replace(/\s+/g, "-")}`}>
                            <div className="testimonial-one__single">
                              <div className="testimonial-one__quote">
                                <span className="icon-phone-call" />
                              </div>
                              <p className="testimonial-one__text-2">
                                {company.name}
                              </p>
                              <p className="testimonial-one__text-2">
                                {company.city}
                              </p>
                              <div className="testimonial-one__client-info">
                                <div className="companies__img">
                                  <img src={company.logo} alt="" />
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
          <Footer />
        </div>
      </div>
    </>
  );
};
