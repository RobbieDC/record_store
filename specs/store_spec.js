var assert = require("assert");
var Store = require("../store");

describe("store", function() {

  var store1;

  beforeEach(function() {
    store1 = new Store("Bieber & Beyond", "Glasgow");
  });

  it("store has name", function() {
    assertt.equal( "Bieber & Beyond", store1.name );
  });

});