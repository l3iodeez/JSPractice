"use strict";

var source = require("./src");
var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var p1 = new source.HumanPlayer("hooman");
var p2 = new source.ComputerPlayer();

var game = new source.Game(p1, p2, reader);

game.runLoop( function (winner) {
  console.log("Game over " + winner.name + " was the winner");
  reader.close();
});
