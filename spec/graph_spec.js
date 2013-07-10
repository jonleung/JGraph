describe("Graph", function(){

  var graph;
  var s, a, b, c, d, e;
  var nodes;
  
  graph = J.Graph.create();

  s = graph.createNode("S");
  a = graph.createNode("A");
  b = graph.createNode("B");
  c = graph.createNode("C");
  d = graph.createNode("D");
  e = graph.createNode("E");

  s.connectTo(a);
  s.connectTo(b);
  a.connectTo(c);
  b.connectTo(c);
  c.connectTo(d);
  c.connectTo(e);
  b.connectTo(d);

  nodes = [s, a, b, c, d, e];

  describe("The connected nodes", function() {

    it("s is connected t a", function() {
      debugger
      expect(s.isConnectedTo(a)).toBe(true);
    });

    it("s is connected t b", function() {
      expect(s.isConnectedTo(b)).toBe(true);
    });

    it("a is connected t c", function() {
      expect(a.isConnectedTo(c)).toBe(true);
    });

    it("b is connected t c", function() {
      expect(b.isConnectedTo(c)).toBe(true);
    });

    it("c is connected t d", function() {
      expect(c.isConnectedTo(d)).toBe(true);
    });

    it("c is connected t e", function() {
      expect(c.isConnectedTo(e)).toBe(true);
    });

    it("b is connected t d", function() {
      expect(b.isConnectedTo(d)).toBe(true);
    });

  });

  describe("The UNconnected nodes", function() {

    it("s is NOT connected to c", function() {
      expect(s.isConnectedTo(c)).toBe(false);
    });

    it("a is NOT connected to b", function() {
      expect(a.isConnectedTo(b)).toBe(false);
    });

    it("e is NOT connected to b", function() {
      expect(e.isConnectedTo(b)).toBe(false);
    });

    it("d is NOT connected to a", function() {
      expect(d.isConnectedTo(a)).toBe(false);
    });

  });

  describe("Iterating over the graph", function() {

    it("The Graph contains all of the nodes", function(){
      var numNodes = 0;
      graph.each(function(node){
        numNodes++;
        expect(_.contains(nodes, node)).toBe(true)
      });

      expect(numNodes).toBe(nodes.length)
    });

  });

})