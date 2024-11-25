import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [cartCount, setCartCount] = useState(0);
    const location = useLocation();

    useEffect(() => {
        // Fetch cart data from localStorage or an API
        try {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
            setCartCount(itemCount);
        } catch (error) {
            console.error("Error loading cart data:", error);
        }
    }, []);

    const isActive = (path) => location.pathname === path;

    // Function to close the navbar
    const closeNavbar = () => {
        const navbar = document.getElementById("navbarsFurni");
        if (navbar && navbar.classList.contains("show")) {
            navbar.classList.remove("show"); // Hide the menu
        }
    };

    return (
        <>
            <nav
                className="custom-navbar sticky-top navbar navbar-expand-md navbar-dark bg-dark"
                aria-label="Furni navigation bar"
            >
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Furni<span>.</span>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarsFurni"
                        aria-controls="navbarsFurni"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li className={`nav-item ${isActive("/") ? "active" : ""}`}>
                                <Link className="nav-link" to="/" onClick={closeNavbar}>
                                    Home
                                </Link>
                            </li>
                            <li className={`nav-item ${isActive("/shop") ? "active" : ""}`}>
                                <Link className="nav-link" to="/shop" onClick={closeNavbar}>
                                    Shop
                                </Link>
                            </li>
                            <li className={`nav-item ${isActive("/about") ? "active" : ""}`}>
                                <Link className="nav-link" to="/about" onClick={closeNavbar}>
                                    About us
                                </Link>
                            </li>
                            <li className={`nav-item ${isActive("/service") ? "active" : ""}`}>
                                <Link className="nav-link" to="/service" onClick={closeNavbar}>
                                    Services
                                </Link>
                            </li>
                            <li className={`nav-item ${isActive("/blog") ? "active" : ""}`}>
                                <Link className="nav-link" to="/blog" onClick={closeNavbar}>
                                    Blog
                                </Link>
                            </li>
                            <li className={`nav-item ${isActive("/contact") ? "active" : ""}`}>
                                <Link className="nav-link" to="/contact" onClick={closeNavbar}>
                                    Contact us
                                </Link>
                            </li>
                        </ul>

                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li>
                                <Link className="nav-link" to="/profile" onClick={closeNavbar}>
                                    <img src="images/user.svg" alt="User Profile" />
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link position-relative" to="/cart" onClick={closeNavbar}>
                                    <img src="images/cart.svg" alt="Shopping Cart" />
                                    {/* Cart Count Badge */}
                                    {cartCount > 0 && (
                                        <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                                            {cartCount}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
