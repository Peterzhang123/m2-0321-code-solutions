

var counter = 4;
var si = setInterval(function () {
  counter--;
  document.getElementsByTagName("h1")[0].textContent = counter;
  if (counter === 0) {
    document.getElementsByTagName("h1")[0].textContent = "~Earth Beeeelooowww Us~";
    myStopFunction();
  }

}, 1000);

function myStopFunction() {
  clearInterval(si);
}