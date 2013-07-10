describe("Helpers", function() {

  it("declare a working StringUtils.format function", function(){
    expect( StringUtils.format("{0} {1}", "Hello", "World")   ).toMatch(/Hello World/); 
  });
  
})
