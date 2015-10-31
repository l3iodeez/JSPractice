"use strict";

var HumanPlayer = function (name) {
  this.name = name;
};

HumanPlayer.prototype.move = function (board, mark, callback, reader) {
  board.render();
  var retry = this.move.bind(this);
  reader.question("Enter a move as x,y", function (input) {
    var pos = input.split(',');
    pos = [pos[1], pos[0]];
    if (board.isEmpty(pos)) {
      callback(pos);
    }
    else {
      console.log("Invalid entry");
      retry(board, mark, callback);
    }
  });
};

module.exports = HumanPlayer;
