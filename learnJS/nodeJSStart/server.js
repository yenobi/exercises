var db = require('./db');
db.connect();

var user = require('./user');

function run() {
  var vasya = new user.User('Вася');
  var petya = new user.User('Петя');

  vasya.hello(petya);

  console.log(db.getPhrases("run sucess"));
};

if (module.parent) {
  exports.run = run;
} else {
  run();
}
