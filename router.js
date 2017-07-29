const generator = require("./generator.js");
const renderer = require("./renderer.js");

let commonHeaders = ['Content-Type', 'text/html'];

function router(request, response) {
  // If URL == "/" && GET request
  if (request.url === "/" && request.method.toLowerCase() === "get") {
    response.setHeader(commonHeaders[0], commonHeaders[1]);
    // response.write(generator.loremIpsum.getAllParagraphs());
    renderer.renderLoremIpsum("index", generator.loremIpsum.getAllParagraphs(), response);
    response.end();
  };
}

module.exports.router = router;
