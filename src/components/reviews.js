/**
 * Created by michealin on 3/14/2017.
 */
import React, { PropTypes } from 'react';
import Product from '../Data.js';
// import './Reviews.css';

const Reviews = ({ reviews }) => {
    return (
        <div>
            <h3>Products</h3>
            <ul className="product-list">
                {reviews.map(product => (
                    <li key={product.id} className="product-list__item">
                        <Product {...product} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

Reviews.propTypes = {
    reviews: PropTypes.array,
}

export default Reviews;
