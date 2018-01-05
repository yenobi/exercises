// node app.js --port=3000 for example
// or supervisor -- app.js --port=3000

const domain = require('domain');
const serverDomain = domain.create();
const port = 3000;
const opts = require('optimist').argv;
let server;

serverDomain.on('error', (err) => {
  console.log(`Server error is ${err}`);
});

serverDomain.run(() => {
  const handler = require('./server');
  const http = require('http');

  server = http.createServer((req, res) => {
    const reqDomain = domain.create();
    reqDomain.add(req);
    reqDomain.add(res);

    reqDomain.on('error', (err) => {
      res.statusCode = 500;
      res.end(`Sorry ${err}`);
      console.error(`Error for req is ${err}`);

      serverDomain.emit('error', err);
    })

    reqDomain.run(() => {
      handler(req, res);
    })
  });

  server.listen(opts.port);
  console.log(`Server is running on ${opts.port}`);
});
