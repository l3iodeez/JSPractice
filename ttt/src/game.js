"use strict";

var Board = require("./board.js")


var Game = function (player1, player2, reader) {
  player1.mark = "x";
  player2.mark = "o";
  this.reader = reader;
  this.players = [player1, player2];
  this.board = new Board();
};

Game.prototype._switchPlayer = function () {
  this.players = [this.players[1], this.players[0]];
};

Game.prototype.currentPlayer = function () {
  return this.players[0];
};

Game.prototype.runLoop = function (completionCallback) {
  
  var executeMove = this.board.placeMark.bind(this.board);
  var switchPlayer = this._switchPlayer.bind(this);
  var nextTurn = this.runLoop.bind(this);
  var mark = this.currentPlayer().mark;
  if (this.board.isWon()) {
    completionCallback(this.board.winner);
  }
  else {
  this.currentPlayer().move(this.board, this.currentPlayer.mark,
    function (pos) {
      executeMove(pos, mark);
      switchPlayer();
      nextTurn();
    }, this.reader);
  }

};

module.exports = Game;
