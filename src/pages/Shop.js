import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(() => {
        // Retrieve cart from localStorage
        return JSON.parse(localStorage.getItem('cart')) || [];
    });

    // Fetch products from API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                const FilterProduct = data.filter(product => product.category !== "electronics" && product.category !== "jewelery");
                setProducts(FilterProduct);
            })
            .catch((err) => console.error('Error fetching data: ', err));
    }, []);

    // Add to cart
    const addToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        let updatedCart;

        if (existingProduct) {
            updatedCart = cart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            updatedCart = [...cart, { ...product, quantity: 1 }];
        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Persist in localStorage
        alert(`${product.title} added to cart!`);
    };

    return (
        <div>
            {/* Hero Section */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Shop</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Section */}
            <div className="untree_co-section product-section before-footer-section">
                <div className="container">
                    <div className="row">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={product.id}>
                                    <div className="product-item">
                                        {/* Wrap the product with Link for navigation */}
                                        <Link to={`/shop/${product.id}`} className="product-link">
                                            <img
                                                src={product.image}
                                                className="img-fluid product-thumbnail"
                                                alt={product.title}
                                            />
                                            <h3 className="product-title">{product.title}</h3>
                                            <strong className="product-price">${product.price}</strong>
                                        </Link>

                                        <span className="icon-cross" onClick={() => addToCart(product)}>
                                            <img src="images/cross.svg" className="img-fluid" alt="Cross" />
                                        </span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12">
                                <p>Loading products...</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
