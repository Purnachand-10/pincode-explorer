import React from 'react';
import './ResultCard.css';

const ResultCard = ({ data }) => {
    if (!data || data.length === 0) return null;

    return (
        <div className="results-container">
            {data.map((office, index) => (
                <div key={index} className="result-card">
                    <h3>{office.Name}</h3>
                    <p><strong>Branch Type:</strong> {office.BranchType}</p>
                    <p><strong>Delivery Status:</strong> {office.DeliveryStatus}</p>
                    <p><strong>District:</strong> {office.District}</p>
                    <p><strong>State:</strong> {office.State}</p>
                </div>
            ))}
        </div>
    );
};

export default ResultCard;
