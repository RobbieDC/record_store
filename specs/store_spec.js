var assert = require("assert");
var Store = require("../store");

describe("store", function() {

  var store1;

  beforeEach(function() {
    store1 = new Store("Bieber & Beyond", "Glasgow");
  });

  it("store has name", function() {
    assert.equal( "Bieber & Beyond", store1.name );
  });

  it("store has city", function() {
    assert.equal( "Glasgow", store1.city );
  });

  it("store has empty record array", function() {
    assert.deepEqual( [], store1.records );
  });

});