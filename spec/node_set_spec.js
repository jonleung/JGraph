/*
  #TODO

  Create a helper methods that do a bunch 
  Start a basic case, create a basic one don't do nested dseribe

  TODO:
    write Spike first
    Then Write Tests
    Then write the call
*/

describe("NodeSetSpec", function() {

  var nodeSet;
  var a, deletable;
  var nodeArray;

  beforeEach(function(){
    nodeSet = J.NodeSet.create();
    a = J.Node.create("a");
  });

  it("there is nothing inside of nodeSet", function() {
    nodeSet.clear();
    expect( nodeSet.size() ).toBe(0);
    expect( nodeSet.length() ).toBe(0);
  });

  describe("adding 'a' to nodeSet", function() {
    beforeEach(function(){
      nodeSet.add(a)
    })
    it("should make a in the nodeSet", function() {
      expect( nodeSet.contains(a) ).toBe(true);
    });
    it("so it should no longer be empty", function() {
      expect( nodeSet.isEmpty() ).toBe(false);
    });
    it("'a' should be able to be properly removed by node", function() {
      var removedNode = nodeSet.remove(a);
      expect( removedNode.equals(a) ).toBe(true);
      expect( nodeSet.contains(a) ).toBe(false);
    });
  })

  describe("after clearing the nodeSet", function() {
    beforeEach(function(){
      nodeSet.reset();
    });
    it("the nodeset should be empty", function() {
      expect( nodeSet.isEmpty() ).toBe(true);
    });
  })

  describe("to array", function() {
    beforeEach(function() {
      nodeSet = J.NodeSet.create();
      a = J.Node.create("a");
      b = J.Node.create("b");
      c = J.Node.create("c");
      nodeSet.add(a);
      nodeSet.add(b);
      nodeSet.add(c);

      nodeArray = [a, b, c];
    })

    it("nodeSet.toArray() should have all the elements", function(){
      _.each(nodeArray, function(node){
        expect( nodeSet.contains(node) ).toBe(true);
      });
    });

    it("nodeSet.each should show all the elements", function(){
      var numNodes = 0;
      nodeSet.each(function(node){
        numNodes++;
            expect( _.contains(nodeArray, node) ).toBe(true);
      });

      expect( numNodes ).toBe( nodeArray.length );
    });
  });







  


  

})