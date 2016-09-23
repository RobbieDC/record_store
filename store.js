var Store = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.records = [];
  this.balance = balance;
}

Store.prototype = {
  addRecord: function( record ) {
    this.records.push( record );
  }
}

module.exports = Store;