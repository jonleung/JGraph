describe("NodeSetSpec", function() {

  count = 0;

  var nodeSet;
  var a, b, outsider;

  nodeSet = J.NodeSet.create();
  a = J.Node.create("a");
  b = J.Node.create("a");
  outsider = J.Node.create("outsider");

  it("there is nothing inside of nodeSet", function() {
    expect( nodeSet.toArray().length ).toBe(0);
  });

  describe("adding a to the nodeSet", function() {
    
    beforeEach(function() {
      nodeSet.add(a)
    })

    it("should make a in the nodeSet", function() {
      expect( nodeSet.contains(a) ).toBe(true);
    });


  });



  

})