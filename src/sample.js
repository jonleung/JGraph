var ArrayUtil = function() {

}

ArrayUtil.each = function(array, fn) {
  for (var el in array) {
    fn( el );
  }
}

ArrayUtil.each([1,2,3,4], function(el) {
  console.log(el)
})