const http = require('http');
const fs = require('fs');

let foods = ['pizza', 'pasta', 'potato', 'pumpkin', 'prawns', 'poppy seeds'];

function pickFromArray(arr){
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// creates the server
const server = http.createServer((req, res) => {
  console.log(req.url);

  res.setHeader('Content-Type', 'application/json'); 
  res.write(pickFromArray(foods)); 
  res.end(); 
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
  });

