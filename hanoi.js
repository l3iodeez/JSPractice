"use strict";


var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

Array.prototype.last = function () {
  return this[this.length - 1]
}

var HanoiGame = function () {
  this.stacks = [[3,2,1],[],[]];
};

HanoiGame.prototype.isWon = function () {
  if (this.stacks[0].length === 0 &&
     (this.stacks[1].length === 0 ||
      this.stacks[2].length === 0 )) {
    return true;
  }
  else {
    return false;
  }
};
HanoiGame.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {

  if  (startTowerIdx < 0 || startTowerIdx > 2 || endTowerIdx < 0 || endTowerIdx > 2 ) {
    return false;
  }

  var start = this.stacks[startTowerIdx];
  var end =  this.stacks[endTowerIdx];

  if (start.length === 0) {
    return false;
  }
  else if (end.length === 0 || start.last() < end.last()) {
    return true;
  }
  else {
    return false;
  }
};

HanoiGame.prototype.move = function (startTowerIdx, endTowerIdx) {
  if (!this.isValidMove(startTowerIdx, endTowerIdx)) {
    return false;
  }
  else {
    var start = this.stacks[startTowerIdx];
    var end =  this.stacks[endTowerIdx];
    end.push(start.pop());
    return true;
  }
};

HanoiGame.prototype.print = function () {
  console.log(JSON.stringify(this.stacks))
}

HanoiGame.prototype.promptMove = function (callback) {
  this.print();
  var startTowerIdx = -1;
  var endTowerIdx = -1;
  reader.question("Enter your move as start,end\n", function (answer) {
    answer = answer.split(',')
    startTowerIdx = answer[0]
    endTowerIdx = answer[1]

    callback(startTowerIdx, endTowerIdx);
  });
};

HanoiGame.prototype.run = function (completionCallback) {
  game = this;
  this.promptMove( function (startTowerIdx, endTowerIdx) {
      if (game.move(startTowerIdx, endTowerIdx) === false) {
        console.log("Move is invalid! Try again.");
      }
      if (game.isWon()) {
        console.log("Congratulations! You won!");
        completionCallback();
      }
      else {
        game.run(completionCallback);
      }
    }
  );
};

var game = new HanoiGame;
game.run(function () {
    reader.close();
  }
);
