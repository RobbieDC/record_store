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
  }

  // var kvArray = [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}];
  // var reformattedArray = kvArray.map(function(obj){ 
  //    var rObj = {};
  //    rObj[obj.key] = obj.value;
  //    return rObj;
  // });

}

module.exports = Store;