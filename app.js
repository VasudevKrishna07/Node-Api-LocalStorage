// app.js
const express = require('express');
const logger = require('./middlewares/logger');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// Parse JSON request body
app.use(express.json());

// Log every request
app.use(logger);

// Root welcome route
app.get('/', (req, res) => {
    res.send('Welcome to the User API (In‑Memory Version) — Use /api/users to interact');
});

// Ignore favicon requests
app.get('/favicon.ico', (req, res) => res.status(204).end());

// API routes
app.use('/api', userRoutes);

// 404 handler for unmatched URLs
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('Server Error:', err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
