import React from 'react'
import { Link } from 'react-router-dom'
import WhyChooseUs from '../components/WhyChooseUs'
import TestimonialSection from '../components/TestimonialSection'

export const About = () => {
    return (
        <div>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>About Us</h1>
                                <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                                <p><Link to="/shop" className="btn btn-secondary me-2">Shop Now</Link><Link to="/shop" className="btn btn-white-outline">Explore</Link></p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src="images/couch.png" className="img-fluid" alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <WhyChooseUs />


            <div className="untree_co-section">
                <div className="container">

                    <div className="row mb-5">
                        <div className="col-lg-5 mx-auto text-center">
                            <h2 className="section-title">Our Team</h2>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <img src="images/person_1.jpg" className="img-fluid mb-5" alt='' />
                            <h3 className=''><Link to="/"><span className="">Lawson</span> Arnold</Link></h3>
                            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
                            <p>Separated they live in.
                                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p className="mb-0"><Link to="/" className="more dark">Learn More <span className="icon-arrow_forward"></span></Link></p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <img src="images/person_2.jpg" className="img-fluid mb-5" alt='' />

                            <h3 className=''><Link to="/"><span className="">Jeremy</span> Walker</Link></h3>
                            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
                            <p>Separated they live in.
                                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p className="mb-0"><Link to="/" className="more dark">Learn More <span className="icon-arrow_forward"></span></Link></p>

                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <img src="images/person_3.jpg" className="img-fluid mb-5" alt='' />
                            <h3 className=''><Link to="/"><span className="">Patrik</span> White</Link></h3>
                            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
                            <p>Separated they live in.
                                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p className="mb-0"><Link to="/" className="more dark">Learn More <span className="icon-arrow_forward"></span></Link></p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <img src="images/person_4.jpg" className="img-fluid mb-5" alt='' />

                            <h3 className=''><Link to="/"><span className="">Kathryn</span> Ryan</Link></h3>
                            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
                            <p>Separated they live in.
                                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p className="mb-0"><Link to="/" className="more dark">Learn More <span className="icon-arrow_forward"></span></Link></p>
                        </div>
                    </div>
                </div>
            </div>


            <TestimonialSection />
        </div>
    )
}


