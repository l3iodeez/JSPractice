function Clock () {
}

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  console.log(this.currentTime.getHours() + ":" + this.currentTime.getMinutes() + ":" + this.currentTime.getSeconds())
};

Clock.prototype.run = function () {
  // 1. Set the currentTime.
  // 2. Call printTime.
  // 3. Schedule the tick interval.
  this.currentTime = new Date();
  this.printTime();
  clock = this
  setInterval(function(){
    clock._tick();
  }, Clock.TICK)
};

Clock.prototype._tick = function () {
  // 1. Increment the currentTime.
  // 2. Call printTime.
  debugger
  this.currentTime.setSeconds(this.currentTime.getSeconds() + 5);
  this.printTime();
};

var clock = new Clock();
clock.run();
