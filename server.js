const net = require('net');


let serverName;
let date;

let server = net.createServer( (socket) => {
    socket.setEncoding('utf8')

    socket.on('data', (chunk) => {
      let request = chunk.split( ' ');
      let responseMethod = request[0];//response code
      let uriResponse = request[1];//URI

      console.log(chunk);

    })

})

server.listen(8080, '0.0.0.0', () => {
  console.log('Welcome to the server', server.address());
})