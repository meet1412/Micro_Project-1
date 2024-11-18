const express = require('express');
const app = express();
const path = require('path');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import JSON data
const jsonData = require('./data/items.json');

// API route to fetch JSON data
app.get('/api/data', (req, res) => {
    res.json(jsonData);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
