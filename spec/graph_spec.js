describe("Graph", function(){

  var graph;
  var s, a, b, c, d, e;
  var nodes;

  beforeEach(function() {
    graph = new J.Graph();

    s = graph.createNode("S");
    a = graph.createNode("A");
    b = graph.createNode("B");
    c = graph.createNode("C");
    d = graph.createNode("D");
    e = graph.createNode("E");

    s.connect(b);
    a.connect(c);
    b.connect(c);
    c.connect(d);
    c.connect(e);
    b.connect(d);

    nodes = [s, a, b, c, d, e];
  });




})