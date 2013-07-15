// Integration Testing

describe("Graph", function(){

  var graph;
  var s, a, b, c, d, e;
  
  graph = J.Graph.create();

  s = graph.createNode("s");
  a = graph.createNode("a");
  b = graph.createNode("b");
  c = graph.createNode("c");
  d = graph.createNode("d");
  e = graph.createNode("e");
  ePrime = graph.createNode("e");
  eUnconnected = graph.createNode("e");

  s.connectTo(a);
  s.connectTo(b);
  a.connectTo(c);
  b.connectTo(c);
  c.connectTo(d);
  c.connectTo(e);
  b.connectTo(d);
  e.connectTo(ePrime);

  describe("The connected nodes", function() {

    it("s is connected t a", function() {
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
      var allNodes = [s, a, b, c, d, e, ePrime, eUnconnected];

      var numNodes = 0;
      graph.each(function(node){
        numNodes++;
        //     expect(_.contains(nodes, node)).toBe(true)
      });



      expect(numNodes).toBe(allNodes.length)
    });

  });

  describe("searching the graph with BFS", function(){

    var searchResults;

    beforeEach(function(){
      debugger
      searchResults = graph.findValueByBfs(s, "e");
    });

    it("for node with value 'e' starting on s should find the 2 'e' nodes", function(){
      expect( searchResults.length ).toBe(2);
      expect( _.contains(searchResults, e) ).toBe(true);
      expect( _.contains(searchResults, ePrime) ).toBe(true);
    });

    it("for node with value 'e' starting on s should NOT find unconnected 'e' node", function(){
      expect( _.contains(searchResults, eUnconnected) ).toBe(false);
    });

    it("the levels are setup correctly", function(){
      var levels = searchResults.levels

      expect( _.contains(levels[0], s) ).toBe(true);
      expect( _.contains(levels[1], a) ).toBe(true);
      expect( _.contains(levels[1], b) ).toBe(true);
      expect( _.contains(levels[2], c) ).toBe(true);
      expect( _.contains(levels[2], d) ).toBe(true);
      expect( _.contains(levels[3], e) ).toBe(true);
      expect( _.contains(levels[4], ePrime) ).toBe(true);
    });

  });

  describe("searching the graph with DFS", function(){

    var searchResults;

    beforeEach(function(){
      searchResults = graph.findValueByDfs(s, "e", "dfs");
      debugger
    });

    it("for node with value 'e' starting on s should find the 2 'e' nodes", function(){
      expect( searchResults.length ).toBe(2);
      expect( _.contains(searchResults, e) ).toBe(true);
      expect( _.contains(searchResults, ePrime) ).toBe(true);
    });

    it("for node with value 'e' starting on s should NOT find unconnected 'e' node", function(){
      expect( _.contains(searchResults, eUnconnected) ).toBe(false);
    });

    xit("the levels are setup correctly", function(){
      var levels = searchResults.levels

      expect( _.contains(levels[0], s) ).toBe(true);
      expect( _.contains(levels[1], a) ).toBe(true);
      expect( _.contains(levels[1], b) ).toBe(true);
      expect( _.contains(levels[2], c) ).toBe(true);
      expect( _.contains(levels[2], d) ).toBe(true);
      expect( _.contains(levels[3], e) ).toBe(true);
      expect( _.contains(levels[4], ePrime) ).toBe(true);
    });




  })



})