// Problem: We need a way to generator paragraphs of random dummy text
// Solution: Use Node.js to take the number of paragraphs as an input from
// the user and then serve the result via HTTP

// Require necessary modules
const http = require('http');
const router = require('./router.js');

// Define the hostname and port where the server can be found
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

// Create a web server
const server = http.createServer((request, response) => {
  // If the server was created successfully, the statusCode will be set to 200
  response.statusCode = 200;
  // Serve the appropriate result by calling the router function inside the router module
  router.router(request, response);
});

// Listen to port that is being used
server.listen(port, () => {
  // Display server location information to the console
  console.log(`Server is listening at http://${hostname}:${port}/`);
})
