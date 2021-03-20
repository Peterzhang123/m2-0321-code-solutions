/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  this.balance = balance;
  this.holder = holder;
  if (!Number.isInteger(this.balance) || this.balance <= 0) {
    return null;
  } else {
    var newAccount = this.nextAccountNumber++;
    var account = new Account(newAccount, this.holder);
    account.deposit(this.balance);
    this.accounts.push(account);
    return this.accounts.length;
  }
}

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    var existAccount = this.accounts[i].number;
    if (existAccount === number) {
      return this.accounts[i];
    }
  }
  return null;
}

Bank.prototype.getTotalAssets = function () {

  if (this.accounts.length === 0) {
    return 0;
  } else {
    var depositTotal = 0;
    var withdrawTotal = 0;
    this.accounts.forEach(v => {
      v.transactions.forEach(i => {
        if (i.type == "deposit") {
          depositTotal += i.amount;
        } else if (i.type == "withdraw") {
          withdrawTotal += i.amount;
        }
      })
    })
    return depositTotal - withdrawTotal;
  }
}

