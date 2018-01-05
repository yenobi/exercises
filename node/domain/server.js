const fs = require('fs');

module.exports = function handler(req, res) {
  if (req.url === '/') {
    fs.readFile('index.html', (err, content) => {
      if (err) throw err;

      res.end(content);
    });
  } else {
    res.statusCode = 404;
    res.end('File not found');
  }
}
