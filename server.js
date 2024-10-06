require('dotenv').config();

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');  // Import the path module

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the current directory
app.use(express.static(path.join(__dirname))); // Serve files from the root directory

// Serve index.html when accessing the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Serve index.html file
});

// GitHub OAuth Callback Route
app.get('/auth/github/callback', async (req, res) => {
    const { code } = req.query;

    if (!code) {
        return res.status(400).send('No code provided');
    }

    try {
        const tokenResponse = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: process.env.GITHUB_CLIENT_ID,  // Use the environment variable
            client_secret: process.env.GITHUB_CLIENT_SECRET,  // Use the environment variable
            code: code
        }, {
            headers: {
                accept: 'application/json'
            }
        });

        const accessToken = tokenResponse.data.access_token;

        // Store the access token securely
        console.log('Access Token:', accessToken);

        // Optionally store the access token in the .env file or a secure location
        res.send('GitHub Auth successful! Token received.'); // Optional: Adjust based on your app logic
    } catch (error) {
        console.error('Error during token exchange:', error);
        res.status(500).send('Failed to authenticate');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
