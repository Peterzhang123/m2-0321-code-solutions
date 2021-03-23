/* exported Account */

var Account = function(number,holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if(amount > 0){
    this.transactions.push(amount);
    return true;
  } else{
    return false;
  }
}

Account.prototype.withdraw = function (amount) {
  if(amount > 0){
    this.transactions.push(-amount);
    return true;
  } else{
    return false;
  }
}

Account.prototype.getBalance = function () {
  var total = 0;
  if(this.transactions.length === 0){
    return 0;
  }else{
    this.transactions.forEach( v => {
      total += v;
    })
  }
  return total;
}

