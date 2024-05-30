import React, { useRef } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Slider from "react-slick";
import { useDirectoryContext } from "../../context/directorycontext";

function HomeSlider() {
  const sliderRef = useRef();
  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };
  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };
  const outerSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    draggable: false,
    swipe: false,
  };
  const innerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };
  const { HomeBanner, isLoading } = useDirectoryContext();
  return (
    <>
      <section className="main-slider clearfix">
        {isLoading ? (
          <SkeletonTheme highlightColor="#dec6ba">
            <div className="item">
              <div className="row g-0">
                <div className="col-xl-6 col-lg-6 m-0 p-0 lh-0">
                  <div className="item text-center">
                    <Skeleton className="p-5" style={{ height: "250px" }} />
                    <Skeleton className="my-1" style={{ width: "20%" }} />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 m-0 p-0 lh-0">
                  <div className="item text-center">
                    <Skeleton className="p-5" style={{ height: "250px" }} />
                    <Skeleton className="my-1" style={{ width: "20%" }} />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 m-0 p-0 lh-0">
                  <div className="item text-center">
                    <Skeleton className="p-5" style={{ height: "250px" }} />
                    <Skeleton className="my-1" style={{ width: "20%" }} />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 m-0 p-0 lh-0">
                  <div className="item text-center">
                    <Skeleton className="p-5" style={{ height: "250px" }} />
                    <Skeleton className="my-1" style={{ width: "20%" }} />
                  </div>
                </div>
              </div>
            </div>
          </SkeletonTheme>
        ) : (
          <>
            <Slider {...outerSettings} ref={sliderRef}>
              {HomeBanner.map((FAvalue, FAindex) => {
                return (
                  <div className="item" key={FAindex}>
                    <div className="row g-0">
                      {FAvalue.map((SAvalue, SAindex) => {
                        return (
                          <div
                            className="col-xl-6 col-lg-6 m-0 p-0 lh-0"
                            key={SAindex}
                          >
                            <Slider {...innerSettings} className="zoom-slider">
                              {SAvalue.map((TAvalue, TAindex) => {
                                return (
                                  <div className="item zoom" key={TAindex}>
                                    <img
                                      src={TAvalue.image_path}
                                      alt={`Banner-${TAvalue.id}`}
                                      className="img-shadow"
                                      style={{ width: "100%" }}
                                    />
                                  </div>
                                );
                              })}
                            </Slider>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </Slider>
            <div
              className="main-slider__nav"
              style={{
                left: "50%",
                transform: "translateY(-50%) translateX(-50%)",
              }}
            >
              <div className="images-circle">
                <img
                  src="assets/images/resources/logo-2.png"
                  alt=""
                  className="light-logo"
                />
              </div>
            </div>
            <div className="main-slider__nav">
              <div
                className="swiper-button-prev"
                id="main-slider__swiper-button-next"
                onClick={goToPrevSlide}
              >
                <i className="fa fa-angle-left" />
              </div>
            </div>
            <div
              className="main-slider__nav"
              style={{ right: "0", left: "unset" }}
            >
              <div
                className="swiper-button-next"
                id="main-slider__swiper-button-prev"
                onClick={goToNextSlide}
              >
                <i className="fa fa-angle-right" />
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default HomeSlider;
