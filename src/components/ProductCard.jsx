
import React from 'react'

const ProductCard = ({ title, price, description }) => {
    return (
        <div className="product-card">
            <h3>{title}</h3>
            <p className="price">₹{price}</p>
            <p className="description">{description}</p>
            <button>Add to Cart</button>
        </div>
    )
} 
export default ProductCard;

