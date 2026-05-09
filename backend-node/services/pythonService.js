const axios = require('axios');

const fetchFromPythonService = async (pincode) => {
    try {
        const pythonApiUrl = process.env.PYTHON_API_URL || 'http://localhost:8000/api';
        const response = await axios.get(`${pythonApiUrl}/pincode/${pincode}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching from Python service:", error.message);
        throw new Error('Python service unavailable');
    }
};

module.exports = { fetchFromPythonService };
