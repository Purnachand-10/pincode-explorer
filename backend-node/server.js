require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pincodeRoutes = require('./routes/pincodeRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/pincodes', pincodeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Node Server running on port ${PORT}`);
});
