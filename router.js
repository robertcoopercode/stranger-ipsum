const generator = require("./generator.js");

let commonHeaders = ['Content-Type', 'text/html'];

function router(request, response) {
  // If URL == "/" && GET request
  if (request.url === "/" && request.method.toLowerCase() === "get") {
    response.setHeader(commonHeaders[0], commonHeaders[1]);
    response.write(generator.loremIpsum.getAllParagraphs());
    response.end();
  };
}

module.exports.router = router;
