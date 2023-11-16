// functions/expressApp.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from the index route using Express!' });
});

app.get('/about', (req, res) => {
    res.status(200).json({ message: 'This is the about route using Express!' });
});

app.get('/contact', (req, res) => {
    res.status(200).json({ message: 'You\'ve reached the contact route using Express!' });
});

// Creating a handler function that returns a promise
const handler = async (event, context) => {
    return new Promise((resolve, reject) => {
        try {
            // Simulate the Express request and response objects
            const req = { ...event };
            const res = {
                statusCode: 200,
                body: '',
                headers: {},
                setHeader: (key, value) => {
                  res.headers[key] = value;
                },
                end: (body) => {
                  res.body = body;
                  resolve({
                    statusCode: res.statusCode,
                    body: res.body,
                    headers: res.headers,
                  });
                },
              };

            // Trigger the Express app using our simulated request and response
            app(req, res);
        } catch (error) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'here we go again' }),
            };
        }
    });
};

// Export the handler function for Netlify Function
exports.handler = handler;
