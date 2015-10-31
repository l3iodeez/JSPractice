( function () {
  // Make a namespace `Assessment`.

  // write String.prototype.mySlice. It should take a start index and an
  // (optional) end index.
    String.prototype.mySlice = function (start, end) {
      var chars = this.split('');
      if (end === undefined){
      end = chars.length;
      }
      var result = "";
      for (i = 0; i < chars.length; i++){
        if (i >= start && i < end){
          result += chars[i];
        }
      }
      return result;
      // body...
    };
  // write Array.prototype.myReduce (analogous to Ruby's Array#inject).
  Array.prototype.myReduce = function (func) {
    var accumulator = this[0];
    for (i = 1; i < this.length; i++){
      accumulator = func(accumulator, this[i]);
    }
    return accumulator;
  };



  // write Array.prototype.quickSort(comparator). Here's a quick refresher if
  // you've forgotten how quickSort works:
  //   - choose a pivot element from the array (usually the first)
  //   - for each remaining element of the array:
  //     - if the element is less than the pivot, put it in the left half of the
  //     array.
  //     - otherwise, put it in the right half of the array.
  //   - recursively call quickSort on the left and right halves, and return the
  //   full sorted array.



    Array.prototype.quickSort = function (comparator) {

      if (this.length <= 1){
        return this;
      }
      if (comparator === undefined){
        comparator = function (x, y) {
          if (x == y) {
            return 0;
          } else if (x < y) {
            return 1;
          } else {
            return -1;
          }
        };
      }
      var left  = [];
      var right = [];
      var pivot = this[0];
      for (i = 1; i < this.length;i ++) {
        var compareResult = comparator(this[i], pivot);
        if ( compareResult === 1){
          left.push(this[i]);
        } else {
          right.push(this[i]);
        }
      }
      return (left.quickSort().concat([pivot],right.quickSort()));
    };

  // write myFind(array, callback). It should return the first element for which
  // callback returns true, or undefined if none is found.

  Assessment = {
    myFind: function (array, callback) {
      for (i = 0; i < array.length; i++){
        if (callback(array[i])) {
          return array[i];
        }
      }
    },
    isPrime: function(n){
      if (n === 0 || n === 1) {
        return false;
      } else if (n === 2) {
        return true;
      } else {
        for (i = 2; i < n; i++){
          if ( n % i === 0 ){
            return false;
          }
        }
        return true;
      }
    },
    sumNPrimes: function(n) {
      var counter = 0;
      var sum = 0;
      var i = 2;
      while (counter < n) {
        if (this.isPrime(i)) {
          sum += i;
          counter += 1;
        }
        i += 1;
      }
      return sum;
    }
  };

  Function.prototype.myBind = function (context) {
    var fn = this;
    var result =  function(){
      return fn.apply(context);
    };
    return result;
  };




  // write sumNPrimes(n)



  // write Function.prototype.myBind.

  // write Function.prototype.inherits.

})();
