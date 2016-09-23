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