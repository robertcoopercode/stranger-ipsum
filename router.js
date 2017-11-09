// Require the necessary modules
const generator = require("./generator.js");
const querystring = require("querystring");
const fs = require("fs");

const path = require('path');

// Location of your favicon in the filesystem.
const FAVICON = path.join(__dirname, 'favicon.ico');

function router(request, response) {

  // Load the Favicon
  if (request.method.toLowerCase() === "get" && request.url === '/favicon.ico') {
    response.setHeader('Content-Type', 'image/x-icon');
    let fileContents = fs.readFileSync(FAVICON);
    response.write(fileContents, {encoding: "utf8"});
    response.end();
  }

  if (request.url === "/") {
    // If URL == "/" && GET
      if (request.method.toLowerCase() === "get") {
      response.setHeader('Content-Type', 'text/html');
      let fileContents = fs.readFileSync("./public/index.html", {encoding: "utf8"});
      response.write(fileContents);
      response.end();
    } else {
    // Else the URL == "/" && POST
      // Get the POST data from input
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
    }
  }
};

module.exports.router = router;
