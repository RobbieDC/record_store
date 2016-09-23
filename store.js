var Store = function(name, city) {
  this.name = name;
  this.city = city;
  this.records = [];
}

Store.prototype = {
  addRecord: function( record ) {
    this.records.push( record );
  }
}

module.exports = Store;