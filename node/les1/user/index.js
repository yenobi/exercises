const db = require('db');
const log = require('logger')(module);


class User {
  constructor(name) {
    this.name = name;
  }

  hello(who) {
    log(`${this.name} says '${db.getPhrase('Hello')}, ${who.name}'`);
  }
}

// exports.User = User;
module.exports = User;

// console.log(module);
