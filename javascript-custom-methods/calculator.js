/* exported calculator */
var calculator = {
  add:function (a,b) {
    var result = a + b;
    return result;
  },
  subtract:function (x,y) {
    var result = x - y;
    return result;
  },
  multiply:function (x,y) {
    var result = x * y;
    return result;
  },
  divide:function (x,y) {
    var result = x / y;
    return result;
  },
  square:function (x) {
    var result = x * x;
    return result;
  },
  sumAll:function (x) {
    var result = 0;
    x.forEach(v => {
      result += v;
    });
    return result;
  },
  getAverage:function (x) {
    var result = 0;
    var xLength = x.length;
    x.forEach(v=>{
      result += v;
    });
    return result / xLength;
  }
}

console.log(calculator.add(2,3));
console.log(calculator.add(5,4));
console.log(calculator.add(9,7));

console.log(calculator.subtract(2,3));
console.log(calculator.subtract(5,4));
console.log(calculator.subtract(9,7));

console.log(calculator.multiply(2,3));
console.log(calculator.multiply(5,4));
console.log(calculator.multiply(9,7));

console.log(calculator.divide(2,3));
console.log(calculator.divide(5,4));
console.log(calculator.divide(100, 20));

console.log(calculator.square(2));
console.log(calculator.square(5));
console.log(calculator.square(10));

console.log(calculator.sumAll([2,3]));
console.log(calculator.sumAll([5, 6, 7]));
console.log(calculator.sumAll([92, 88, 95, 101]));

console.log(calculator.getAverage([2,3]));
console.log(calculator.getAverage([5, 6, 7]));
console.log(calculator.getAverage([92, 88, 95, 101]));

