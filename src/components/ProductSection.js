import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
function ProductSection() {
    // State to store products
    const [products, setProducts] = useState([]);

    // Fetch products when the component mounts
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json)) // Set the fetched products in state
            .catch(err => console.error('Error fetching data: ', err));
    }, []); // Empty dependency array ensures it runs only once when component mounts

    return (
        <div className="product-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 className="mb-4 section-title">
                            Crafted with excellent material.
                        </h2>
                        <p className="mb-4">
                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                        </p>
                        <p>
                            <Link to="/shop" className="btn">
                                Explore
                            </Link>
                        </p>
                    </div>

                    {/* Dynamically rendering products from the fetched data */}
                    {products.length > 0 ? (
                        products.slice(1, 4).map(product => (
                            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={product.id}>
                                <Link className="product-item" to={`/shop/${product.id}`}>
                                    <div className="product-thumbnail-wrapper">
                                        <img
                                            src={product.image}
                                            className="img-fluid product-thumbnail"
                                            alt={product.title}
                                        />
                                    </div>
                                    <h3 className="product-title">{product.title}</h3>
                                    <strong className="product-price">${product.price}</strong>
                                    <span className="icon-cross">
                                        <img src="images/cross.svg" className="img-fluid" alt="Cross" />
                                    </span>
                                </Link>
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
    );
}

export default ProductSection;
