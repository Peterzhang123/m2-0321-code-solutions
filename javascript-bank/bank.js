/* exported Bank */

function Bank(){
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  this.balance = balance;
  this.holder = holder;
 if(!Number.isInteger(this.balance) || this.balance <= 0){
   return null;
 }else{
  var newAccount = this.nextAccountNumber++
   var account = new Account(newAccount,this.holder);
   account.transactions.push(balance);
   this.accounts.push(account);
  }
  return this.accounts.length;
}

Bank.prototype.getAccount = function (number) {
  this.accountNumbers = this.accounts.map(v => {return v.number});
  var index = this.accountNumbers.indexOf(number)
  if( index === -1){
    return null;
  }else{
    for(var i = 0; i < this.accounts.length; i++){
      return this.accounts[index];
    }
  }T
}

Bank.prototype.getTotalAssets = function () {
  var subTotal = 0;
  if(this.accounts.length === 0){
    return 0;
  }else{
    this.accounts.forEach((v,i) => {
      if(i>=0){
        subTotal += addAll(v.transactions);
      }
    })
    return subTotal;
  }
}

function addAll(transacion) {
  var singleTotal = 0;
    transacion.forEach(v => {
      singleTotal += v;
    })
    return singleTotal;
}