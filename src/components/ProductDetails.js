import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true); // Reset loading state for each ID change
        setError(null); // Clear previous errors

        // Fetch product by ID
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((json) => {
                setProduct(json);
                window.scrollTo(0, 0); // Scroll to the top of the page
                return json;
            })
            .then((currentProduct) => {
                // Fetch related products based on category
                return fetch('https://fakestoreapi.com/products')
                    .then((res) => res.json())
                    .then((products) => {
                        const filteredProducts = products.filter((p) => p.id !== Number(id));
                        const relatedProductsByCategory = filteredProducts.filter(
                            (p) => p.category === currentProduct.category
                        );
                        setRelatedProducts(relatedProductsByCategory.slice(0, 4)); // Limit to 4
                    });
            })
            .catch((err) => {
                setError('Failed to load product or related products');
            })
            .finally(() => setLoading(false));
    }, [id]);

    const addToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        const updatedCart = existingProduct
            ? cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )
            : [...cart, { ...product, quantity: 1 }];

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Persist cart in localStorage
        alert(`${product.title} added to cart!`);
    };

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="product-container">
            {product && (
                <div className="product-details">
                    <div className="product-image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="product-info">
                        <h1>{product.title}</h1>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">${product.price}</p>
                        <button
                            className="add-to-cart-btn"
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}

            <div className="related-products">
                <h2>Related Products</h2>
                <div className="related-products-list">
                    {relatedProducts.length > 0 ? (
                        relatedProducts.map((relatedProduct) => (
                            <div key={relatedProduct.id} className="related-product-card">
                                <img src={relatedProduct.image} alt={relatedProduct.title} />
                                <h3>{relatedProduct.title}</h3>
                                <p>${relatedProduct.price}</p>
                                <Link to={`/shop/${relatedProduct.id}`} className="view-product-btn">
                                    View Product
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>No related products found</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Product;
