var Store = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.records = [];
  this.balance = balance;
}

Store.prototype = {
  addRecord: function( record ) {
    this.records.push( record );
  },

  listInventory: function() {
    var inventoryList = []
    var inventoryHeader = ["Artist", "Title", "Price"];
    formattedHeader = inventoryHeader.join(" | ");
    inventoryList.push(formattedHeader);
    this.records.forEach(function(record) {
      var recordAsArray = [record.artist, record.title, record.price];
      var formattedRecord = recordAsArray.join(" | ");
      inventoryList.push(formattedRecord);
    });
    return inventoryList.join("\n");
  },

  sellRecord: function( record ) {
    var index = this.records.indexOf( record );
    this.records.splice( index, 1 );
    this.balance += record.price;
  },

  totalAssetValue: function() {
    var totalValue = 0;
    totalValue += this.balance;
    for(var record of this.records) {
      totalValue += record.price;
    }
    return totalValue;
  }

}

module.exports = Store;