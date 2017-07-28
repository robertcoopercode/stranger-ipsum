// Problem: We need a way to generator paragraphs of random dummy text
// Solution: Use Node.js to take the number of paragraphs as inputs and then serve our template via HTTP

const http = require('http');
const hostname = "127.0.0.1";
const port = 3000;

// Create a web server
const server = http.createServer((request, response) => {
  response.statusCode = 200;
});

// Listen to port 3000
