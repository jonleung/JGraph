// http://f.cl.ly/items/1G2m2k262u2P2q1z2V3I/Screen%20Shot%202013-06-21%20at%203.24.36%20PM.png
// http://stackoverflow.com/questions/12720771/adjacency-list-and-graph

// Initialization
var graph = new J.Graph();

var s = graph.createNode();
var a = graph.createNode();
var b = graph.createNode();
var c = graph.createNode();
var d = graph.createNode();
var e = graph.createNode();

s.connect(a)
s.connect(b)
a.connect(c)
b.connect(c)
c.connect(d)
c.connect(e)
b.connect(d)

var nodes = [s, a, b, c, d, e]

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
    var numNodes = 0;
    graph.each(function(node){
      numNodes++;
      expect(_.contains(nodes, node)).toBe(true)
    });

    expect(numNodes).toBe(nodes.length)
  });

});