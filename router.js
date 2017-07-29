// const generator = require("./generator.js");

let commonHeaders = ['Content-Type', 'text/html'];

function router(request, response) {
  // If URL == "/" && GET request
  if (request.url === "/" && request.method.toLowerCase() === "get") {
    console.log("This worked and we are on the home page");
    response.setHeader(commonHeaders[0], commonHeaders[1]);
    response.write("Home Page :D");
    response.end();
  };
}

module.exports.router = router;
