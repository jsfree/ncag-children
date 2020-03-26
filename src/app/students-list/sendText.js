    const http = require("http");
    const hostname = '127.0.0.1';
    const port = 3000;

    const server = http.createServer((req,res)=>{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World');
    });

    server.listen(port, hostname, ()=>{
      console.log(`Server running at http://${hostname}:${port}/`);
    });

    var twilio = require('twilio');
     var accountSid = 'ACec1f8876ec9e326f6fa06feaadea3eeb';
     var authToken ='8deebb986b40e246de7feb1f03900085';
     var client = new twilio(accountSid, authToken);
     
     client.messages.create({
       body: 'come get yo kid!',
       to: '+1'+'student.guardianCell',
       from: '+12057089891'
       
     })
     .then((message) => console.log(message.sid));  
