// jshint esversion: 6
const net = require('net');
const error = require('./gist/404.js');


let serverName;
let date;

function response(method, uri) {
  console.log('response works');
  switch(uri) {
    case '/':
    case '/index.html':
      process.stdout.write(`index or /`);
      break;
    case '/hydrogen.html':
      break;
    case '/helium.html':
      break;
    case '/404.html':
      process.stdout.write(error.error);
      break;
    case '/css/styles.css':
      break;
    default:
      break;
  }
}

let server = net.createServer( (socket) => {
    socket.setEncoding('utf8');

    socket.on('data', (chunk) => {
      let request = chunk.split( ' ');
      let responseMethod = request[0];
      let uriResponse = request[1];

      console.log(chunk);
      // console.log(chunk.split(" "));
      // console.log(uriResponse);
      response(responseMethod, uriResponse);
    });

});

server.listen(8080, '0.0.0.0', () => {
  console.log('Welcome to the server', server.address());
});