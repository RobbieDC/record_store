var assert = require("assert");
var Record = require("../record");

describe("record", function() {

  var record_jb;

  beforeEach(function() {
    record_jb = new Record("Justin Bieber", "My World 2.0", 0.01);
  });

  it("record has artist", function() {
    assert.equal( "Justin Bieber", record_jb.artist );
  });

  it("record has title", function() {
    assert.equal( "My World 2.0", record_jb.title );
  });

  it("record has price", function() {
    assert.equal( 0.01, record_jb.price );
  });

});
