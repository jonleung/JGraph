describe("new J.Node", function() {

  beforeEach(function() {
    newNode = J.Node.create("newNode");
  });

  it("a spawned node with a designated name should have a retrievable name", function() {
    expect( newNode.value ).toBe("newNode");
  });

  it("Nodes without values set should have uniquely set values", function(){
    n1 = J.Node.create();
    n2 = J.Node.create();
    expect( n1.value ).toNotBe( n2.value );
  });

})

describe("when connecting nodes", function() {

  var graph;

  var   a;
  var b;
  var   c;

  describe("unconnected nodes are not connected", function() {

    beforeEach(function() {
      a = J.Node.create("a");
        b = J.Node.create("b")
    });

    it("a should not be to b", function() {
      expect( a.isConnectedTo(b) ).toBe(false);
    });

    it("b should not be connected to a", function() {
      expect( b.isConnectedTo(a) ).toBe(false);
    });

  });

  describe("when a is connected to b", function() {

    beforeEach(function() {
      a = J.Node.create("a");
      b = J.Node.create("b")
      a.connectTo(b);
    });

    it("a should be connected to b", function() {
      expect( a.isConnectedTo(b) ).toBe(true);
    });

    it("b should be connected to a", function() {
      expect( b.isConnectedTo(a) ).toBe(true);
    });

  });

  describe("when b is connected to a", function() {

    beforeEach(function() {
      a = J.Node.create("a");
      b = J.Node.create("b")
      b.connectTo(a);
    });

    it("a should be connected to b", function() {
      expect( a.isConnectedTo(b) ).toBe(true);
    });

    it("b should be connected to a", function() {
      expect( b.isConnectedTo(a) ).toBe(true);
    });

  });

});