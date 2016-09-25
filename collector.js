var Collector = function( name, cash ) {
  this.name = name;
  this.cash = cash;
  this.records = [];
}

Collector.prototype = {
  buyRecord: function( record, store ) {
    store.sellRecord( record );
    this.records.push( record );
    this.cash -= record.price;
  },

  sellRecord: function( record, store ) {
    var recordIndex = this.records.indexOf( record );
    this.records.splice( recordIndex, 1 );
    this.cash += record.price;
    store.addRecord( record );
    store.balance += record.price;
  }
}

module.exports = Collector;