// Require the necessary modules
const loremIpsum = require("./generator.js");
const querystring = require("querystring");
const fs = require("fs");
const path = require('path');
const app = require('./app.js').app

// Require express and create an express router object
const express = require('express');
const router = express.Router();

app.all('*', (request, response, next) => {
    const full = request.headers.host
    const parts = full.split('.')
    const subdomain = parts[0]
    if (subdomain === 'lorem-ipsum') {
        response.redirect('http://stranger-ipsum.robertcooper.me')
    }
    next()
})

// Location of the favicon in our directory
const FAVICON = path.join(__dirname, 'favicon.ico');

// Route that serves the application Favicon
router.get('/favicon.ico', (request, response) => {
  response.setHeader('Content-Type', 'image/x-icon');
  let fileContents = fs.readFileSync(FAVICON);
  response.write(fileContents, {encoding: "utf8"});
  response.end();
});

// Route that generates the lorem ipsum text and reloads a modified index.html
router.post('/', (request, response) => {
  request.on("data", function(inputValue) {
    // Convert the POST data into a readable string
    let query = inputValue.toString(); // i.e. numberOfParagraphs=3
    // Parse the query into a key/value pair and store the value of numberOfParagraphs
    // in a variable
    let numberOfParagraphs = querystring.parse(query).numberOfParagraphs;
    // Generate the lorem ipsum text with the getAllParagraphs function
    let loremIpsumText = loremIpsum.getAllParagraphs(numberOfParagraphs);
    // Capture the contents of index.html in a variable
    let fileContents = fs.readFileSync("./public/index.html", {encoding: "utf8"});
    // Replace the placeholder <div> with the lorem ipsum text
    fileContents = fileContents.replace("<div class='placeholder-div'></div>",loremIpsumText);;
    response.setHeader('Content-Type', 'text/html');
    // Send a response to the client with the modified index.html file
    response.write(fileContents);
    response.end();
  });
});

module.exports = router;
