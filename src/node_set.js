var J = J || {};

J.NodeSet = {

  create: function() {
    var self = J.Object.create(this);
    self.dict = {};
    return self;
  },  

  add: function(node) {
    this.dict[node.getObjectId()] = node;
    return node;
  },

  remove: function(node) {
    return this.removeByNode(node);
  },

  removeByNode: function(node) {
    var nodeToBeDeleted = this.dict[node.getObjectId()]
    delete this.dict[node.getObjectId()]
    return nodeToBeDeleted;
  },

  contains: function(node) {
    return this.dict[node.getObjectId()] !== undefined;
  },

  length: function() {
    return Object.keys(this.dict).length;
  },

  size: function() {
    return this.length();
  },

  isEmpty: function() {
    return this.length() == 0;
  },

  clear: function() {
    this.dict = {};
    return this;
  },

  reset: function() {
    return this.clear();
  },

  each: function(fn) {
    for (var key in this.dict) {
      if (this.dict.hasOwnProperty(key)) {
        fn( this.dict[key] )
      }
    }
    return this;
  },

  toArray: function() {
    var array = [];
    this.each(function(node){
      array.push(node);
    });
    return array;
  },

  toString: function() {
    return this.wrappedToString( this.toArray.toString() );
  }

};