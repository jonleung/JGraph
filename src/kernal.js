Object.prototype.extend = function() {
  var object = Object.create(this);

  for (var i=0, len=arguments.length; i<len; i++) {
    var extension = arguments[i];

    for (var property in extension) {
      if (
        extension.hasOwnProperty(property) ||
        typeof object[property] === "undefined"
      ) {
        object[property] = extension[property];
      }
    }
  }

  return object;
}