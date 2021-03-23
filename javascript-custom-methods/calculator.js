/* exported calculator */
var calculator = {
  add: function (a, b) {
    var result = a + b;
    return result;
  },
  subtract: function (x, y) {
    var result = x - y;
    return result;
  },
  multiply: function (x, y) {
    var result = x * y;
    return result;
  },
  divide: function (x, y) {
    var result = x / y;
    return result;
  },
  square: function (x) {
    var result = x * x;
    return result;
  },
  sumAll: function (x) {
    var result = 0;
    x.forEach(v => {
      result += v;
    });
    return result;
  },
  getAverage: function (x) {
    var result = 0;
    var xLength = x.length;
    x.forEach(v => {
      result += v;
    });
    return result / xLength;
  }
}

