// Require the necessary modules
const generator = require("./generator.js");
const querystring = require("querystring");
const fs = require("fs");
const path = require('path');

// Require express and create an express router object
const express = require('express');
const router = express.Router();

// Location of the favicon in our directory 
const FAVICON = path.join(__dirname, 'favicon.ico');

router.get('/favicon.ico', (request, response) => {
  response.setHeader('Content-Type', 'image/x-icon');
  let fileContents = fs.readFileSync(FAVICON);
  response.write(fileContents, {encoding: "utf8"});
  response.end();
});

router.get('/', (request, response) => {
  response.setHeader('Content-Type', 'text/html');
  let fileContents = fs.readFileSync("./public/index.html", {encoding: "utf8"});
  response.write(fileContents);
  response.end();
});

router.post('/', (request, response) => {
  request.on("data", function(inputValue) {
    let query = inputValue.toString();
    let numberOfParagraphs = querystring.parse(query).numberOfParagraphs;
    let loremIpsumText = generator.loremIpsum.getAllParagraphs(numberOfParagraphs);
    let fileContents = fs.readFileSync("./public/index.html", {encoding: "utf8"});
    fileContents = fileContents.replace("<div class='placeholder-div'></div>",loremIpsumText);;
    response.setHeader('Content-Type', 'text/html');
    response.write(fileContents);
    response.end();
  });
});

module.exports = router;
