// Require the necessary modules 
var fs = require("fs");

function renderLoremIpsum(templateName, text, response) {
  var fileContents = fs.readFileSync("./views/" + templateName + ".html", {encoding: "utf8"});
  fileContents = fileContents.replace("<div class='lorem-ipsum-container'></div>",text);;
  response.write(fileContents);
}

module.exports.renderLoremIpsum = renderLoremIpsum;
