import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <div className="thank-you-container">
            <h1>Thank You for Your Purchase!</h1>
            <p>Your payment has been successfully processed.</p>
            <Link to="/shop">Back to Shopping</Link>
        </div>
    );
};

export default ThankYou;
