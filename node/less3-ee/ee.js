const EventEmitter = require('events').EventEmitter;

const server = new EventEmitter;

server.on('request', (request) => {
    request.approved = true;
});

server.on('request', (request) => {
    console.log(request);
});

server.emit('request', {from: 'Client'});

server.emit('request', {from: 'one more Client'});

// console.log(server.listeners('request'));
// listenerCount() -?

server.on('error', (err) => {
//    do smth with err
});
// errors
// server.emit('error'); // throw TypeError
server.emit('error', new Error('some error')); // throw error with msg

// should write own handlers before error emitted
