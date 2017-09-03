// Require the necessary modules
const generator = require("./generator.js");
const querystring = require("querystring");
const fs = require("fs");

function router(request, response) {

  if (request.url === "/") {
    // If URL == "/" && GET
    if (request.method.toLowerCase() === "get") {
      response.setHeader('Content-Type', 'text/html');
      let fileContents = fs.readFileSync("./index.html", {encoding: "utf8"});
      response.write(fileContents);
      response.end();
    } else {
    // Else the URL == "/" && POST
      // Get the POST data from input
      request.on("data", function(inputValue) {
        let query = inputValue.toString();
        let numberOfParagraphs = querystring.parse(query).numberOfParagraphs;
        let loremIpsumText = generator.loremIpsum.getAllParagraphs(numberOfParagraphs);
        let fileContents = fs.readFileSync("./index.html", {encoding: "utf8"});
        fileContents = fileContents.replace("<div class='lorem-ipsum-container'></div>",loremIpsumText);;
        response.setHeader('Content-Type', 'text/html');
        response.write(fileContents);
        response.end();
      });
    }
  }
};

module.exports.router = router;
