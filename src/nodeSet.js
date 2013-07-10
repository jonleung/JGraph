var J = J || {};

J.NodeSet = {

  create: function() {
    var self = J.Object.create(this);
    self.dict = {};
    return self;
  },

  add: function(node) {
    this.dict[node.getObjectId()] = node;
  },

  remove: function(node) {
    if (node.spawner === J.Node) {
      
    }
    else if(node.constructor === String) {
      return removeByValue(node);
    }
    else {
      throw "Invalid Type"
    }
  },

  removeByNode: function(node) {
    var node = dict[node.getObjectId()]
    delete dict[node.getObjectId()]
    return node;
  },

  removeByValue: function(nodeValue) {
    for (var key in dict) {
      if (this.dict[key].value === node) {
        return this.dict[key];
      }
    }
    return null;
  },

  contains: function(node) {
    return this.dict[node.getObjectId()] !== undefined;
  },

  length: function() {
    return Object.keys(this.dict).length;
  },

  size: function() {
    return this.length;
  },

  reset: function() {
    this.dict = {};
  },

  each: function(fn) {
    for (var key in this.dict) {
      if (this.dict.hasOwnProperty(key)) {
        fn( this.dict[this.key] )
      }
    }
  },

  toArray: function() {
    var array = [];
    this.each(function(node){
      array.push(node);
    });
    return array;
  },

  toString: function() {
    return this.toArray().toString();
  }

};