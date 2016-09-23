var assert = require("assert");
var Store = require("../store");
var Record = require("../record");

describe("store", function() {

  var store1;

  beforeEach(function() {
    store1 = new Store("Bieber & Beyond", "Glasgow");
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

});

describe("store record interction", function() {

  var store2;
  var record1;

  beforeEach(function() {
    store2 = new Store( "Bieber Boutique", "Paisley" );
    record1 = new Record( "Justin Bieber", "Believe" );
  });

  it("can add record to store", function() {
    store2.addRecord( record1 );
  });

});