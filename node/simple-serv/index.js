const http = require('http');
const url = require('url');
const fs = require('fs');
const serveStatic = require('serve-static');
const contentDisposition = require('content-disposition');


const serve = serveStatic('./views/landing/cf-maker/lib');
const server = new http.Server();

server.on('request', (req, res) => {
   const parsedUrl = url.parse(req.url, true);

   if (parsedUrl.pathname === '/') {
       // res.end('find a page!');

       fs.stat('./views/landing/cf-maker/index.html', (err, data) => {
           if (err) throw err;

           fs.readFile('./views/landing/cf-maker/index.html', (err, data) => {
               if (err) throw err;

               serve(req, res, () => {
               // res.writeHead(200, {'Content-Type': 'text/html'});
               res.write(data);
               res.end();
               });

           });
       });
   } else {
       res.statusCode = 404;
       res.end('Page not found');
   }
});

server.listen(1337, '127.0.0.1');

function setHeaders (res, path) {
    res.setHeader('Content-Disposition', contentDisposition(path))
}