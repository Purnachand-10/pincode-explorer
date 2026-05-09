import React, { useState } from 'react';
import SearchBox from '../components/SearchBox';
import ResultCard from '../components/ResultCard';
import Loader from '../components/Loader';
import { getPincodeDetails } from '../services/api';
import './Home.css';

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (pincode) => {
        setLoading(true);
        setError(null);
        setData(null);

        try {
            const result = await getPincodeDetails(pincode);
            setData(result);
        } catch (err) {
            setError(typeof err === 'string' ? err : 'Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Pincode Explorer</h1>
                <p>Find details of any postal code in India</p>
            </header>
            
            <main>
                <SearchBox onSearch={handleSearch} />
                
                {loading && <Loader />}
                
                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}
                
                {data && <ResultCard data={data} />}
            </main>
        </div>
    );
};

export default Home;
