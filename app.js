// Require necessary modules
const http = require('http');
const express = require('express');
const app = express();
const router = require('./router.js').router;
// Define the hostname and port where the server can be found
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

// Define the directory where static files are found
app.use(express.static('public'));

app.use( (req, res, next) => {
  router(req, res);
});

// Begin accepting connections to the specified port
app.listen(port, () => {
  // Display server location information to the console
  console.log(`Server is listening at http://${hostname}:${port}/`);
})
