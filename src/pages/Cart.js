import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
            setCartItems(storedCart);
        } catch (error) {
            console.error("Error loading cart items from localStorage:", error);
        }
    }, []);

    const handleQuantityChange = (id, increment = true) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id
                ? { ...item, quantity: increment ? item.quantity + 1 : Math.max(item.quantity - 1, 1) }
                : item
        );
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const handleClearCart = () => {
        if (window.confirm("Are you sure you want to clear the cart?")) {
            setCartItems([]);
            localStorage.removeItem("cart");
        }
    };

    const calculateTotal = () =>
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <div>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Cart</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="untree_co-section before-footer-section">
                <div className="container">
                    <div className="row mb-5">
                        {cartItems.length > 0 ? (
                            <form className="col-md-12">
                                <div className="site-blocks-table">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Image</th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-total">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map((item) => (
                                                <tr key={item.id}>
                                                    <td className="product-thumbnail">
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            onError={(e) => (e.target.src = "images/default-image.png")}
                                                            className="img-fluid"
                                                        />
                                                    </td>
                                                    <td className="product-name">
                                                        <h2 className="h5 text-black">{item.title}</h2>
                                                    </td>
                                                    <td>${item.price.toFixed(2)}</td>
                                                    <td>
                                                        <div
                                                            className="input-group mb-3 d-flex align-items-center quantity-container"
                                                            style={{ maxWidth: "120px" }}
                                                        >
                                                            <button
                                                                className="btn btn-outline-black decrease"
                                                                type="button"
                                                                aria-label="Decrease quantity"
                                                                onClick={() => handleQuantityChange(item.id, false)}
                                                            >
                                                                −
                                                            </button>
                                                            <input
                                                                type="text"
                                                                className="form-control text-center quantity-amount"
                                                                value={item.quantity}
                                                                readOnly
                                                            />
                                                            <button
                                                                className="btn btn-outline-black increase"
                                                                type="button"
                                                                aria-label="Increase quantity"
                                                                onClick={() => handleQuantityChange(item.id, true)}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-black btn-sm"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleRemoveItem(item.id);
                                                            }}
                                                            aria-label="Remove item"
                                                        >
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        ) : (
                            <div className="col-12">
                                <p>Your cart is empty. <Link to="/shop">Continue shopping</Link></p>
                            </div>
                        )}
                    </div>

                    {cartItems.length > 0 && (
                        <div className="row">
                            <div className="col-md-6">
                                <button
                                    className="btn btn-black btn-sm btn-block"
                                    onClick={handleClearCart}
                                >
                                    Clear Cart
                                </button>
                            </div>
                            <div className="col-md-6 text-right">
                                <h3 className="text-black h4">Total: ${calculateTotal()}</h3>
                                <button
                                    className="btn btn-black btn-lg btn-block"
                                    onClick={() => navigate("/checkout")}
                                >
                                    Proceed To Checkout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
