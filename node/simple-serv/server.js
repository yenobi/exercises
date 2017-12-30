const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname + '/pubic/';

http.createServer((req, res) => {

    if (!checkAccess(req)) {
        res.statusCode = 403;
        res.end('Tell secret');
    }

    const parsedUrl = url.parse(req.url);

    sendFileSafe(parsedUrl.pathname, res);
}).listen(1337);

function checkAccess(req) {
    return url.parse(req.url, true).query.secret === 'o_O';
}

function sendFileSafe(filePath, res) {
    // decode uri for utf-8 symbols
    try {
        filePath = decodeURIComponent(filePath);
    } catch (e) {
        badRequest(res);
        return;
    }

    // checking for 0-byte
    if (~filePath.indexOf('\0')) {
        badRequest(res);
        return;
    }

    // normalization of whole filePath
    filePath = path.normalize(path.join(ROOT, filePath));

    // after we have general and normalized path -> check if it leads to our dir
    if (filePath.indexOf(ROOT) !== 0) {
       fileNotFound(res);
       return;
    }

    // check if file exists and filepath didn't lead to directory
    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            fileNotFound(res);
            return
        }
    });

    sendFile(filePath, res);
}

function badRequest(res) {
    res.statusCode = 400;
    res.end('Bad request');
}

function fileNotFound(res) {
    res.statusCode = 404;
    res.end('File not Found');
}

function sendFile(filePath, res) {
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;

        // explore mime-type of file and setting it to headers
        const mime = require('mime').lookup(filePath);
        res.setHeader('Content-Type', `${mime}; charset=utf-8`);
        res.end(data);
    })
}