const http = require('http');

// request object and response object
const server = http.createServer((req, res) => { // creates and stores the server
  console.log('request made');
});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
  // will continue running/listening, it's waiting for requests to be made on locahost:3000
});

// ^this fires when we start listening
// localhost is like a domain name on the web
//    listens to requests coming to our own computer
//    port number are like 'doors' into a computer
//    each server has it's own port number ie. skype, discord, outlook etc.

