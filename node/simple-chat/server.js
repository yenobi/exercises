const http = require('http');
const fs = require('fs');
const Chat = require('./chat');

const port = 1337;
const chat = new Chat();

http.createServer((req, res) => {
   switch (req.url) {
       case '/':
           sendFile('index.html', res);
           break;

       case '/subscribe':
           chat.subscribe(req, res);
           break;

       case '/publish':
           let body = '';
           req.on('readable', () => {
               body += req.read();

               if (body.length > 1e4) {
                   res.statusCode = 413;
                   res.end('Your message is too big');
               }
           }).on('end', () => {
               try {
                   body = body.substring(0, body.indexOf('null'));
                   body = JSON.parse(body);
               } catch(e) {
                   res.statusCode = 400;
                   res.end('Bad request');
                   return;
               }
           });
           chat.publish(body);
           res.end('ok');
           break;

       default:
           res.statusCode = 404;
           res.end('Not Found');
   }


}).listen(port);

console.log(`Server is listening ${port}`);

function sendFile(filename, res) {
    const file = fs.createReadStream(filename);

    file.pipe(res);

    file.on('error', (err) => {
        res.statusCode = 500;
        res.end('Server error');
        console.error(err);
    });

    res.on('close', () => {
        file.destroy();
    });
}