var ComputerPlayer = function (name) {
  this.name = name;
};

ComputerPlayer.prototype.move = function (board, mark, callback, reader) {
  callback(this.winnerMove(board, mark) || this.randomMove(board, mark));
};

ComputerPlayer.prototype.winnerMove = function (board, mark) {
  var winningPos = false;
  [0,1,2].forEach(function (row) {
    [0,1,2].forEach(function (col) {
      pos = [row, col]
      if (board.isEmpty(pos)) {
        board.placeMark(pos, mark);
        if (!board.isWon()) {
          winningPos = pos;
        }
        board.removeMark(pos);
      }
    });
  });
  return winningPos;
};

ComputerPlayer.prototype.randomMove = function (board, mark) {
  var pos;
  do {
    pos = [Math.floor(Math.random * 3), Math.floor(Math.random * 3)];
  } while (!board.isEmpty(pos));

  return pos;
};
module.exports = ComputerPlayer;
