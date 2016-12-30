const net = require('net');


let serverName;
let date;

let server = net.createServer( (socket) => {
    socket.setEncoding('utf8')

    socket.on('data', (chunk) => {
      let request = chunk.split( ' ');
      let responseMethod = request[0];
      let uriResponse = request[1];

      console.log(chunk);
      // console.log(chunk.split(" "));
      // console.log(uriResponse);
    })

})

server.listen(8080, '0.0.0.0', () => {
  console.log('Welcome to the server', server.address());
})