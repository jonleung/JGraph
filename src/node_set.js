var J = J || {};

J.NodeSet = {

  create: function() {
    return this.extend(J.Object.create(), {
      dict: {}
    });
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

  each: function(context, fn) {
    if(arguments.size < 2) {
      throw("You must provide a context and a function!")
    }
    for (var key in this.dict) {
      if (this.dict.hasOwnProperty(key)) {
        var node = this.dict[key];
        if (context !== undefined) {
          fn.call(context, node);
        }
        else {
          fn( node );
        }
      }
    }
    return this;
  },

  toArray: function() {
    var array = [];
    this.each(this, function(node){
      array.push(node);
    });
    return array;
  },

  toString: function() {
    return this.wrappedToString( this.toArray.toString() );
  }

};