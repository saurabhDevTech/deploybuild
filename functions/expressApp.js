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

// Export the Express app as a handler for Netlify Function
module.exports.handler = (event, context) => {
  const handler = app;
  return handler(event, context);
};
