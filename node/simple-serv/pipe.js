const http = require('http');
const fs = require('fs');

const port = 1337;

new http.Server((req, res) => {
    if (req.url === '/big.html') {

        const file = new fs.ReadStream('big.html');

        // sendFile(file. res);
        sendWithPipe(file, res);
        // работает, но медленный (так как сначала читается файл и только потом отправляется
        // fs.readFile('big.html', (err, content) => {
        //     if (err) {
        //         res.statusCode = 500;
        //         res.end('Server error');
        //     } else {
        //         res.setHeader('Content-type', 'text/html; charset=utf-8');
        //         res.end(content);
        //     }
        // });
    }
}).listen(port);

console.log(`Server is listening ${port}`);

// common algorithm of exechangeing data from readable stream to writable stream
// so we can use file.pipe(res); (it's our sendFile function
function sendFile(file, res) {
    file.on('readable', write);

    file.on('end', () => {
        res.end();
    });

    function write() {
        const fileContent = file.read();

        // res.write(fileContent) returns true if client receive data fast, so code below won't be executed ever
        // res.write(fileContent) return false whenever buffer is full -> temporary remove listener with writing ->
        // waiting for drain of stream -> adding listener back and execute write() to make buffer empty if it has data
        if (fileContent && !res.write(fileContent)) {
            file.removeListener('readable');

            res.once('drain', () => {
                file.on('readable', write);
                write();
            })
        }
    }
}

// example with pipe

function sendWithPipe(file, res) {
    file.pipe(res);

    file.on('error', (err) => {
        res.statusCode = 500;
        res.end('Server error');
        console.error(err);
    });

    // handler for interaption of connection
    // normal ending of res-stream is finish event
    res.on('close', () => {
        file.destroy();
    });
}

// with pipe we can 1 readable stream path to more than one writable