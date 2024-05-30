import React from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDirectoryContext } from "../../context/directorycontext";

function DirectorySection() {
  const { isLoading, directories } = useDirectoryContext();
  const elements = Array.from({ length: 4 }, (_, index) => (
    <div
      key={index}
      className="col-xl-3 col-lg-3 wow fadeInUp"
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
  return (
    <>
      <section className="blog-one z-1">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">GUJARAT TILES INFO</span>
            <h2 className="section-title__title">DIRECTORY</h2>
            <div className="section-title__line" />
          </div>
          <div className="row">
            {isLoading ? (
              <SkeletonTheme highlightColor="#dec6ba">{elements}</SkeletonTheme>
            ) : (
              directories.map((v, i) => {
                return (
                  <div
                    className="col-xl-3 col-lg-3 wow fadeInUp"
                    data-wow-delay="100ms"
                    key={i}
                  >
                    <div className="blog-one__single">
                      <div className="blog-one__img">
                        <img
                          src={v.image_path}
                          alt="Directories"
                          className="p-5"
                          height={250}
                        />
                        <Link
                          to={`/directory/${v.category
                            .toLowerCase()
                            .replace(/\s+/g, "-")}/${v.id}`}
                        >
                          <span className="blog-one__plus" />
                        </Link>
                      </div>
                      <div className="blog-one__content blog-one__content-c">
                        <h3 className="blog-one__title">
                          <Link
                            to={`/directory/${v.category
                              .toLowerCase()
                              .replace(/\s+/g, "-")}/${v.id}`}
                          >
                            {v.category}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default DirectorySection;
