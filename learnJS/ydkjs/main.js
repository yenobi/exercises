(function() {
    var TAX_RATE = 0.15;
    var PHONE_PRICE = 100;
    var ACCESSORY_PRICE = 10;
    var SPENDING_THRESHOLD = 1000;

    var bankBalance = 1500;
    var amount = 0;
    var spend = 0;

    // 1. a phone buy
    (function buyPhone() {
      var realPhonePrice = PHONE_PRICE + PHONE_PRICE*TAX_RATE;
      while ( (spend + realPhonePrice) < SPENDING_THRESHOLD) {
        if (realPhonePrice < bankBalance) {
          amount++;
          bankBalance -= realPhonePrice;
          spend += realPhonePrice;

          if ( amount != 0) {
            var realAccessoryPrice = ACCESSORY_PRICE + ACCESSORY_PRICE*TAX_RATE;

            if ( (spend + realAccessoryPrice) < SPENDING_THRESHOLD ) {
              bankBalance -= realAccessoryPrice;
              spend += realAccessoryPrice;
            }
          }
          console.log('You have ' + amount + ' phones with accessory now.');
          console.log('You have spend ' + '$' + spend + '.');
          console.log('Your bank balnce is ' + '$' + bankBalance + ' now.');
        }
      }
      console.log("You can't afford one more phone.");
    })();

})();
