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
        return food.slice();
      };

      // не пойму почему не работает
      this.removeFood = function(item) {
        let index = food.indexOf(item);

        if (index >= 0) {
          food.splice(index, 1);
        };
      };

      // this.filterFood = function(func(item)) {
      //   return food.filter(func(item));
      // };
  }

    var fridge = new Fridge(500);
      fridge.enable();
      fridge.addFood({
        title: "котлета",
        calories: 100
      });
      fridge.addFood({
        title: "сок",
        calories: 30
      });
      fridge.addFood({
        title: "зелень",
        calories: 10
      });
      fridge.addFood({
        title: "варенье",
        calories: 150
      });
      console.log(fridge.getFood().length);
      fridge.removeFood({
        title: "зелень",
        calories: 10
      });
      console.log(fridge.getFood().length);

      fridge.filterFood(function(item) {
        return item.calories < 50;
      });
})(document, window, undefined);
