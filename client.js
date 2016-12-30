// jshint esversion: 6
const net = require('net');

let client = net.createConnection( { port: 8080 }, () => {
  let reqMethod = process.argv[2];
  let reqUri = process.argv[3];
  console.log(reqMethod, reqUri);

});
