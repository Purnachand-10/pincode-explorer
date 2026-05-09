import React, { useState } from 'react';
import './SearchBox.css';

const SearchBox = ({ onSearch }) => {
    const [pincode, setPincode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pincode.length === 6) {
            onSearch(pincode);
        } else {
            alert("Please enter a valid 6-digit pincode.");
        }
    };

    return (
        <form className="search-box" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter 6-digit Pincode" 
                value={pincode} 
                onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                maxLength="6"
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
};

export default SearchBox;
