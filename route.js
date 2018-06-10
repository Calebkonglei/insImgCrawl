// var insCrawl = require('./controller/insCrawl');
var request = require('request');
var options = {
    // 'origin': 'https://www.instagram.com',
    // 'referer': 'https://www.instagram.com/p/Biu7ICFn4Ti/?taken-by=grantgust',
    // 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
   
    "url": "https://www.google.com/",

}

module.exports = (app) => {
    app.get('/', (req,res) => {
        // insCrawl();
        // request.get(options, function (error, response, body) {
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        res.send(`hahhha`)
    })
}