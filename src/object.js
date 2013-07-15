var J = J || {};

J.Object = {
  create: function() {
    var self = Object.create(Object.prototype);
    J.Object.Blueprint.call(self);
    return this.extend(self);
  },

  equals: function(other) {
    if (other.getObjectId !== undefined) {
      return this.getObjectId() === other.getObjectId();  
    }
    return false;
  },

  toString: function() {
    return StringUtils.format("<0x{0}>", this.getObjectId());
  },

  wrappedToString: function(innerString) {
    return String.Utils.format("<0x{0}: {1}>", this.getObjectId(), innerString);
  }

};

J.Object.Blueprint = function() {
  var objectId = J.Object.generateObjectId();

  this.getObjectId = function() {
    return objectId;
  }
}

J.Object.generateObjectId = (function() {
  var globalObjectIdCounter = 0;
  return function generateId() {
    return globalObjectIdCounter++;
  }
})();