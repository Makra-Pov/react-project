import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TestimonialSection = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // Disable default arrows
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="testimonial-section before-footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 mx-auto text-center">
                        <h2 className="section-title">Testimonials</h2>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="testimonial-slider-wrap text-center">
                            {/* Custom Navigation */}
                            <div id="testimonial-nav">
                                <span className="prev" onClick={handlePrev} data-controls="prev">
                                    <span className="fa fa-chevron-left"></span>
                                </span>
                                <span className="next" onClick={handleNext} data-controls="next">
                                    <span className="fa fa-chevron-right"></span>
                                </span>
                            </div>

                            <Slider ref={sliderRef} {...settings}>
                                <div className="item">
                                    <blockquote className="mb-5">
                                        <p>
                                            &ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.&rdquo;
                                        </p>
                                    </blockquote>
                                    <div className="author-info">
                                        <img
                                            src="images/person-1.png"
                                            alt="Maria Jones"
                                            className="img-fluid mx-auto rounded-circle"
                                            style={{ maxWidth: 100 }}
                                        />
                                        <h3 className="font-weight-bold">Maria Jones</h3>
                                        <span className="position d-block mb-3">
                                            CEO, Co-Founder, XYZ Inc.
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <blockquote className="mb-5">
                                        <p>
                                            &ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.&rdquo;
                                        </p>
                                    </blockquote>
                                    <div className="author-info">
                                        <img
                                            src="images/person-1.png"
                                            alt="Maria Jones"
                                            className="img-fluid mx-auto rounded-circle"
                                            style={{ maxWidth: 100 }}
                                        />
                                        <h3 className="font-weight-bold">Maria Jones</h3>
                                        <span className="position d-block mb-3">
                                            CEO, Co-Founder, XYZ Inc.
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <blockquote className="mb-5">
                                        <p>
                                            &ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.&rdquo;
                                        </p>
                                    </blockquote>
                                    <div className="author-info">
                                        <img
                                            src="images/person-1.png"
                                            alt="Maria Jones"
                                            className="img-fluid mx-auto rounded-circle"
                                            style={{ maxWidth: 100 }}
                                        />
                                        <h3 className="font-weight-bold">Maria Jones</h3>
                                        <span className="position d-block mb-3">
                                            CEO, Co-Founder, XYZ Inc.
                                        </span>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
