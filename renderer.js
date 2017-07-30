// Require the necessary modules
var fs = require("fs");

function renderLoremIpsum(templateName, text, response) {
  let fileContents = fs.readFileSync("./views/" + templateName + ".html", {encoding: "utf8"});
  fileContents = fileContents.replace("<div class='lorem-ipsum-container'></div>",text);;
  response.write(fileContents);
}

function view(templateName, response) {
  let fileContents = fs.readFileSync("./views/" + templateName + ".html", {encoding: "utf8"});
  response.write(fileContents);
}

module.exports.renderLoremIpsum = renderLoremIpsum;
module.exports.view = view;
