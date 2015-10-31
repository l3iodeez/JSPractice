"use strict";

var Board = function () {
  this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
};


Board.prototype.cols = function () {
  var cols = [[],[],[]]
  this.board.forEach(function (row, cIndex){
    row.forEach(function (mark, cIndex){
      cols[cIndex].push(mark)
    });

  });

  return cols
};

Board.prototype.diagonals = function () {
  var down_diag = [[0, 0], [1, 1], [2, 2]]
  var up_diag = [[0, 2], [1, 1], [2, 0]]
  var board = this.board
  return [down_diag, up_diag].map(function (diag) {
    return diag.map(function (pos) {
      return board[pos[0]][pos[1]];
    });
  });
};

Board.prototype.winner = function () {
  var winner = -1
  this.board.concat(this.cols(), this.diagonals()).forEach(function (triple) {
    if (JSON.stringify(triple) === '["x","x","x"]') {
      winner = 'x';
    }
    else if (JSON.stringify(triple) === '["o","o","o"]') {
      winner =  'o';
    } 
  });
  return winner;
};

Board.prototype.isWon = function () {
  if (this.winner() !== -1) {
    return true;
  }
  else {
    return false;
  }
};

Board.prototype.render = function () {
  this.board.forEach(function (row) {
    console.log(JSON.stringify(row))
  });
};

Board.prototype.placeMark = function (pos, mark) {
  this.board[pos[0]][pos[1]] = mark;
};

Board.prototype.removeMark = function (pos) {
  this.board[pos[0]][pos[1]] = null;
};

Board.prototype.isEmpty = function (pos) {
  if (pos[0] < 0 || pos[0] > 2 || pos[1] < 0 || pos[1] > 2){
    return false;
  }
  if (this.board[pos[0]][pos[1]]) {
    return false;
  }
  return true;
};


module.exports = Board;
