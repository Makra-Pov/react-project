// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found-container" style={styles.container}>
            <h1 style={styles.header}>404 - Page Not Found</h1>
            <p style={styles.message}>Sorry, the page you are looking for doesn't exist.</p>
            <Link to="/" style={styles.link}>Go back to Home</Link>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '50px',
        backgroundColor: '#f8f9fa',
    },
    header: {
        fontSize: '36px',
        color: '#dc3545',
    },
    message: {
        fontSize: '18px',
        color: '#6c757d',
    },
    link: {
        display: 'inline-block',
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
    },
};

export default NotFound;
