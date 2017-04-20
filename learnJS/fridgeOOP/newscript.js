'use strict';

// конструктор прототипа
function Machine(power) {
  this._power = power;
  this._enabled = false;
};

// методы конструктора
Machine.prototype.enable = function () {
  this._enabled = true;
};

Machine.prototype.disable = function () {
  this._enabled = false;
};

// конструктор холодильника
function Fridge(power) {
  this._power = power;
  this._CAPACITY = power/100;
  // фактически свойство фуд публичное, но защищенное,
  // потому приватное
  this._food = [];
}

// наследование прототипа + явное указание конструктора
Fridge.prototype = Object.create(Machine.prototype);
Fridge.prototype.constructor = Fridge;
// методы холодильника

Fridge.prototype.addFood = function(item) {
  let self = this;

  if(!this._enabled) {
    console.log('fridge is off');
    return;
  };

  if (self._food.length + arguments.length >= self._CAPACITY) {
    console.log('fridge is full');
    return;
  };

  let argumentsArray = Array.from(arguments);
    argumentsArray.forEach(function(el) {
    self._food.push(el);
  });
};

Fridge.prototype.getFood = function() {
  let self = this;
  return self._food;
};

// var fridge = new Fridge(200);
// fridge.addFood("котлета"); // ошибка, холодильник выключен

// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "зелень");
// fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье
