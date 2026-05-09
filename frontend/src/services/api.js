import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getPincodeDetails = async (pincode) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/pincodes/${pincode}`);
        return response.data;
    } catch (error) {
        console.error("API Fetch Error:", error);
        throw error.response?.data?.message || 'Error fetching pincode data';
    }
};
