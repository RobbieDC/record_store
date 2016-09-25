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
  }
}

module.exports = Collector;