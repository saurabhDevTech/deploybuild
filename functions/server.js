exports.handler = async (event, context) => {
    function trialName() {
        return "function working fine aksdj"
    }
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Serverless function executed! hehe' }),
    };
};
