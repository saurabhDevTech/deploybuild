exports.handler = async (event, context) => {
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello, this is a basic Node.js project!');
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Serverless function executed!' }),
    };
};