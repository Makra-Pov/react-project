import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();  // Initialize navigate

    // Load data from localStorage on component mount
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userProfile'));
        if (storedData) {
            setUserData(storedData);
        }
    }, []);

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    // Toggle edit mode
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Save updated data to localStorage
        localStorage.setItem('userProfile', JSON.stringify(userData));
        console.log('Profile updated:', userData);
        setIsEditing(false);  // After submission, stop editing mode
    };

    return (
        <div className="profile-container">
            <h1>User Profile</h1>
            <div className="profile-info">
                <p><strong>First Name:</strong> {isEditing ? <input type="text" name="firstName" value={userData.firstName} onChange={handleChange} /> : userData.firstName}</p>
                <p><strong>Last Name:</strong> {isEditing ? <input type="text" name="lastName" value={userData.lastName} onChange={handleChange} /> : userData.lastName}</p>
                <p><strong>Email:</strong> {isEditing ? <input type="email" name="email" value={userData.email} onChange={handleChange} /> : userData.email}</p>
                <p><strong>Phone:</strong> {isEditing ? <input type="text" name="phone" value={userData.phone} onChange={handleChange} /> : userData.phone}</p>
            </div>

            <div className="profile-actions">
                {isEditing ? (
                    <div>
                        <button onClick={handleSubmit} className="btn btn-primary">Save</button>
                        <button onClick={toggleEdit} className="btn btn-secondary">Cancel</button>
                    </div>
                ) : (
                    <button onClick={toggleEdit} className="btn btn-primary">Edit Profile</button>
                )}
                <button onClick={() => navigate("/")} className="btn btn-danger">Go Home</button>  {/* Use navigate() here */}
            </div>
        </div>
    );
};

export default Profile;
