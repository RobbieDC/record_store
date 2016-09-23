var asset = require("asset");
var Collector = require("../collector");

describe("collector", function() {

  var partickJBLover;

  beforeEach(function() {
    partickJBLover = new Collector("Alan", 50);
  });

  it("collector has name", function() {
    assert.equal( "Alan", partickJBLover.name );
  });

});