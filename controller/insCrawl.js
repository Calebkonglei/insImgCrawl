var request = require('request');
module.exports = () => {
    request('https://www.instagram.com/grantgust/', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    });
}