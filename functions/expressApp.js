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
    // Simulate the Express request and response objects
    const req = { ...event };
    const res = {
      status: (statusCode) => ({
        json: (data) => resolve({ statusCode, body: JSON.stringify(data) }),
      }),
    };

    // Trigger the Express app using our simulated request and response
    app(req, res);
  });
};

// Export the handler function for Netlify Function
exports.handler = handler;
