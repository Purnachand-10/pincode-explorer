const { fetchFromPythonService } = require('../services/pythonService');
const { logSearchHistory } = require('../services/dbService');

const getPincodeData = async (req, res) => {
    try {
        const { pincode } = req.params;
        
        // Log to database asynchronously
        logSearchHistory(pincode).catch(console.error);
        
        // Fetch from python service
        const data = await fetchFromPythonService(pincode);
        
        if (!data) {
            return res.status(404).json({ message: 'Pincode not found' });
        }
        
        res.json(data);
    } catch (error) {
        console.error("Error in getPincodeData controller:", error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getPincodeData };
