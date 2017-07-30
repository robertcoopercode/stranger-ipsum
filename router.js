// Require the necessary modules
const generator = require("./generator.js");
const renderer = require("./renderer.js");

function router(request, response) {
  // If URL == "/" && GET request
  if (request.url === "/" && request.method.toLowerCase() === "get") {
    let loremIpsumText = generator.loremIpsum.getAllParagraphs(2);
    response.setHeader('Content-Type', 'text/html');
    renderer.renderLoremIpsum("index", loremIpsumText , response);
    response.end();
  };
}

module.exports.router = router;
