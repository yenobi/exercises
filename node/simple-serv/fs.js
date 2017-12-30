const fs = require('fs');

const stream = new fs.ReadStream(__filename, {encoding: 'utf-8'});

stream.on('readable', () => {
    const data = stream.read();
    console.log(data);
});

stream.on('end', () => {
    console.log('THE END');
});

stream.on('error', (err) => {
   if (err.code === 'ENOENT') {
       console.log('There is no file');
   } else {
       console.error(err);
   }
});