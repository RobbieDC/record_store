var assert = require("assert");
var Store = require("../store");
var Record = require("../record");

describe("store", function() {

  var store1;

  beforeEach(function() {
    store1 = new Store("Bieber & Beyond", "Glasgow", 200);
  });

  it("store has name", function() {
    assert.equal( "Bieber & Beyond", store1.name );
  });

  it("store is in the best city", function() {
    assert.equal( "Glasgow", store1.city );
  });

  it("store has empty record array", function() {
    assert.deepEqual( [], store1.records );
  });

  it("store has balance", function() {
    assert.equal( 200, store1.balance );
  });

});

describe("store record interction", function() {

  var store2;
  var record1;
  var record2;
  var record3;

  beforeEach(function() {
    store2 = new Store( "Bieber Boutique", "Paisley", 20 );
    record1 = new Record( "Justin Bieber", "Believe", 0.02 );
    record2 = new Record( "One Direction", "Up All Night", 0.03 );
    record3 = new Record( "Spice Girls", "Spiceworld", 200 );
    store2.addRecord( record1 );
    store2.addRecord( record2 );
    store2.addRecord( record3 );
  });

  it("can add record to store", function() {
    assert.deepEqual( [record1, record2, record3], store2.records );
  });

  it("can list inventory", function() {
    assert.equal("string", typeof(store2.listInventory()));
  })

});