const net = require('net');


let server = net.createServer( (socket) => {
    socket.setEncoding('utf8')
    socket.on('data', (chunk) => {
      console.log(chunk);
    })

})

server.listen(8080, '0.0.0.0', () => {
  console.log('Welcome to the server', server.address());
})

