'use strict';
(function(document, window, undefined) {

  function Machine(power) {
    this._power = power;
    this._enabled = false;

    let self = this;

    this.enable = function() {
      self._enabled = true;
    };

    this.disable = function() {
      self._enabled = false;
    };
  }

    function Fridge(power) {
      Machine.apply(this, arguments);
      // let self = this;

    // this.food = [];
    let food = [];

    const CAPACITY = power/100;

    // рабочий сеттер
    this.addFood = function(item) {
      if(!this._enabled) {
        console.log('fridge is off');
        return;
      };

      if (food.length + arguments.length >= CAPACITY) {
        console.log('fridge is full');
          return;
        };

        let argumentsArray = Array.from(arguments);
          argumentsArray.forEach(function(el) {
            food.push(el);
        });
      };

      this.getFood = function() {
        // console.log(food);
        return food;
      };
    //
    //   неправильно работающщий геттер
    //   this.getFood = function() {
    //     // need to return public food, not private
    //     return food;
    //     // let foodCopy = food.slice();
    //     // return foodCopy;
    //   };
    }

    // let fridge = new Fridge(200);
    // fridge.enable();
    // fridge.addFood("котлета");

    // let fridge = new Fridge(500);
    // fridge.enable();
    // fridge.addFood("котлета");
    // fridge.addFood("сок", "зелень");
    // fridge.getFood();
    // fridge.addFood("варенье", "пирог", "торт");
    // fridge.getFood();

    // третья задача
    let fridge = new Fridge(500);
    fridge.enable();
    fridge.addFood("котлета");
    fridge.addFood("сок", "варенье");

    let fridgeFood = fridge.getFood();
    console.log( fridgeFood ); // котлета, сок, варенье

    // добавление элементов не влияет на еду в холодильнике
    fridgeFood.push("вилка", "ложка");

    console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье
    console.log(fridgeFood);
    fridgeFood = ["вилка", "ложка"];
    console.log(fridgeFood);
    console.log( fridge.getFood() );
})(document, window, undefined);
