describe("J.Object", function() {

  beforeEach(function() {
    o = J.Object.create();
    o1 = J.Object.create();
    o2 = J.Object.create();
    
  });

  it("Objects should have a retrievable id via 'getObjectId()'", function() {
    var objectId = o.getObjectId();
    expect( !isNaN(parseFloat(objectId)) ).toBe(true);
  });

  it("The same object should 'equal' to itself", function() {
    expect( o1.equals(o1) ).toBe(true);
  });

  it("Different objects should NOT be 'equal'", function() {
    expect( o1.equals(o2) ).toBe(false);
  });

  it("Different objects should have different String representations", function() {
    expect( o1.toString() === o2.toString() ).toBe(false);
  });


});