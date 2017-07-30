// Require the necessary modules
const generator = require("./generator.js");
const renderer = require("./renderer.js");
const querystring = require("querystring");

function router(request, response) {

  if (request.url === "/") {
    // If URL == "/" && GET
    if (request.method.toLowerCase() === "get") {
      response.setHeader('Content-Type', 'text/html');
      renderer.view("index", response);
      response.end();
    } else {
    // Else the URL == "/" && POST
      console.log("The submit buttom got pressed");
      // Get the POST data from input
      request.on("data", function(inputValue) {
        let query = inputValue.toString();
        let numberOfParagraphs = querystring.parse(query).numberOfParagraphs;
        let loremIpsumText = generator.loremIpsum.getAllParagraphs(numberOfParagraphs);
        response.setHeader('Content-Type', 'text/html');
        renderer.renderLoremIpsum("index", loremIpsumText , response);
        response.end();
      });
    }
  }
};

module.exports.router = router;
