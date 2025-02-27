import React, { useState } from "react";
import { Link } from 'react-router-dom';

import AddProductPage from '../pages/AddProductPage';

function Navbar() {
    const [showAddProduct, setShowAddProduct] = useState(false);

    const handleAddProductClick = () => {
        setShowAddProduct(!showAddProduct);
    };

    return (
        <div>
            <nav>
                <div className="site-name">Better Buys</div>
                <div className="nav-container">
                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <Link onClick={handleAddProductClick}>Add Product</Link>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className="auth-links">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </nav>
            {showAddProduct && <AddProductPage />}
            </div>
    );
}
export default Navbar;