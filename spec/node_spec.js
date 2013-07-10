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