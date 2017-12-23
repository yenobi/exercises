const http = require('http');
const url = require('url');

const server = new http.Server(); // eventEmitter

server.on('request', (req, res) => {
    // console.info(req.method, req.url);
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === '/echo' && parsedUrl.query.message ) {
        // second way to write headers that won't wait for end
        // res.writeHeader(200, "OK", {'Cache-control':'no-cache'});
        res.setHeader('Cache-control', 'no-cache'); // removeHeader - this (main way) will w8 for res.end();
        res.end(parsedUrl.query.message);
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});




// simple echo-server
// server.on('request', (req, res) => {
//     console.info(req.method, req.url);
//     const parsedUrl = url.parse(req.url, true);
//     if (parsedUrl.pathname === '/echo' && parsedUrl.query.message ) {
//         res.end(parsedUrl.query.message);
//     } else {
//         res.statusCode = 404;
//         res.end('Page not found');
//     }
// });

server.listen(1337, '127.0.0.1');

