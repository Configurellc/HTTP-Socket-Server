// jshint esversion: 6

//header needs request line: [method]GET/[request URI]./404.html
//header needs current date RFC1123 Format Wed, 8 Jul 2015 11:12:31 GMT
//Header needs Host Name www.hostname.com || ip address
//Header needs User agent name of client

 function headerHandler(reqLine, dateTime, host) {
   let Line = reqLine;
   let date = dateTime
   let hostname = host;


   return `${Line}\n${date}\n${hostname}`;
 }


let body = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Element not found!</title>
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <h1>404</h1>
  <h2>Element not found!</h2>
  <p>
    <a href="/">back</a>
  </p>
</body>
</html>`;

module.exports = {
  body: body,
  headerHandler: headerHandler

};

