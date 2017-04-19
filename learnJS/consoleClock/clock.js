function Clock(options) {
  this._template = options.template;
}

Clock.prototype._render = function() {
  console.log(this._template);

      var date = new Date();

      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      var min = date.getMinutes();
      if (min < 10) min = '0' + min;

      var sec = date.getSeconds();
      if (sec < 10) sec = '0' + sec;

      var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
};

Clock.prototype.stop = function() {
   clearInterval(this._timer);
};

Clock.prototype.start = function() {
    this._render();
    //  четко закрепляем контекст исполнения, чтобы не съехал
    // и всегда знал свой темплэйт
    var self = this;
    this._timer = setInterval( function() {
      self._render()
    }, 1000);
};

// task 2 - to extend clock with new class with precision
function ExtendedClock (options) {
  this._template = options.template;
  this._precision = options.precision;
}

ExtendedClock.prototype = Object.create(Clock.prototype);
ExtendedClock.prototype.constructor = ExtendedClock;

ExtendedClock.prototype.start = function() {
  this._render();

      var self = this;
    this._timer = setInterval( function() {
      self._render()
    }, this._precision);
};