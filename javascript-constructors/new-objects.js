var anObject = new Object();
console.log('value of anObject:', anObject);
console.log('typeof anObject:', typeof anObject);

var anArray = ['Apple', 'Banana'];
console.log("value of anArray ", anArray);
console.log("typeof anArray ", typeof anArray);

var aFunction = function createFunction() {
  var x = 20;
  return new Function('return x; ',x); 
};
console.log("value of aFunction ", aFunction);
console.log("typeof aFunction ", typeof aFunction);

var aString = new String("A String object");
console.log("value of aString ", aString);
console.log("typeof aString ", typeof aString);

var aNumber = new Number('123');
console.log("value of aNumber ", aNumber);
console.log("typeof aNumber ", typeof aNumber);

var aBoolean = newBoolean(false);
console.log("value of aBoolean ", aBoolean);
console.log("typeof aBoolean ", typeof aBoolean);
