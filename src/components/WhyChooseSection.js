import React from "react";

const WhyChooseSection = () => {
    return (
        <div className="why-choose-section">
            <div className="container">
                <div className="row my-5">
                    <div className="col-6 col-md-6 col-lg-3 mb-4">
                        <div className="feature">
                            <div className="icon">
                                <img src="images/truck.svg" alt="Shipping Icon" className="img-fluid" />
                            </div>
                            <h3>Fast & Free Shipping</h3>
                            <p>
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                                velit. Aliquam vulputate.
                            </p>
                        </div>
                    </div>
                    <div className="col-6 col-md-6 col-lg-3 mb-4">
                        <div className="feature">
                            <div className="icon">
                                <img src="images/bag.svg" alt="Shop Icon" className="img-fluid" />
                            </div>
                            <h3>Easy to Shop</h3>
                            <p>
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                                velit. Aliquam vulputate.
                            </p>
                        </div>
                    </div>
                    <div className="col-6 col-md-6 col-lg-3 mb-4">
                        <div className="feature">
                            <div className="icon">
                                <img src="images/support.svg" alt="Support Icon" className="img-fluid" />
                            </div>
                            <h3>24/7 Support</h3>
                            <p>
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                                velit. Aliquam vulputate.
                            </p>
                        </div>
                    </div>
                    <div className="col-6 col-md-6 col-lg-3 mb-4">
                        <div className="feature">
                            <div className="icon">
                                <img src="images/return.svg" alt="Returns Icon" className="img-fluid" />
                            </div>
                            <h3>Hassle Free Returns</h3>
                            <p>
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                                velit. Aliquam vulputate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export { WhyChooseSection };
