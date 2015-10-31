"use strict";


var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function (sum, numsLeft, completionCallback){
  if (numsLeft > 0) {
    reader.question("Enter a number:\n", function (input) {
      sum += parseInt(input);
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
  else {
    completionCallback(sum);
  }
};

var end = function(sum){
  console.log("Total Sum: " + sum);
  reader.close();

};

addNumbers(0,3, end);
