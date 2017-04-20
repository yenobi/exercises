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
    }

    
})(document, window, undefined);
