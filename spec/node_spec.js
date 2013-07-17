describe("new J.Node", function() {

  var graph;

  beforeEach(function() {
    graph = J.Graph.create();
    newNode = graph.createNode("newNode");
  });

  it("a spawned node with a designated name should have a retrievable name", function() {
    expect( newNode.value ).toBe("newNode");
  });

  it("Nodes without values set should have uniquely set values", function(){
    graph = J.Graph.create();
    n1 = graph.createNode();
    n2 = graph.createNode();
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
      graph = J.Graph.create();
      a = graph.createNode("a");
      b = graph.createNode("b")
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
      graph = J.Graph.create();
      a = graph.createNode("a");
      b = graph.createNode("b")
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
        graph = J.Graph.create();
      a = graph.createNode("a");
      b = graph.createNode("b")
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