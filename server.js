// jshint esversion: 6
const net = require('net');
const error = require('./gist/404.js');
const helium = require('./gist/helium.js');
const hydrogen = require('./gist/hydrogen.js');

let server = net.createServer( (socket) => {
    socket.setEncoding('utf8');

    socket.on('data', (chunk) => {
      let request = chunk.split( ' ');
      let responseMethod = request[0];//GET PST
      let uriResponse = request[1];//
      let host = request[3]
      let timeStamp = new Date();
      // console.log(chunk);

      switch(uriResponse) {
        case '/':
        case '/index.html':
          process.stdout.write(`${error.headerHandler(responseMethod, timeStamp, host)}\n \n ${error.body}`);
          break;
        case '/hydrogen.html':
          process.stdout.write(`${hydrogen.headerHandler(responseMethod, timeStamp, host)}\n \n ${hydrogen.body}`);
          break;
        case '/helium.html':
          process.stdout.write(`${helium.headerHandler(responseMethod, timeStamp, host)}\n \n ${helium.body}`);
          break;
        case '/404.html':
          socket.write(error.error);
          break;
        case '/css/styles.css':
          break;
        default:
          break;
      }
    });

});

server.listen(8080, '0.0.0.0', () => {
  console.log('Welcome here')
})
