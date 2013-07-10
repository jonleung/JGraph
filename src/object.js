var J = J || {};

J.Object = {
  create: function(template) {
    template = template || null;
    var self = Object.create(template);
    J.Object.IdBlueprint.call(self)
    return self;
  }
};

J.Object.IdBlueprint = function() {
  var objectId = J.Object.generateObjectId();

  this.getObjectId = function() {
    return objectId;
  }

  this.equals = function(other) {
    if (other.getObjectId !== undefined) {
      return this.getObjectId() === other.getObjectId();  
    }
    return false;
  }
}

J.Object.generateObjectId = (function() {
  var globalObjectIdCounter = 0;
  return function generateId() {
    return globalObjectIdCounter++;
  }
})();
