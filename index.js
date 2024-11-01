const express = require('express');
const app = express();
require('dotenv').config();

const path = require('path');
const cors = require('cors');

const router = (global.router = express.Router());
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/profile', require('./routes/profile.js'));
app.use('/api/toilet', require('./routes/toilet.js'));
app.use(router);

// Serve frontend only in development
if (process.env.NODE_ENV === 'development') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build/index.html'));
    });
}

app.listen(port, () => {
    console.log(`Toilify server listening at http://localhost:${port}`);
});
