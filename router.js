// Require the necessary modules
const generator = require("./generator.js");
const renderer = require("./renderer.js");

function router(request, response) {
  // If URL == "/" && GET request
  if (request.url === "/" && request.method.toLowerCase() === "get") {
    response.setHeader('Content-Type', 'text/html');
    renderer.renderLoremIpsum("index", generator.loremIpsum.getAllParagraphs(), response);
    response.end();
  };
}

module.exports.router = router;
