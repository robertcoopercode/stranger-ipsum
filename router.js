// Require the necessary modules
const loremIpsum = require("./generator.js");
const querystring = require("querystring");
const fs = require("fs");
const path = require('path');

// Require express and create an express router object
const express = require('express');
const router = express.Router();

const full = window.location.host
//window.location.host is subdomain.domain.com
const parts = full.split('.')
const sub = parts[0]
const domain = parts[1]
const type = parts[2]
console.log(sub)
console.log('domain: ', domain)
//sub is 'subdomain', 'domain', type is 'com'
// var newUrl = 'http://' + domain + '.' + type + '/your/other/path/' + subDomain
// window.open(newUrl);

// Location of the favicon in our directory
const FAVICON = path.join(__dirname, 'favicon.ico');

// Route that serves the application Favicon
router.get('/favicon.ico', (request, response) => {
  response.setHeader('Content-Type', 'image/x-icon');
  let fileContents = fs.readFileSync(FAVICON);
  response.write(fileContents, {encoding: "utf8"});
  response.end();
});

// Route that serves index.html
router.get('/', (request, response) => {
  response.setHeader('Content-Type', 'text/html');
  // Capture the contents of index.html in a variable
  let fileContents = fs.readFileSync("./public/index.html", {encoding: "utf8"});
  // Send a response to the client with the index.html file
  response.write(fileContents);
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
