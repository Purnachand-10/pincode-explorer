const db = require('../config/db');

const logSearchHistory = async (pincode) => {
    try {
        const query = 'INSERT INTO search_history (pincode) VALUES (?)';
        await db.execute(query, [pincode]);
    } catch (error) {
        console.error("DB Insert Error:", error.message);
    }
};

module.exports = { logSearchHistory };
