var assert = require("assert");
var Collector = require("../collector");

describe("collector", function() {

  var partickJBLover;

  beforeEach(function() {
    partickJBLover = new Collector("Ralan Ussel", 50);
  });

  it("collector has name", function() {
    assert.equal( "Ralan Ussel", partickJBLover.name );
  });

  it("collector has cash", function() {
    assert.equal( 50, partickJBLover.cash );
  });

  it("collector has empty record array", function() {
    assert.deepEqual( [], partickJBLover.records );
  });

});

describe("collector store record interaction", function() {

  var aberdeenJBFan;
  var record1;
  var store1;

  beforeEach(function() {
    aberdeenJBFan = new Collector( "Mavid Dorrison", 250 );
    record1 = new Record( "Justin Bieber", "My World 2.0" );
  });

  it("collector can buy record from store", function() {

  });

});