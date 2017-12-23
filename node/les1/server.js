const log = require('logger')(module);
const db = require('db');

db.connect();

const User = require('./user');

function run() {
  const john = new User('John');
  const jade = new User('Jade');

  john.hello(jade);
  log(db.getPhrase('Run successful'));
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}

