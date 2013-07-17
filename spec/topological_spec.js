describe("topological sort", function(){
  var graph;

  var   a  ;
  var s,  e;
  var   b  ;

  beforeEach(function(){
    graph = DirectedGraph.create();
    s = graph.createNode("a");
    a = graph.createNode("b");
    b = graph.createNode("c");
    e = graph.createNode("d");

    s.connectTo(a)
    s.connectTo(b);
    a.connectTo(e);
    b.connectTo(e);
  })

  it("should be topologicall sorted", function(){
    graph.topologicallySort();
  });


  

})