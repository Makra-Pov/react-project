import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ShopPage from "./pages/Shop";
import Service from "./pages/Service";
import Footer from "./components/Footer";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import Cart from "./pages/Cart";
import HomePage from "./pages/Home";
import CheckOut from "./pages/CheckOut";
import Profile from "./pages/Profile";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./pages/NotFound";  // Optional 404 page

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} /> {/* Handle 404 */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
