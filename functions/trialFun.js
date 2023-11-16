const express = require('express');
exports.handler = async (event, context) => {
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello, this is a basic Node.js project!');
    });
    app.get('/second', (req, res) => {
        res.send('no Hello!');
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        // console.log(`Server running on port ${PORT}`);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: `Server running on port ${PORT}` }),
        };
    });
    // console.log("kjdsf")

    // return {
    //     statusCode: 200,
    //     body: JSON.stringify({ message: 'in trial fun' }),
    // };
};
