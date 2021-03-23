/* exported Account */

var Account = function (number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0) {
    var depositTransaction = new Transaction("deposit", amount);
    this.transactions.push(depositTransaction);
    return true;
  } else {
    return false;
  }
}

Account.prototype.withdraw = function (amount) {
  if (amount > 0) {
    var withdrawTransaction = new Transaction("withdraw", amount);
    this.transactions.push(withdrawTransaction);
    return true;
  } else {
    return false;
  }
}

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  } else {
    var depositTotal = 0;
    var withdrawTotal = 0;

    this.transactions.forEach(v => {
      if (v.type == "deposit") {
        depositTotal += v.amount;
      } else {
        withdrawTotal += v.amount;
      }
    })
    return depositTotal - withdrawTotal;
  }
}


